import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Card16 extends React.Component {
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
                original: 'https://i.pinimg.com/736x/11/2a/31/112a31b0cc8ddaea7a2d5a7488f03721.jpg',
                thumbnail: 'https://i.pinimg.com/736x/11/2a/31/112a31b0cc8ddaea7a2d5a7488f03721.jpg',
              },
              {
                original: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2019%2F08%2Fbalenciaga-triple-s-white-blue-1.jpg?quality=95&w=1170&cbr=1&q=90&fit=max',
                thumbnail: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2019%2F08%2Fbalenciaga-triple-s-white-blue-1.jpg?quality=95&w=1170&cbr=1&q=90&fit=max',
              },
          ]

        })}/></div>);
  }
}
 export default Card16;