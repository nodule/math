module.exports = {
  name: "floor",
  ns: "math",
  description: "Computes the largest integer less than or equal to a number",
  phrases: {
    active: "Flooring {input.x}"
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
  fn: function floor(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.create(Math.floor($.x))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}