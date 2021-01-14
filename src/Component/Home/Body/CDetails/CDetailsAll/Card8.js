import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Card8 extends React.Component {
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
                original: 'https://image.keller-sports.com/storage/products/2C/11/2C112EC1A578FB65E0FAC23C8E8FC6E2C2b0.600x600.jpeg',
                thumbnail: 'https://image.keller-sports.com/storage/products/2C/11/2C112EC1A578FB65E0FAC23C8E8FC6E2C2b0.600x600.jpeg',
              },
              {
                original: 'https://images.asics.com/is/image/asics/1011A681_100_SR_RT_GLB-1?$sfcc-product$',
                thumbnail: 'https://images.asics.com/is/image/asics/1011A681_100_SR_RT_GLB-1?$sfcc-product$',
              },
          ]

        })}/></div>);
  }
}
 export default Card8;