module.exports = {
  name: "min",
  ns: "math",
  description: "Determines the smallest of zero or more numbers",
  phrases: {
    active: "Determining min value"
  },
  ports: {
    input: {
      numbers: {
        title: "Numbers",
        type: "array",
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
  fn: function min(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.create(Math.min.apply(null, $.numbers))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}