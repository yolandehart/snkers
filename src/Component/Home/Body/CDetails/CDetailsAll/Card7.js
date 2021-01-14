import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Card7 extends React.Component {
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
                original: 'https://image.keller-sports.com/storage/products/B4/34/B434FCCB1F99E05C6F6DA0A30732EDDB4Fb0.600x600.jpeg',
                thumbnail: 'https://image.keller-sports.com/storage/products/B4/34/B434FCCB1F99E05C6F6DA0A30732EDDB4Fb0.600x600.jpeg',
              },
              {
                original: 'https://deichmann.scene7.com/asset/deichmann/US_01_421045_00?$rr_main$&defaultImage=default_obs',
                thumbnail: 'https://deichmann.scene7.com/asset/deichmann/US_01_421045_00?$rr_main$&defaultImage=default_obs',
              },
          ]

        })}/></div>);
  }
}
 export default Card7;