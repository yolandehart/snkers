import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Card14 extends React.Component {
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
                original: 'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/201171M237076_1/moncler-genius-pink-leave-no-trace-sneakers.jpg',
                thumbnail: 'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/201171M237076_1/moncler-genius-pink-leave-no-trace-sneakers.jpg',
              },
              {
                original: 'https://cdn-images.farfetch-contents.com/moncler-kids-panelled-chunky-sole-sneakers_15942024_29660113_1000.jpg',
                thumbnail: 'https://cdn-images.farfetch-contents.com/moncler-kids-panelled-chunky-sole-sneakers_15942024_29660113_1000.jpg',
              },
          ]

        })}/></div>);
  }
}
 export default Card14;