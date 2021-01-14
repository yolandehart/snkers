import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Card11 extends React.Component {
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
                original: 'https://i.pinimg.com/564x/f5/d5/ca/f5d5ca54308be50a59f2733c427ab25c.jpg',
                thumbnail: 'https://i.pinimg.com/564x/f5/d5/ca/f5d5ca54308be50a59f2733c427ab25c.jpg',
              },
              {
                original: 'https://i.pinimg.com/474x/c3/37/9f/c3379f0ccca3c00f65be5713acada9b5.jpg',
                thumbnail: 'https://i.pinimg.com/474x/c3/37/9f/c3379f0ccca3c00f65be5713acada9b5.jpg',
              },
          ]

        })}/></div>);
  }
}
 export default Card11;