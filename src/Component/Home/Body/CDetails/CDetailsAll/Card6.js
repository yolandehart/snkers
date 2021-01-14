import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Card6 extends React.Component {
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
                original: 'https://i.pinimg.com/564x/d9/73/4a/d9734a51d8e4f46bb56af6e58a8da33e.jpg',
                thumbnail: 'https://i.pinimg.com/564x/d9/73/4a/d9734a51d8e4f46bb56af6e58a8da33e.jpg',
              },
              {
                original: 'https://i.pinimg.com/474x/d4/de/16/d4de1681c2fbe59c49f49d143c54be77.jpg',
                thumbnail: 'https://i.pinimg.com/474x/d4/de/16/d4de1681c2fbe59c49f49d143c54be77.jpg',
              },
          ]

        })}/></div>);
  }
}
 export default Card6;