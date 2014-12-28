module.exports = {
  name: "asin",
  ns: "math",
  description: "Computes the arcsine of a number.",
  phrases: {
    active: "Computing arcsine value for {input.x}"
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
  fn: function asin(input, output, state, done, cb, on) {
    var r = function() {
      output.out = Math.asin(input.x)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}