import React from 'react';

class WeatherPage extends React.Component {
  render() {
    const { location, weather, navigateTo } = this.props;

    return (
      <div>
        <h1>Weather</h1>
        <p>Location: {location}</p>
        <p>Temperature: {weather}&deg;C</p>
        <button onClick={() => navigateTo('Home')}>Back to Home</button>
      </div>
    );
  }
}

export default WeatherPage;
