module.exports = {
  name: "atan",
  ns: "math",
  description: "Computes the arctangent of a number.",
  phrases: {
    active: "Computing arctangent value for {input.x}"
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
  fn: function atan(input, output, state, done, cb, on) {
    var r = function() {
      output.out = Math.atan(input.x)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}