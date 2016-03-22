module.exports = {
  name: "exp",
  ns: "math",
  description: "Computes Ex, where x is the argument, and E is Euler's constant (2.718...), the base of the natural logarithm..",
  phrases: {
    active: "Computing Ex value for {input.x}"
  },
  ports: {
    input: {
      x: {
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
  fn: function exp(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.create(Math.exp($.x))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}