goog.module('a');

goog.forwardDeclare("c");

exports.Bar =
  /**
   * @param {c.Baz} value 
   */
  function(value) {
    return `foo ${value.prop1}`;
  };
