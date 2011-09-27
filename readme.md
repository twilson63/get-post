# get-post

Simple NodeJs json http request command-line client.  A cli
wrapper around Request by Mikeal Rogers. Everything gets
or posts via application/json.

# Installation

```
npm install get-post -g
```

# Usage

Do a simple get as 'application/json' :

```
get "http://echo.heroku.com/1c97badde"
```

Do a simple json post:

```
post http://echo.heroku.com/1c97badde {"hello":"world"}
```
