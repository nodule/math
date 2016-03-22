module.exports = {
  name: "random",
  ns: "math",
  description: "Outputs a pseudo-random number between 0 and 1.",
  phrases: {
    active: "Providing a random number..."
  },
  ports: {
    input: {},
    output: {
      out: {
        title: "out",
        type: "number"
      }
    }
  },
  fn: function random(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.create(Math.random())
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}