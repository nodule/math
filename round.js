module.exports = {
  name: "round",
  ns: "math",
  description: "Computes the value of a number rounded to the nearest integer.",
  phrases: {
    active: "Rounding number"
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
  fn: function round(input, output, state, done, cb, on) {
    var r = function() {
      output.out = Math.round(input.x)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}