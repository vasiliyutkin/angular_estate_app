(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+nwC":
    /*!****************************************************************!*\
      !*** ./src/app/component_library/spinner/spinner.component.ts ***!
      \****************************************************************/

    /*! exports provided: SpinnerComponent */

    /***/
    function nwC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
        return SpinnerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SpinnerComponent = function SpinnerComponent() {
        _classCallCheck(this, SpinnerComponent);
      };

      SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
        return new (t || SpinnerComponent)();
      };

      SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpinnerComponent,
        selectors: [["app-spinner"]],
        decls: 5,
        vars: 0,
        consts: [[1, "overlay"], [1, "loader"], [1, "inner", "one"], [1, "inner", "two"], [1, "inner", "three"]],
        template: function SpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 99999999;\n  background: linear-gradient(to right bottom, rgba(242, 242, 242, 0.3), rgba(229, 229, 229, 0.3));\n}\n\n.loader[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(45% - 25px);\n  left: calc(50% - 25px);\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  perspective: 800px;\n}\n\n.inner[_ngcontent-%COMP%] {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.inner.one[_ngcontent-%COMP%] {\n  left: 0%;\n  top: 0%;\n  -webkit-animation: rotate-one 1s linear infinite;\n          animation: rotate-one 1s linear infinite;\n  border-bottom: 0.4rem solid #708090;\n}\n\n.inner.two[_ngcontent-%COMP%] {\n  right: 0%;\n  top: 0%;\n  -webkit-animation: rotate-two 1s linear infinite;\n          animation: rotate-two 1s linear infinite;\n  border-right: 0.4rem solid #708090;\n}\n\n.inner.three[_ngcontent-%COMP%] {\n  right: 0%;\n  bottom: 0%;\n  -webkit-animation: rotate-three 1s linear infinite;\n          animation: rotate-three 1s linear infinite;\n  border-top: 0.4rem solid #708090;\n}\n\n@-webkit-keyframes rotate-one {\n  0% {\n    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\n  }\n}\n\n@keyframes rotate-one {\n  0% {\n    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\n  }\n}\n\n@-webkit-keyframes rotate-two {\n  0% {\n    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\n  }\n}\n\n@keyframes rotate-two {\n  0% {\n    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\n  }\n}\n\n@-webkit-keyframes rotate-three {\n  0% {\n    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\n  }\n}\n\n@keyframes rotate-three {\n  0% {\n    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnR0FBQTtBQURGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsUUFBQTtFQUNBLE9BQUE7RUFDQSxnREFBQTtVQUFBLHdDQUFBO0VBQ0EsbUNBQUE7QUFMRjs7QUFRQTtFQUNFLFNBQUE7RUFDQSxPQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtFQUNBLGtDQUFBO0FBTEY7O0FBUUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtEQUFBO1VBQUEsMENBQUE7RUFDQSxnQ0FBQTtBQUxGOztBQVFBO0VBQ0U7SUFDRSx1REFBQTtFQUxGO0VBT0E7SUFDRSx5REFBQTtFQUxGO0FBQ0Y7O0FBREE7RUFDRTtJQUNFLHVEQUFBO0VBTEY7RUFPQTtJQUNFLHlEQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFO0lBQ0Usc0RBQUE7RUFORjtFQVFBO0lBQ0Usd0RBQUE7RUFORjtBQUNGOztBQUFBO0VBQ0U7SUFDRSxzREFBQTtFQU5GO0VBUUE7SUFDRSx3REFBQTtFQU5GO0FBQ0Y7O0FBU0E7RUFDRTtJQUNFLHNEQUFBO0VBUEY7RUFTQTtJQUNFLHdEQUFBO0VBUEY7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usc0RBQUE7RUFQRjtFQVNBO0lBQ0Usd0RBQUE7RUFQRjtBQUNGIiwiZmlsZSI6InNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hcHAvdGhlbWUvdmFyaWFibGVzLnNjc3MnO1xuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA5OTk5OTk5OTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcbiAgICByZ2JhKDI0MiwgMjQyLCAyNDIsIDAuMyksXG4gICAgcmdiYSgyMjksIDIyOSwgMjI5LCAwLjMpXG4gICk7XG59XG5cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg0NSUgLSAyNXB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAyNXB4KTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwZXJzcGVjdGl2ZTogODAwcHg7XG59XG5cbi5pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW5uZXIub25lIHtcbiAgbGVmdDogMCU7XG4gIHRvcDogMCU7XG4gIGFuaW1hdGlvbjogcm90YXRlLW9uZSAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIGJvcmRlci1ib3R0b206IDAuNHJlbSBzb2xpZCAkc2xhdGUtZ3JheTtcbn1cblxuLmlubmVyLnR3byB7XG4gIHJpZ2h0OiAwJTtcbiAgdG9wOiAwJTtcbiAgYW5pbWF0aW9uOiByb3RhdGUtdHdvIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAwLjRyZW0gc29saWQgJHNsYXRlLWdyYXk7XG59XG5cbi5pbm5lci50aHJlZSB7XG4gIHJpZ2h0OiAwJTtcbiAgYm90dG9tOiAwJTtcbiAgYW5pbWF0aW9uOiByb3RhdGUtdGhyZWUgMXMgbGluZWFyIGluZmluaXRlO1xuICBib3JkZXItdG9wOiAwLjRyZW0gc29saWQgJHNsYXRlLWdyYXk7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlLW9uZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoLTQ1ZGVnKSByb3RhdGVaKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZS10d28ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDUwZGVnKSByb3RhdGVZKDEwZGVnKSByb3RhdGVaKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCg1MGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlLXRocmVlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSg1NWRlZykgcm90YXRlWigwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoNTVkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "/hi3":
    /*!********************************************!*\
      !*** ./src/app/signin/signin.component.ts ***!
      \********************************************/

    /*! exports provided: SigninComponent */

    /***/
    function hi3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
        return SigninComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SigninComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.loginError, " ");
        }
      }

      function SigninComponent_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email Address is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function SigninComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SigninComponent_div_12_div_1_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.lf.username.errors.required);
        }
      }

      function SigninComponent_div_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function SigninComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SigninComponent_div_15_div_1_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.lf.password.errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var SigninComponent = /*#__PURE__*/function () {
        function SigninComponent(formBuilder, router, authenticationService) {
          _classCallCheck(this, SigninComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.authenticationService = authenticationService;
          this.loginFormSubmitted = false;
          this.loginError = '';
        }

        _createClass(SigninComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
          }
        }, {
          key: "lf",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "login",
          value: function login() {
            var _this = this;

            this.loginFormSubmitted = true;

            if (this.loginForm.invalid) {
              return;
            }

            this.authenticationService.login(this.lf.username.value, this.lf.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (_) {
              _this.router.navigate(['/']);
            }, function (error) {
              _this.loginError = error;
              setTimeout(function () {
                _this.loginError = null;
              }, 5000);
            });
          }
        }]);

        return SigninComponent;
      }();

      SigninComponent.ɵfac = function SigninComponent_Factory(t) {
        return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
      };

      SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SigninComponent,
        selectors: [["app-signin"]],
        decls: 22,
        vars: 10,
        consts: [[1, "container", "mx-auto"], [1, "col-md-6", "offset-md-3", "mt-4"], [1, "card"], [1, "card-body"], ["class", "error alert alert-danger mx-auto mb-3", 4, "ngIf"], [1, "text-center", "mb-5"], [1, "mx-auto", 3, "formGroup", "ngSubmit"], [1, "form-group", "mt-5", "mb-5"], ["type", "text", "formControlName", "username", "placeholder", "Email Address", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "mt-5", "mb-3"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control", 3, "ngClass"], [1, "text-right", "mt-3"], ["routerLink", "/forgot", 1, "btn", "btn-sm", "btn-light"], [1, "row", "justify-content-center", "align-self-center"], ["type", "submit", 1, "btn", "btn-outline-dark"], [1, "error", "alert", "alert-danger", "mx-auto", "mb-3"], [1, "invalid-feedback"], [4, "ngIf"]],
        template: function SigninComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SigninComponent_div_4_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Enter your username/email and password.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_9_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SigninComponent_div_12_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SigninComponent_div_15_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Forgot Password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Log In ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginError);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx.loginFormSubmitted && ctx.lf.username.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginFormSubmitted && ctx.lf.username.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.loginFormSubmitted && ctx.lf.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginFormSubmitted && ctx.lf.password.errors);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 100vh;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NpZ25pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNhcmQge1xuICBwYWRkaW5nOiA1cmVtO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/andrii/go/src/as/real_estate_management/client/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 5,
        vars: 0,
        consts: [[1, "row"], [1, "col-md-6"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sequi natus dignissimos quas dolorem ipsam ea. Voluptatibus voluptatum numquam nemo nulla odit reiciendis cum sit cupiditate laboriosam ab totam consectetur, ut perspiciatis sapiente quo maiores dolore molestiae quis non dicta unde harum ipsam rerum saepe. Hic harum mollitia at ratione quae labore voluptates, nam rem perferendis cum placeat, aliquid aliquam voluptatum magnam autem sed molestias accusamus nihil id iste consequuntur eaque repellendus repudiandae! Velit tenetur soluta nemo est ut officia asperiores provident optio, illo pariatur vero maiores assumenda culpa animi. Consectetur voluptates eum inventore quis fuga qui nemo ut asperiores, aspernatur omnis vitae quo impedit, praesentium quibusdam. Quisquam velit temporibus beatae odit corrupti inventore deserunt illum? Eaque perspiciatis nesciunt doloremque quam nobis dolores! Voluptate tenetur cupiditate animi eligendi praesentium reprehenderit asperiores, maiores aliquam ut, vero ullam aut sit quam suscipit ducimus cumque dolor impedit, iusto in illo adipisci iure accusantium. Commodi veritatis illo praesentium doloremque nulla laboriosam magni dolores, tempore minus blanditiis nisi, nobis sit! Cupiditate, perferendis sequi in placeat est beatae modi. Maxime in tempora saepe! Nostrum, sequi. Est, sequi asperiores consectetur, quisquam debitis explicabo vitae animi, laudantium deserunt vel quas nulla. Debitis dicta, consectetur sequi sed totam placeat commodi, praesentium rerum voluptatibus, voluptatum fugit eos alias pariatur iste! Odio tempora quos excepturi accusantium aspernatur. Voluptate officia, incidunt officiis suscipit nesciunt odit labore cum architecto esse modi eligendi eius! Tenetur eum enim adipisci maiores quo saepe possimus perspiciatis debitis pariatur incidunt corrupti, tempora facere, eos neque fugiat, numquam ducimus nesciunt nihil culpa in illo aliquam ipsam earum? Corporis eius dolorem molestias quia perferendis fugit cumque veniam in perspiciatis quos enim quibusdam illum repudiandae nihil quasi repellendus vel, fugiat sint? Quaerat hic voluptatum ducimus nulla amet laboriosam illum, ullam quia rem molestiae alias dignissimos sit culpa iure odit. Voluptatem quasi alias porro voluptate, blanditiis voluptatibus ad! Enim perspiciatis, velit tempora obcaecati fuga quae ipsam dignissimos neque magnam, libero aspernatur sequi impedit architecto atque. Dolores et odio soluta vero voluptates, totam laborum porro accusamus blanditiis nisi rerum in libero a, delectus vitae architecto quisquam molestias, quibusdam voluptatibus incidunt quas mollitia eum magni. Sint itaque commodi dolor possimus quae nam odit? Quasi quae placeat, quibusdam quam dolor explicabo reprehenderit facere natus tenetur expedita culpa. Earum, illo amet error quos eum, distinctio nisi ad veritatis quibusdam repellendus vel. Porro commodi autem nulla natus accusantium voluptates iste illum laboriosam corrupti, omnis provident suscipit eius similique quae placeat ullam amet nisi! Non vel incidunt exercitationem autem nulla, aliquid laboriosam fugit impedit molestias nostrum, ducimus cum aliquam. Dolores quisquam accusamus vitae similique nesciunt nihil facere quibusdam. Quis modi delectus esse amet eos laborum accusamus neque cupiditate? Natus sit, dolores, sed rerum mollitia obcaecati perferendis non adipisci tempora incidunt aspernatur illo aliquid vel, repudiandae molestias. Minus, animi perferendis incidunt consequuntur qui officia aut necessitatibus quibusdam recusandae excepturi ullam similique numquam corrupti iure optio iste tempore exercitationem atque debitis possimus. Rem sint incidunt fuga dolores, eligendi error commodi officiis perferendis ullam, alias minus aliquam voluptatibus ad deserunt tempora.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consectetur atque quidem modi aperiam minus iure et necessitatibus. Praesentium, dignissimos nemo ratione eos quam voluptate illum nihil sequi adipisci laudantium impedit voluptas beatae maxime exercitationem ipsum ex consequatur quae suscipit commodi laborum a quaerat perspiciatis. Provident harum eaque incidunt blanditiis temporibus soluta ex sapiente earum officiis, deserunt amet nisi debitis eveniet laboriosam animi dignissimos perspiciatis maiores maxime aliquam. Recusandae ratione neque nam cum maxime veritatis consectetur blanditiis minima vero iure porro ut officiis cupiditate quod velit ipsa, officia quae fugiat facere dolores animi et. Tempore, consequatur. Deserunt consequuntur molestias quas. Soluta tempore magni pariatur, quos alias nesciunt facere. Distinctio porro nam non adipisci eos cupiditate rem exercitationem voluptas, vel aliquid quia? Amet officia tempora, ad quo ducimus nostrum aut numquam saepe blanditiis cum laudantium dolores atque optio exercitationem esse asperiores nisi, culpa voluptatibus libero facere. Repellat, totam suscipit. Suscipit, fugit perferendis! Dolore natus quisquam eveniet sint beatae doloribus expedita odio dicta ex explicabo, accusantium sed impedit nemo quod, nisi incidunt quo unde illo. Dolore provident impedit error! Repellat qui ducimus nisi debitis laudantium sunt sint unde voluptatem. At reprehenderit officiis esse iure facere id odio. Labore, hic, sunt laboriosam pariatur nesciunt dolores molestiae aliquid ipsum dolorum asperiores quas nobis vero? Autem, et doloremque. Corrupti omnis quisquam ea molestiae aut repellat culpa saepe accusantium ducimus doloribus repellendus distinctio sed voluptatibus cumque beatae deleniti praesentium fuga eaque earum optio, quaerat error nemo. Ipsam voluptas numquam suscipit saepe debitis dignissimos earum, voluptatibus quasi, necessitatibus ut tempora in molestias voluptate odio consequuntur dolorem quo perspiciatis rem enim dolore dolor tempore? Dolorem beatae quos praesentium maiores. Impedit explicabo exercitationem odio, optio quasi modi suscipit. Omnis qui aliquam corrupti tempore reiciendis fugiat sint illo veritatis odit laudantium vero, laboriosam deserunt placeat blanditiis incidunt possimus delectus praesentium, non, commodi tempora ea neque ratione minus? Cum aut maiores in odit, necessitatibus neque placeat repudiandae exercitationem commodi sed sit veritatis ad. Saepe, delectus numquam, voluptatibus modi eum et impedit velit dolor expedita iusto ex, facere quisquam fugit praesentium aliquid animi est sunt mollitia molestias esse provident. Temporibus id expedita, assumenda obcaecati est ut doloremque, voluptatum quibusdam itaque illo qui earum repellat labore quod consequatur pariatur, amet odit recusandae! Nostrum recusandae itaque ut qui ratione voluptate, dicta tenetur dolor illo perferendis repellendus ipsa? Labore nesciunt, ullam quos, repudiandae quibusdam iure maxime consectetur dolor et numquam recusandae odio facere blanditiis ipsa? Porro alias voluptate, dolor optio autem perferendis consequatur, minima doloribus totam fugiat voluptates officia consectetur laudantium, recusandae quis. Sed enim odio cum fugit quaerat sunt iusto aspernatur! Culpa laborum a ut. Similique veniam iusto amet eveniet inventore, iure quam consequatur porro architecto dolorum, laboriosam ducimus at minus, aliquam autem? Laborum ad voluptates labore ipsum fugiat quidem illum, adipisci est doloribus suscipit consequuntur vero, sed distinctio optio provident placeat velit sequi. Architecto illo nam, porro aspernatur ipsam, id error ea dolore consequatur blanditiis nulla obcaecati autem amet impedit aperiam ipsum eaque magnam quis minus consectetur a eius animi. Tempora, alias dolor.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        apiUrl: 'http://localhost:3000/api'
      };
      /***/
    },

    /***/
    "C6wm":
    /*!***************************************!*\
      !*** ./src/app/helpers/auth.guard.ts ***!
      \***************************************/

    /*! exports provided: AuthGuard */

    /***/
    function C6wm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authenticationService) {
          _classCallCheck(this, AuthGuard);

          this.authenticationService = authenticationService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var currentUser = this.authenticationService.currentUserValue;

            if (currentUser) {
              var currentData = this.authenticationService.currentUserInfo;

              if (currentData) {
                sessionStorage.setItem('user', JSON.stringify(currentData));
                return false;
              }

              return false;
            }

            return true;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "FjI/":
    /*!**********************************************************************!*\
      !*** ./src/app/component_library/navigation/navigation.component.ts ***!
      \**********************************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function FjI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return {
          exact: true
        };
      };

      var NavigationComponent = function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);
      };

      NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
        return new (t || NavigationComponent)();
      };

      NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationComponent,
        selectors: [["app-navigation"]],
        decls: 19,
        vars: 8,
        consts: [[1, "header"], ["routerLink", "/", 1, "logo"], ["src", "../../assets/images/logo.svg", "alt", "app_logo"], ["type", "checkbox", "id", "menu-btn", 1, "menu-btn"], ["for", "menu-btn", 1, "menu-icon"], [1, "navicon"], [1, "menu"], ["routerLink", "/", "routerLinkActive", "active-link", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active-link", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/signin", "routerLinkActive", "active-link", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/signup", "routerLinkActive", "active-link", 1, "nav-link", 3, "routerLinkActiveOptions"]],
        template: function NavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " About ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Sign In ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Sign Up ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        styles: ["a[_ngcontent-%COMP%] {\n  color: #708090;\n  text-transform: uppercase;\n  padding: 0;\n  margin: 0.6rem 0.4rem 0.6rem 0;\n  transition: all 0.15s;\n  font-size: 1.1rem;\n}\na.active-link[_ngcontent-%COMP%] {\n  background-color: #eff1f3;\n  color: #708090;\n  font-weight: 800;\n}\n.header[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);\n  position: fixed;\n  width: 100%;\n  z-index: 3;\n}\n.header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow: hidden;\n  background-color: #ffffff;\n}\n.header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 20px 20px;\n  border-right: 1px solid #eff1f3;\n  text-decoration: none;\n}\n.header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:hover {\n  background-color: #eff1f3;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  padding: 1rem;\n  margin-left: 2rem;\n  text-decoration: none;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 3rem;\n}\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  clear: both;\n  max-height: 0;\n  transition: max-height 0.2s ease-out;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  float: right;\n  padding: 28px 20px;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%] {\n  background: #333;\n  display: block;\n  height: 2px;\n  position: relative;\n  transition: background 0.2s ease-out;\n  width: 18px;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:before, .header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:after {\n  background: #333;\n  content: \"\";\n  display: block;\n  height: 100%;\n  position: absolute;\n  transition: all 0.2s ease-out;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:before {\n  top: 5px;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:after {\n  top: -5px;\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu[_ngcontent-%COMP%] {\n  max-height: 100vh;\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:before {\n  transform: rotate(-45deg);\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:after {\n  transform: rotate(45deg);\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]:not(.steps)   .navicon[_ngcontent-%COMP%]:before, .header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]:not(.steps)   .navicon[_ngcontent-%COMP%]:after {\n  top: 0;\n}\n@media (min-width: 48em) {\n  .header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: left;\n  }\n\n  .header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 20px 30px;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    clear: none;\n    float: right;\n    max-height: none;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNDY1c7RURiWCx5QkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUdFO0VBQ0UseUJDSEk7RURJSixjQ0tTO0VESlQsZ0JBQUE7QUFESjtBQUtBO0VBQ0UseUJDVE07RURVTiw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUZGO0FBS0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkNyQk07QURtQlI7QUFLQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7QUFGRjtBQUtBOztFQUVFLHlCQ2xDTTtBRGdDUjtBQUtBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUZGO0FBSUU7RUFDRSxZQUFBO0FBRko7QUFNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUFIRjtBQU1BO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQUhGO0FBTUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUFIRjtBQU1BOztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFIRjtBQU1BO0VBQ0UsUUFBQTtBQUhGO0FBTUE7RUFDRSxTQUFBO0FBSEY7QUFNQTtFQUNFLGFBQUE7QUFIRjtBQU1BO0VBQ0UsaUJBQUE7QUFIRjtBQU1BO0VBQ0UsdUJBQUE7QUFIRjtBQU1BO0VBQ0UseUJBQUE7QUFIRjtBQU1BO0VBQ0Usd0JBQUE7QUFIRjtBQU1BOztFQUVFLE1BQUE7QUFIRjtBQU1BO0VBQ0U7SUFDRSxXQUFBO0VBSEY7O0VBS0E7SUFDRSxrQkFBQTtFQUZGOztFQUlBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQURGOztFQUdBO0lBQ0UsYUFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2FwcC90aGVtZS92YXJpYWJsZXMnO1xuXG5hIHtcbiAgY29sb3I6ICRzbGF0ZS1ncmF5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAuNnJlbSAwLjRyZW0gMC42cmVtIDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgZm9udC1zaXplOiAxLjFyZW07XG5cbiAgJi5hY3RpdmUtbGluayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0O1xuICAgIGNvbG9yOiAkc2xhdGUtZ3JheTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAzO1xufVxuXG4uaGVhZGVyIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG59XG5cbi5oZWFkZXIgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRsaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaGVhZGVyIGxpIGE6aG92ZXIsXG4uaGVhZGVyIC5tZW51LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodDtcbn1cblxuLmhlYWRlciAubG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICBpbWcge1xuICAgIGhlaWdodDogM3JlbTtcbiAgfVxufVxuXG4uaGVhZGVyIC5tZW51IHtcbiAgY2xlYXI6IGJvdGg7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcbn1cblxuLmhlYWRlciAubWVudS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMjhweCAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uaGVhZGVyIC5tZW51LWljb24gLm5hdmljb24ge1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2Utb3V0O1xuICB3aWR0aDogMThweDtcbn1cblxuLmhlYWRlciAubWVudS1pY29uIC5uYXZpY29uOmJlZm9yZSxcbi5oZWFkZXIgLm1lbnUtaWNvbiAubmF2aWNvbjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlciAubWVudS1pY29uIC5uYXZpY29uOmJlZm9yZSB7XG4gIHRvcDogNXB4O1xufVxuXG4uaGVhZGVyIC5tZW51LWljb24gLm5hdmljb246YWZ0ZXIge1xuICB0b3A6IC01cHg7XG59XG5cbi5oZWFkZXIgLm1lbnUtYnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlciAubWVudS1idG46Y2hlY2tlZCB+IC5tZW51IHtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG59XG5cbi5oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWQgfiAubWVudS1pY29uIC5uYXZpY29uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWQgfiAubWVudS1pY29uIC5uYXZpY29uOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5cbi5oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWQgfiAubWVudS1pY29uIC5uYXZpY29uOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uaGVhZGVyIC5tZW51LWJ0bjpjaGVja2VkIH4gLm1lbnUtaWNvbjpub3QoLnN0ZXBzKSAubmF2aWNvbjpiZWZvcmUsXG4uaGVhZGVyIC5tZW51LWJ0bjpjaGVja2VkIH4gLm1lbnUtaWNvbjpub3QoLnN0ZXBzKSAubmF2aWNvbjphZnRlciB7XG4gIHRvcDogMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcbiAgLmhlYWRlciBsaSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLmhlYWRlciBsaSBhIHtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIH1cbiAgLmhlYWRlciAubWVudSB7XG4gICAgY2xlYXI6IG5vbmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gIH1cbiAgLmhlYWRlciAubWVudS1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIvLyBDT0xPUiBWQVJTXG4kcHJpbWFyeTogIzY2OWJiYztcbiRzdWNjZXNzOiAjNDY2MzYyO1xuJHNlY29uZGFyeTogIzc2Nzg4MztcbiRpbmZvOiAjODg5NmFiO1xuJHdhcm5pbmc6ICNmZWQ3NjY7XG4kZGFuZ2VyOiAjZjQ1YjY5O1xuXG4kbGlnaHQ6ICNlZmYxZjM7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ3JleTogI2ZmZmFmYjtcbiRncmVlbjogIzdhNzk3ODtcbiRsaWdodC1ncmVlbjogI2E4YzY4NjtcbiRkYXJrOiAjMmIyYzI4O1xuJGRhcmstY2hhcmtvYWw6ICMzMzMzMzM7XG5cbi8vIGV4b3RpYyBncmF5IGNvbG9yc1xuJHNsYXRlLWdyYXk6ICM3MDgwOTA7XG4kZmxhc2gtd2hpdGU6ICNmMmYyZjI7XG4kcGxhdGludW06ICNlNWU1ZTU7XG5cbi8vIEZPTlRcbiRkZWZhdWx0LWZvbnQtc2l6ZTogMS42cmVtO1xuXG4vLyBUSEVNRVNcbiR0aGVtZS1jb2xvcnM6IChcbiAgJ3ByaW1hcnknOiAkcHJpbWFyeSxcbiAgJ3N1Y2Nlc3MnOiAkc3VjY2VzcyxcbiAgJ3NlY29uZGFyeSc6ICRzZWNvbmRhcnksXG4gICdpbmZvJzogJGluZm8sXG4gICd3YXJuaW5nJzogJHdhcm5pbmcsXG4gICdkYW5nZXInOiAkZGFuZ2VyLFxuICAnbGlnaHQnOiAkbGlnaHQsXG4gICdkYXJrJzogJGRhcmssXG4pO1xuXG4vLyBTUEFDRVNcbiRzcGFjZS1zbWFsbDogMC44cmVtO1xuJHNwYWNlLW1lZGl1bTogMS42cmVtO1xuJHNwYWNlLWJpZzogMy4ycmVtO1xuJHNwYWNlLWxhcmdlOiA2LjRyZW07XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "QX6l":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function QX6l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)();
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 15,
        vars: 0,
        consts: [[1, "row"], [1, "col-md-3"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga sint quas, excepturi rerum atque beatae eum quo accusamus libero tempore laborum alias, a modi! At quae non molestias praesentium. Sapiente reprehenderit debitis molestias repellat minima tempore nam sed autem est necessitatibus quam distinctio nobis vero eius aspernatur provident placeat ipsum porro maxime beatae, non sint. Consectetur modi aspernatur vel totam. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga sint quas, excepturi rerum atque beatae eum quo accusamus libero tempore laborum alias, a modi! At quae non molestias praesentium. Sapiente reprehenderit debitis molestias repellat minima tempore nam sed autem est necessitatibus quam distinctio nobis vero eius aspernatur provident placeat ipsum porro maxime beatae, non sint. Consectetur modi aspernatur vel totam. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga sint quas, excepturi rerum atque beatae eum quo accusamus libero tempore laborum alias, a modi! At quae non molestias praesentium. Sapiente reprehenderit debitis molestias repellat minima tempore nam sed autem est necessitatibus quam distinctio nobis vero eius aspernatur provident placeat ipsum porro maxime beatae, non sint. Consectetur modi aspernatur vel totam. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga sint quas, excepturi rerum atque beatae eum quo accusamus libero tempore laborum alias, a modi! At quae non molestias praesentium. Sapiente reprehenderit debitis molestias repellat minima tempore nam sed autem est necessitatibus quam distinctio nobis vero eius aspernatur provident placeat ipsum porro maxime beatae, non sint. Consectetur modi aspernatur vel totam. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga sint quas, excepturi rerum atque beatae eum quo accusamus libero tempore laborum alias, a modi! At quae non molestias praesentium. Sapiente reprehenderit debitis molestias repellat minima tempore nam sed autem est necessitatibus quam distinctio nobis vero eius aspernatur provident placeat ipsum porro maxime beatae, non sint. Consectetur modi aspernatur vel totam. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga sint quas, excepturi rerum atque beatae eum quo accusamus libero tempore laborum alias, a modi! At quae non molestias praesentium. Sapiente reprehenderit debitis molestias repellat minima tempore nam sed autem est necessitatibus quam distinctio nobis vero eius aspernatur provident placeat ipsum porro maxime beatae, non sint. Consectetur modi aspernatur vel totam. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga sint quas, excepturi rerum atque beatae eum quo accusamus libero tempore laborum alias, a modi! At quae non molestias praesentium. Sapiente reprehenderit debitis molestias repellat minima tempore nam sed autem est necessitatibus quam distinctio nobis vero eius aspernatur provident placeat ipsum porro maxime beatae, non sint. Consectetur modi aspernatur vel totam. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "QoDe":
    /*!********************************************!*\
      !*** ./src/app/forgot/forgot.component.ts ***!
      \********************************************/

    /*! exports provided: ForgotComponent */

    /***/
    function QoDe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotComponent", function () {
        return ForgotComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ForgotComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.passwordNotification, " ");
        }
      }

      function ForgotComponent_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email Address is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ForgotComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ForgotComponent_div_12_div_1_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.ff.username.errors.required);
        }
      }

      function ForgotComponent_div_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " New Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ForgotComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ForgotComponent_div_15_div_1_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.ff.newPassword.errors.required);
        }
      }

      function ForgotComponent_div_18_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password Confirmation is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ForgotComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ForgotComponent_div_18_div_1_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.ff.confirmPassword.errors.required);
        }
      }

      function ForgotComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Passwords doesn't match ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var ForgotComponent = /*#__PURE__*/function () {
        function ForgotComponent(formBuilder, authenticationService) {
          _classCallCheck(this, ForgotComponent);

          this.formBuilder = formBuilder;
          this.authenticationService = authenticationService;
          this.forgotFormSubmited = false;
          this.passwordNotification = '';
        }

        _createClass(ForgotComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.forgotForm = this.formBuilder.group({
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
          }
        }, {
          key: "ff",
          get: function get() {
            return this.forgotForm.controls;
          }
        }, {
          key: "passwordsMatch",
          get: function get() {
            return this.ff.newPassword.value === this.ff.confirmPassword.value;
          }
        }, {
          key: "resetPassword",
          value: function resetPassword() {
            var _this2 = this;

            this.forgotFormSubmited = true;

            if (this.forgotForm.invalid || !this.passwordsMatch) {
              return;
            }

            this.authenticationService.resetPassword(this.ff.username.value, this.ff.newPassword.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (_) {
              _this2.passwordNotification = 'Password successfully reset';

              _this2.forgotForm.reset();

              setTimeout(function () {
                _this2.passwordNotification = null;
              }, 3000);
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return ForgotComponent;
      }();

      ForgotComponent.ɵfac = function ForgotComponent_Factory(t) {
        return new (t || ForgotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
      };

      ForgotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ForgotComponent,
        selectors: [["app-forgot"]],
        decls: 23,
        vars: 15,
        consts: [[1, "container", "mx-auto"], [1, "col-md-6", "offset-md-3", "mt-4", "mb-2"], [1, "card"], [1, "card-body"], ["class", "info alert alert-info mx-auto mb-3", 4, "ngIf"], [1, "text-center", "mb-5"], [1, "mx-auto", 3, "formGroup", "ngSubmit"], [1, "form-group", "mt-5", "mb-3"], ["type", "text", "formControlName", "username", "placeholder", "Email Address", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "mt-4", "mb-3"], ["type", "password", "formControlName", "newPassword", "placeholder", "New Password", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm Password", 1, "form-control", 3, "ngClass"], ["class", "confirmation-failed", 4, "ngIf"], [1, "row", "justify-content-center", "align-self-center"], ["type", "submit", 1, "btn", "btn-outline-dark", "mt-4"], [1, "info", "alert", "alert-info", "mx-auto", "mb-3"], [1, "invalid-feedback"], [4, "ngIf"], [1, "confirmation-failed"]],
        template: function ForgotComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ForgotComponent_div_4_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Forgot Password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Enter your username/email and new password.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ForgotComponent_Template_form_ngSubmit_9_listener() {
              return ctx.resetPassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ForgotComponent_div_12_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ForgotComponent_div_15_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ForgotComponent_div_18_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ForgotComponent_div_19_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Reset Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordNotification);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.forgotForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx.forgotFormSubmited && ctx.ff.username.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.forgotFormSubmited && ctx.ff.username.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx.forgotFormSubmited && ctx.ff.newPassword.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.forgotFormSubmited && ctx.ff.newPassword.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ctx.forgotFormSubmited && ctx.ff.confirmPassword.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.forgotFormSubmited && ctx.ff.confirmPassword.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.passwordsMatch);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 100vh;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZvcmdvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoiZm9yZ290LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNhcmQge1xuICBwYWRkaW5nOiA1cmVtO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _component_library_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./component_library/navigation/navigation.component */
      "FjI/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _component_library_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./component_library/spinner/spinner.component */
      "+nwC");

      function AppComponent_app_spinner_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spinner");
        }
      }

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.loading = false;
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-estate"]],
        decls: 4,
        vars: 1,
        consts: [[4, "ngIf"], [1, "container-fluid"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_spinner_0_Template, 1, 0, "app-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _component_library_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _component_library_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _component_library_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./component_library/spinner/spinner.component */
      "+nwC");
      /* harmony import */


      var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./helpers/error.interceptor */
      "fC4O");
      /* harmony import */


      var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./helpers/jwt.interceptor */
      "eMGG");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./main/main.component */
      "wlho");
      /* harmony import */


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./signin/signin.component */
      "/hi3");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./signup/signup.component */
      "rd1V");
      /* harmony import */


      var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./forgot/forgot.component */
      "QoDe");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _component_library_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./component_library/navigation/navigation.component */
      "FjI/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _component_library_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"], _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_16__["ForgotComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"], _component_library_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_18__["NavigationComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
        });
      })();
      /***/

    },

    /***/
    "eMGG":
    /*!********************************************!*\
      !*** ./src/app/helpers/jwt.interceptor.ts ***!
      \********************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function eMGG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(authenticationService) {
          _classCallCheck(this, JwtInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var currentUser = this.authenticationService.currentUserValue;
            var isLoggedIn = currentUser && currentUser.accessToken;
            var isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl);

            if (isLoggedIn && isApiUrl) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(currentUser.accessToken)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "ej43":
    /*!****************************************************!*\
      !*** ./src/app/services/authentication.service.ts ***!
      \****************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function ej43(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http) {
          _classCallCheck(this, AuthenticationService);

          this.http = http;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = JSON.parse(localStorage.getItem('user'));
        }

        _createClass(AuthenticationService, [{
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }, {
          key: "currentUserInfo",
          get: function get() {
            return this.currentUser;
          }
        }, {
          key: "headers",
          get: function get() {
            var updateHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              Authorization: "Bearer ".concat(this.currentUserValue),
              'Content-Type': 'application/json'
            });
            return updateHeaders;
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/auth"), {
              headers: this.headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              return user;
            }));
          }
        }, {
          key: "getUserById",
          value: function getUserById(userId) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/auth/user/").concat(userId), {
              headers: this.headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              return user;
            }));
          }
        }, {
          key: "deactivateUserById",
          value: function deactivateUserById(userId, status) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/auth/deactivate"), {
              userId: userId,
              status: status
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              return user;
            }));
          }
        }, {
          key: "deleteUserById",
          value: function deleteUserById(userId) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/auth/delete/").concat(userId), {
              headers: this.headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              return user;
            }));
          }
        }, {
          key: "signUpUser",
          value: function signUpUser(userData) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/auth/signUp"), {
              userData: userData
            });
          }
        }, {
          key: "login",
          value: function login(username, password) {
            var _this3 = this;

            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/auth/signin"), {
              username: username,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              var accessToken = data.accessToken,
                  userData = data.userData;
              localStorage.setItem('currentUser', JSON.stringify(accessToken));
              localStorage.setItem('user', JSON.stringify(userData));
              sessionStorage.setItem('user', JSON.stringify(userData));

              _this3.currentUserSubject.next(data);

              return data;
            }));
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(username, newPassword) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/auth/resetPassword"), {
              username: username,
              newPassword: newPassword
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('user');
            sessionStorage.removeItem('user');
            this.currentUserSubject.next(null);
          }
        }, {
          key: "passwordChange",
          value: function passwordChange(oldPassword, newPassword, user) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/auth/password-change"), {
              oldPassword: oldPassword,
              newPassword: newPassword,
              user: user
            });
          }
        }, {
          key: "sendEmail",
          value: function sendEmail(email, name, message, location) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/auth/sendEmail"), {
              name: name,
              email: email,
              message: message,
              location: location
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res.ok;
            }));
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
        return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: AuthenticationService,
        factory: AuthenticationService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "fC4O":
    /*!**********************************************!*\
      !*** ./src/app/helpers/error.interceptor.ts ***!
      \**********************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function fC4O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(authenticationService) {
          _classCallCheck(this, ErrorInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this4 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              if (err.status === 401) {
                _this4.authenticationService.logout();

                location.reload();
              }

              var error = err.error.message || err.statusText;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "rd1V":
    /*!********************************************!*\
      !*** ./src/app/signup/signup.component.ts ***!
      \********************************************/

    /*! exports provided: SignupComponent */

    /***/
    function rd1V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SignupComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.signupError, " ");
        }
      }

      function SignupComponent_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignupComponent_div_12_div_1_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.sf.name.errors.required);
        }
      }

      function SignupComponent_div_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_15_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Invalid Email format ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignupComponent_div_15_div_1_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignupComponent_div_15_div_2_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.sf.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.sf.email.errors.email);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(formBuilder, authenticationService) {
          _classCallCheck(this, SignupComponent);

          this.formBuilder = formBuilder;
          this.authenticationService = authenticationService;
          this.signupError = '';
          this.registrationFormSubmitted = false;
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrationForm = this.formBuilder.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email])]
            });
          }
        }, {
          key: "sf",
          get: function get() {
            return this.registrationForm.controls;
          }
        }, {
          key: "signUp",
          value: function signUp() {
            var _this5 = this;

            this.registrationFormSubmitted = true;

            if (this.registrationForm.invalid) {
              return;
            }

            this.authenticationService.sendEmail(this.sf.email.value, this.sf.name.value, '', 'Meeting').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (sent) {
              if (sent) {
                _this5.signupError = null;
                _this5.registrationFormSubmitted = false;

                _this5.registrationForm.reset();
              } else {
                _this5.signupError = 'Registration failed';
                setTimeout(function () {
                  _this5.registrationFormSubmitted = null;
                }, 3000);
              }
            });
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.ɵfac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
      };

      SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        decls: 19,
        vars: 10,
        consts: [[1, "container", "mx-auto"], [1, "col-md-6", "offset-md-3"], [1, "card"], [1, "card-body"], ["class", "error alert alert-danger mx-auto mb-3", 4, "ngIf"], [1, "text-center", "mb-5"], [1, "mx-auto", 3, "formGroup", "ngSubmit"], [1, "form-group", "mt-5", "mb-5"], ["type", "text", "formControlName", "name", "placeholder", "Name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "email", "placeholder", "Email", 1, "form-control", 3, "ngClass"], [1, "row", "justify-content-center", "align-self-center"], ["type", "submit", 1, "btn", "btn-outline-dark"], [1, "error", "alert", "alert-danger", "mx-auto", "mb-3"], [1, "invalid-feedback"], [4, "ngIf"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SignupComponent_div_4_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Enter your name email.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_9_listener() {
              return ctx.signUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SignupComponent_div_12_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SignupComponent_div_15_Template, 3, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Sign Up ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signupError);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registrationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx.registrationFormSubmitted && ctx.sf.name.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registrationFormSubmitted && ctx.sf.name.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.registrationFormSubmitted && ctx.sf.email.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registrationFormSubmitted && ctx.sf.email.errors);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 100vh;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNhcmQge1xuICBwYWRkaW5nOiA1cmVtO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signin/signin.component */
      "/hi3");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signup/signup.component */
      "rd1V");
      /* harmony import */


      var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot/forgot.component */
      "QoDe");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./main/main.component */
      "wlho");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./helpers/auth.guard */
      "C6wm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'signup',
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
      }, {
        path: 'forgot',
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__["ForgotComponent"]
      }, {
        path: 'signin',
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__["SigninComponent"]
      }, {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        children: [{
          path: '',
          component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
        }, {
          path: 'about',
          component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"]
        }]
      }, {
        path: '**',
        redirectTo: '/'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          useHash: false
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "wlho":
    /*!****************************************!*\
      !*** ./src/app/main/main.component.ts ***!
      \****************************************/

    /*! exports provided: MainComponent */

    /***/
    function wlho(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var MainComponent = function MainComponent() {
        _classCallCheck(this, MainComponent);
      };

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)();
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 2,
        vars: 0,
        consts: [[1, "container", "main-content"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 100vh;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 3rem 2rem;\n  min-height: 83vh;\n  margin: 10rem auto 2rem auto;\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21haW4uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkNITTtBREVSIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi90aGVtZS92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZzogM3JlbSAycmVtO1xuICBtaW4taGVpZ2h0OiA4M3ZoO1xuICBtYXJnaW46IDEwcmVtIGF1dG8gMnJlbSBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG59XG4iLCIvLyBDT0xPUiBWQVJTXG4kcHJpbWFyeTogIzY2OWJiYztcbiRzdWNjZXNzOiAjNDY2MzYyO1xuJHNlY29uZGFyeTogIzc2Nzg4MztcbiRpbmZvOiAjODg5NmFiO1xuJHdhcm5pbmc6ICNmZWQ3NjY7XG4kZGFuZ2VyOiAjZjQ1YjY5O1xuXG4kbGlnaHQ6ICNlZmYxZjM7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ3JleTogI2ZmZmFmYjtcbiRncmVlbjogIzdhNzk3ODtcbiRsaWdodC1ncmVlbjogI2E4YzY4NjtcbiRkYXJrOiAjMmIyYzI4O1xuJGRhcmstY2hhcmtvYWw6ICMzMzMzMzM7XG5cbi8vIGV4b3RpYyBncmF5IGNvbG9yc1xuJHNsYXRlLWdyYXk6ICM3MDgwOTA7XG4kZmxhc2gtd2hpdGU6ICNmMmYyZjI7XG4kcGxhdGludW06ICNlNWU1ZTU7XG5cbi8vIEZPTlRcbiRkZWZhdWx0LWZvbnQtc2l6ZTogMS42cmVtO1xuXG4vLyBUSEVNRVNcbiR0aGVtZS1jb2xvcnM6IChcbiAgJ3ByaW1hcnknOiAkcHJpbWFyeSxcbiAgJ3N1Y2Nlc3MnOiAkc3VjY2VzcyxcbiAgJ3NlY29uZGFyeSc6ICRzZWNvbmRhcnksXG4gICdpbmZvJzogJGluZm8sXG4gICd3YXJuaW5nJzogJHdhcm5pbmcsXG4gICdkYW5nZXInOiAkZGFuZ2VyLFxuICAnbGlnaHQnOiAkbGlnaHQsXG4gICdkYXJrJzogJGRhcmssXG4pO1xuXG4vLyBTUEFDRVNcbiRzcGFjZS1zbWFsbDogMC44cmVtO1xuJHNwYWNlLW1lZGl1bTogMS42cmVtO1xuJHNwYWNlLWJpZzogMy4ycmVtO1xuJHNwYWNlLWxhcmdlOiA2LjRyZW07XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (ref) {
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref;
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map