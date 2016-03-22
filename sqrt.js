module.exports = {
  name: "sqrt",
  ns: "math",
  description: "Computes the positive square root of a number.",
  phrases: {
    active: "Getting square root"
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
  fn: function sqrt(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.create(Math.sqrt($.x))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}