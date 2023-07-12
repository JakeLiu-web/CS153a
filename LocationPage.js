import React from 'react';

class LocationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
  }

  handleLocationChange = (event) => {
    this.setState({ location: event.target.value });
  };

  handleSubmit = () => {
    const { location } = this.state;
    const { fetchWeatherData, navigateTo } = this.props;

    if (location) {
      fetchWeatherData(location);
      navigateTo('Weather');
    }
  };

  render() {
    const { location } = this.state;
    const { navigateTo } = this.props;

    return (
      <div>
        <h1>Location</h1>
        <div>
          <input type="text" value={location} onChange={this.handleLocationChange} placeholder="Enter location" />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <button onClick={() => navigateTo('Home')}>Back to Home</button>
      </div>
    );
  }
}

export default LocationPage;
