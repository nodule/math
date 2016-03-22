module.exports = {
  name: "max",
  ns: "math",
  description: "Determines the largest of zero or more numbers",
  phrases: {
    active: "Determining max value"
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
  fn: function max(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.create(Math.max.apply(null, $.numbers))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}