GET-POST
========

Two CLI applications that connect to http servers using json

## Installation

``` sh
npm install get-post -g
```

## GET

### Usage

``` sh
get http://twitter.com/search.json?q=nodejs

```

## POST

### Usage


``` sh
echo '{"Hello": "World"} | post http://echo-json.heroku.com

```

## FAQ

* Why?

Because with curl I just got tired of typeing -H 'Content-Type: application/json'

## Thanks

* Mikeal Rogers for Request
* Ryan Dahl for Nodejs

## License

See LICENSE

## Contribute

Contributions Welcome!

