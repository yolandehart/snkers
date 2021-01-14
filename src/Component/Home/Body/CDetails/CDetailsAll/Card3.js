import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Card3 extends React.Component {
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
                original: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/127dee93a5a64100865eaa4300b2edb1_9366/Advantage_Base_EE7692_01_standard.jpg',
                thumbnail: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/127dee93a5a64100865eaa4300b2edb1_9366/Advantage_Base_EE7692_01_standard.jpg',
              },
              {
                original: 'https://www.famousfootwear.ca/productimages/shoes_ia708638.jpg?trim.threshold=105&width=630&height=480&paddingWidth=60',
                thumbnail: 'https://www.famousfootwear.ca/productimages/shoes_ia708638.jpg?trim.threshold=105&width=630&height=480&paddingWidth=60',
              },
          ]

        })}/></div>);
  }
}
 export default Card3;