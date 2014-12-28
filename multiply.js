module.exports = {
  name: "multiply",
  ns: "math",
  description: "Computes x * y",
  phrases: {
    active: "Multiplying"
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
  fn: function multiply(input, output, state, done, cb, on) {
    var r = function() {
      output.out = input.x * input.y
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}