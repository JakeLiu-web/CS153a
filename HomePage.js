import React from 'react';

const buttonStyle = {
  padding: '10px 20px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  cursor: 'pointer',
  margin: '0 10px',
};

class HomePage extends React.Component {
  render() {
    const { navigateTo } = this.props;

    return (
      <div>
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Home Page</h1>
        <div>
          <button style={buttonStyle} onClick={() => navigateTo('Location')}>Location</button>
          <button style={buttonStyle} onClick={() => navigateTo('Gallery')}>Gallery</button>
          <button style={buttonStyle} onClick={() => navigateTo('Phone')}>Phone</button>
        </div>
      </div>
    );
  }
}

export default HomePage;
