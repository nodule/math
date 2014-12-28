module.exports = {
  name: "pow",
  ns: "math",
  description: "Computes base to the exponent power.",
  phrases: {
    active: "Pow {input.x} and {input.y}"
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
  fn: function pow(input, output, state, done, cb, on) {
    var r = function() {
      output.out = Math.pow(input.x, input.y)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}