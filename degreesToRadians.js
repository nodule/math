module.exports = {
  name: "degreesToRadians",
  ns: "math",
  description: "Convert degrees to radians",
  async: true,
  phrases: {
    active: "Converting degrees to radians"
  },
  ports: {
    input: {
      "in": {
        title: "Degrees",
        type: "number",
        async: true,
        required: true,
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            output({
              out: $.write('in', $.in * (Math.PI / 180))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      out: {
        title: "Radians",
        type: "number"
      }
    }
  },
  state: {}
}