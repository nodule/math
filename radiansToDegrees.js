module.exports = {
  name: "radiansToDegrees",
  ns: "math",
  description: "Convert Radians to degrees",
  async: true,
  phrases: {
    active: "Converting radians to degrees"
  },
  ports: {
    input: {
      "in": {
        title: "Radians",
        type: "number",
        async: true,
        required: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            output({
              out: $.write('in', $.in * (180 / Math.PI))
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
        title: "Degrees",
        type: "number"
      }
    }
  },
  state: {}
}