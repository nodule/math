module.exports = {
  name: "add",
  ns: "math",
  description: "Computes x + y",
  phrases: {
    active: "Computing addition"
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
  fn: function add(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.create($.x + $.y)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}