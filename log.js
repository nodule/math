module.exports = {
  name: "log",
  ns: "math",
  description: "Computes the natural logarithm (loge, also ln) of a number",
  phrases: {
    active: "Determining natural logarithm for {input.x}"
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
  fn: function log(input, output, state, done, cb, on) {
    var r = function() {
      output.out = Math.log(input.x)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}