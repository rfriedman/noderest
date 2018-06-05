var Glob = require("glob");

var pattern = "{,./documents/*/*/*.*}"
console.log(pattern)

var mg = new Glob(pattern, {mark: true}, function (er, matches) {
  console.log("matches", matches)
})
console.log("after")


