import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Card9 extends React.Component {
  render() {
    return (<div >
    <ImageGallery {... (
        {
          thumbnailPosition: "left",
          useBrowserFullscreen: true,
          showPlayButton: true,
          showIndex: true,
          height: "400px",
          width: "400px",

    
          items: [
            {
                original: 'https://i.pinimg.com/564x/27/4c/22/274c220c0a337f5da599fe26c50ad551.jpg',
                thumbnail: 'https://i.pinimg.com/564x/27/4c/22/274c220c0a337f5da599fe26c50ad551.jpg',
              },
              {
                original: 'https://i.pinimg.com/474x/10/b8/b5/10b8b5a25fbe379ab481c022f9b0027b.jpg',
                thumbnail: 'https://i.pinimg.com/474x/10/b8/b5/10b8b5a25fbe379ab481c022f9b0027b.jpg',
              },
          ]

        })}/></div>);
  }
}
 export default Card9;