import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Card10 extends React.Component {
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
                original: 'https://i.pinimg.com/474x/0f/51/9d/0f519d6dfd6394a40ac96ab347f62f9a.jpg',
                thumbnail: 'https://i.pinimg.com/474x/0f/51/9d/0f519d6dfd6394a40ac96ab347f62f9a.jpg',
              },
              {
                original: 'https://i.pinimg.com/474x/a3/d8/a4/a3d8a46e7ccf45f553772ecb79add17b.jpg',
                thumbnail: 'https://i.pinimg.com/474x/a3/d8/a4/a3d8a46e7ccf45f553772ecb79add17b.jpg',
              },
          ]

        })}/></div>);
  }
}
 export default Card10;