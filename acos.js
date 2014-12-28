module.exports = {
  name: "acos",
  ns: "math",
  description: "Computes the arccosine of a number.",
  phrases: {
    active: "Computing arccosine value for {input.x}"
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
  fn: function acos(input, output, state, done, cb, on) {
    var r = function() {
      output.out = Math.acos(input.x)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}