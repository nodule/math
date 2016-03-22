module.exports = {
  name: "atan2",
  ns: "math",
  description: "Computes the arctangent of the quotient of the inputs.",
  phrases: {
    active: "Computing arctangent value for {input.x} and {input.y}"
  },
  ports: {
    input: {
      x: {
        title: "Number",
        type: "number",
        required: true
      },
      y: {
        title: "Number",
        type: "number",
        required: true
      }
    },
    output: {
      out: {
        title: "out",
        type: "number"
      }
    }
  },
  fn: function atan2(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.create(Math.atan2($.x, $.y))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}