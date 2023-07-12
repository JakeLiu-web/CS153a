import React from 'react';
import HomePage from './components/HomePage';
import LocationPage from './components/LocationPage';
import WeatherPage from './components/WeatherPage';
import GalleryPage from './components/GalleryPage';
import PhonePage from './components/PhonePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Home',
    };
  }

  navigateTo = (pageName) => {
    this.setState({ currentPage: pageName });
  };

  renderPage = () => {
    const { currentPage } = this.state;

    switch (currentPage) {
      case 'Home':
        return <HomePage navigateTo={this.navigateTo} />;
      case 'Location':
        return <LocationPage navigateTo={this.navigateTo} />;
      case 'Weather':
        return <WeatherPage navigateTo={this.navigateTo} />;
      case 'Gallery':
        return <GalleryPage navigateTo={this.navigateTo} />;
      case 'Phone':
        return <PhonePage navigateTo={this.navigateTo} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
