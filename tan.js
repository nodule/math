module.exports = {
  name: "tan",
  ns: "math",
  description: "Computes the tangent of a number.",
  phrases: {
    active: "Getting tangent"
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
  fn: function tan(input, output, state, done, cb, on) {
    var r = function() {
      output.out = Math.tan(input.x)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}