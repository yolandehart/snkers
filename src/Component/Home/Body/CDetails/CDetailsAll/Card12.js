import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Card12 extends React.Component {
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
                original: 'https://i.pinimg.com/474x/c5/d6/5f/c5d65fe04130f8f0e3971beb4a13f9d9.jpg',
                thumbnail: 'https://i.pinimg.com/474x/c5/d6/5f/c5d65fe04130f8f0e3971beb4a13f9d9.jpg',
              },
              {
                original: 'https://i.pinimg.com/474x/53/dd/46/53dd462ee3e357c46573297994aaabc2.jpg',
                thumbnail: 'https://i.pinimg.com/474x/53/dd/46/53dd462ee3e357c46573297994aaabc2.jpg',
              },
          ]

        })}/></div>);
  }
}
 export default Card12;