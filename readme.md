# get-post json cli

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
get "http://twitter.com/search.json?q=nodejs"
```

Do a simple json post:

```
post http://echo-json.heroku.com '{"hello":"world"}'
```
