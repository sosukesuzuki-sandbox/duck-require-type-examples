goog.module("b");

const a = goog.require("a");
const c = goog.require("c");

const baz = new c.Baz("hogehoge");

const foo = a.Bar(baz);

console.log(foo);
