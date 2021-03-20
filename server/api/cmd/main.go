package main

import (
	"bufio"
	"fmt"
	"go/ast"
	"go/parser"
	"go/token"
	"log"
	"os"
	"strings"
)

type Struct struct {
	Name   string
	Fields []Object
}

type Object struct {
	Name    string
	Type    string
	Literal string
}

func main() {
	files := []string{
		"auth",
		"user",
	}

	for _, file := range files {
		if err := convertFile(file); err != nil {
			log.Panic(err)
		}
	}
}

func convertFile(file string) error {
	var structs []Struct

	fset := token.NewFileSet()
	f, err := parser.ParseFile(fset, fmt.Sprintf("../%s.go", file), nil, 0)
	if err != nil {
		log.Fatal(err)
	}

	for _, decl := range f.Decls {
		genDecl, ok := decl.(*ast.GenDecl)
		if !ok {
			continue
		}

		for _, spec := range genDecl.Specs {
			typeSpec, ok := spec.(*ast.TypeSpec)
			if !ok {
				continue
			}

			structType, ok := typeSpec.Type.(*ast.StructType)
			if !ok {
				continue
			}

			st := Struct{Name: typeSpec.Name.String()}

			for _, field := range structType.Fields.List {
				var tag string
				if field.Tag != nil {
					tag = field.Tag.Value
				}

				var t string
				switch ft := field.Type.(type) {
				case *ast.Ident:
					t = ft.Name
				case *ast.ArrayType:
					t = "array"
				case *ast.StarExpr:
					t = "pointer"
				}

				st.Fields = append(st.Fields, Object{
					Name:    field.Names[0].String(),
					Type:    t,
					Literal: tag,
				})
			}

			structs = append(structs, st)
		}
	}

	ts, err := os.Create(fmt.Sprintf("../%s.ts", file))
	if err != nil {
		log.Panic(err)
	}

	w := bufio.NewWriter(ts)
	for _, s := range structs {
		if err := s.write(w); err != nil {
			log.Panic(err)
		}
	}
	return w.Flush()
	//ast.Print(fset,f)
}

func (s Struct) write(w *bufio.Writer) error {
	_, err := w.WriteString(fmt.Sprintf("export class %s {\n", s.Name))
	if err != nil {
		return err
	}

	for _, f := range s.Fields {
		//log.Println(f.Name, f.Type, f.Literal)
		l := strings.TrimPrefix(strings.TrimSuffix(f.Literal, "\"`"), "`json:\"")
		if l == "" {
			continue
		}

		_, err = w.WriteString(fmt.Sprintf("  %s: %s;\n", l, convertType(f.Type)))
		if err != nil {
			return err
		}
	}

	_, err = w.WriteString("}\n\n")
	if err != nil {
		return err
	}

	return nil
}

func convertType(t string) string {
	switch t {
	case "string":
		return "string"
	case "int", "uint", "int32", "uint32", "int64", "uint64":
		return "number"
	case "bool":
		return "boolean"
	}
	return ""
}
