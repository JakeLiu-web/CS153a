import React from 'react';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import WeatherPage from './pages/WeatherPage';
import MapPage from './pages/MapPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Home',
      location: '',
      weather: '',
    };
  }

  // Fetch weather data based on location
  fetchWeatherData = async () => {
    const { location } = this.state;

    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location}`);
      const data = await response.json();
      this.setState({ weather: data.current.temp_c });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Handle page navigation
  navigateTo = (pageName) => {
    this.setState({ currentPage: pageName });
  };

  // Render different pages based on current page state
  renderPage = () => {
    const { currentPage, location, weather } = this.state;

    switch (currentPage) {
      case 'Home':
        return <HomePage navigateTo={this.navigateTo} />;
      case 'Location':
        return <LocationPage location={location} setLocation={(loc) => this.setState({ location: loc })} fetchWeatherData={this.fetchWeatherData} navigateTo={this.navigateTo} />;
      case 'Weather':
        return <WeatherPage location={location} weather={weather} navigateTo={this.navigateTo} />;
      case 'Map':
        return <MapPage location={location} navigateTo={this.navigateTo} />;
      default:
        return null;
    }
  };

  render() {
    return <div>{this.renderPage()}</div>;
  }
}

export default App;
