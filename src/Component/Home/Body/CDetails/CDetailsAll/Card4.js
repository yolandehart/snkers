import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Card4 extends React.Component {
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
                original: 'https://image.goxip.com/n6EjTG1arQPOJ98UAUES8O2d_sU=/fit-in/400x400/filters:fill(white):format(jpeg):quality(80)/https:%2F%2Fres.cloudinary.com%2Fssenseweb%2Fimage%2Fupload%2Fb_white%252Cc_lpad%252Cg_center%252Ch_960%252Cw_960%2Fc_scale%252Ch_680%2Ff_auto%252Cdpr_1.0%2Fv572%2F202800F128004_1.jpg',
                thumbnail: 'https://image.goxip.com/n6EjTG1arQPOJ98UAUES8O2d_sU=/fit-in/400x400/filters:fill(white):format(jpeg):quality(80)/https:%2F%2Fres.cloudinary.com%2Fssenseweb%2Fimage%2Fupload%2Fb_white%252Cc_lpad%252Cg_center%252Ch_960%252Cw_960%2Fc_scale%252Ch_680%2Ff_auto%252Cdpr_1.0%2Fv572%2F202800F128004_1.jpg',
              },
              {
                original: 'https://www.intermixonline.com/dw/image/v2/BBSL_PRD/on/demandware.static/-/Sites-masterCatalog_intermix/default/dw29102f66/images/2020/SHOES/_03_MARCH/21214W7TSHWHT_4.jpg?sw=2000&sh=2000&sm=fit',
                thumbnail: 'https://www.intermixonline.com/dw/image/v2/BBSL_PRD/on/demandware.static/-/Sites-masterCatalog_intermix/default/dw29102f66/images/2020/SHOES/_03_MARCH/21214W7TSHWHT_4.jpg?sw=2000&sh=2000&sm=fit',
              },
          ]

        })}/></div>);
  }
}
 export default Card4;