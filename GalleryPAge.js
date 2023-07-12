import React from 'react';

class GalleryPage extends React.Component {
  render() {
    const { photos, navigateTo } = this.props;

    return (
      <div>
        <h1>Gallery</h1>
        <div className="gallery">
          {photos.map((photo) => (
            <img key={photo.id} src={photo.url} alt={photo.alt} className="gallery-image" />
          ))}
        </div>
        <button onClick={() => navigateTo('Home')}>Back to Home</button>
      </div>
    );
  }
}

export default GalleryPage;
