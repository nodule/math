module.exports = {
  name: "cos",
  ns: "math",
  description: "Computes the cosine of a number.",
  phrases: {
    active: "Computing cosine value for {input.x}"
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
  fn: function cos(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.create(Math.cos($.x))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}