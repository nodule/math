module.exports = {
  name: "ceil",
  ns: "math",
  description: "Computes the smallest integer greater than or equal to a number.",
  phrases: {
    active: "Ceiling {input.x}"
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
  fn: function ceil(input, output, state, done, cb, on) {
    var r = function() {
      output.out = Math.ceil(input.x)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}