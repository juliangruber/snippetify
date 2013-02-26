'use strict';
/*jshint asi: true */
var check = require('./utils/check')

check(
    'single assignment'
  , function _() {
var a = 3;
    }
  , [{"start":1,"end":1,"raw":"var a = 3;"}]
)

check(
    'two var assignments'
  , function _() {
var a = 3;
var b = 2;
    }
  , [ { "start" : 1
      , "end" : 1
      , "raw" : "var a = 3;" }
    , 
      { "start" : 2
      , "end" : 2
      , "raw" : "var b = 2;" }
    ]
)

check(
    'two var assignments comma first'
  , function _() {
var a = 3
  , b = 2;
    }
  , [ { "start" : 1
      , "end" : 1
      , "raw" : "var a = 3" }
    , 
      { "start" : 2
      , "end" : 2
      , "raw" : "  , b = 2;" }
    ]
)

check(
    'multiline object literal assignment'
  , function _() {
var o = {
  a : 1,
  b : 2,
  c : 3 };
    }
  , [ { "start" : 1
      , "end" : 4
      , "raw" : "var o = {\n  a : 1,\n  b : 2,\n  c : 3 };" }
    ]
)

check(
    'single line array assignment'
  , function _() {
var arr = [ 1, 2, 3]
    }
  , [ { "start" : 1
      , "end" : 1
      , "raw" : "var arr = [ 1, 2, 3]" }
    ]
)

check(
    'multi line array assignment'
  , function _() {
var arr = [
    1
  , 2
  , 3
  ]
    }
  , [ { "start" : 1
      , "end" : 5
      , "raw" : "var arr = [\n    1\n  , 2\n  , 3\n  ]" }
    ]
)
