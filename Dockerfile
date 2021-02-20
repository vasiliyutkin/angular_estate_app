FROM golang:1.15
WORKDIR /app
COPY ./server/go.mod ./server/go.sum ./
RUN go mod download
COPY . .
RUN go build
CMD ./be