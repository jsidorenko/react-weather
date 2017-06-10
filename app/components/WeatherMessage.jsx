var React = require('react');

/*var WeatherMessage = React.createClass({
  render: function () {
    var {temp, location} = this.props;

    return (
      <div>It is {temp} degree in {location}</div>
    );
  }
});*/

var WeatherMessage = ({temp, location}) => {
  return (
    <div>It is {temp} degree in {location}</div>
  );
};

module.exports = WeatherMessage;