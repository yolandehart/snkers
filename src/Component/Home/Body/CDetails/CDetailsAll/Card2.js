import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Card2 extends React.Component {
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
                original: 'https://i.pinimg.com/originals/b6/88/f0/b688f0464dab4eb6cb2e7bc46ec62e3a.jpg',
                thumbnail: 'https://i.pinimg.com/originals/b6/88/f0/b688f0464dab4eb6cb2e7bc46ec62e3a.jpg',
              },
              {
                original: 'https://cdn.shopify.com/s/files/1/0238/2821/products/Mens-192-RoyaleKnit-EnviroKnit-White-Navy-REWN-Product-102_1024x1024.jpg?v=1590014012',
                thumbnail: 'https://cdn.shopify.com/s/files/1/0238/2821/products/Mens-192-RoyaleKnit-EnviroKnit-White-Navy-REWN-Product-102_1024x1024.jpg?v=1590014012',
              },
          ]

        })}/></div>);
  }
}
 export default Card2;