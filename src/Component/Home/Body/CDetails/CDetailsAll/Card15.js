import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Card15 extends React.Component {
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
                original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMa_PylZbQQVWAv7sqgGuLDOKAGnyZ4ox8g&usqp=CAU',
                thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMa_PylZbQQVWAv7sqgGuLDOKAGnyZ4ox8g&usqp=CAU',
              },
              {
                original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnoyJHQWieclDmgPjieiJiMiegKweArC1Xg&usqp=CAU',
                thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnoyJHQWieclDmgPjieiJiMiegKweArC1Xg&usqp=CAU',
              },
          ]

        })}/></div>);
  }
}
 export default Card15;