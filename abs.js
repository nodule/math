module.exports = {
  name: "abs",
  ns: "math",
  description: "Computes the absolute value of a number.",
  phrases: {
    active: "Computing absolute value for {input.x}"
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
  fn: function abs(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.create(Math.abs($.x))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}