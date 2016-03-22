module.exports = {
  name: "substract",
  ns: "math",
  description: "Computes x - y",
  phrases: {
    active: "Substracting"
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
  fn: function substract(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.create($.x - $.y)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}