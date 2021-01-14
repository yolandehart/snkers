import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Card13 extends React.Component {
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
                original: 'https://s3-eu-west-1.amazonaws.com/img.frmoda.com/scarpe/isabelmarant/bk00/BK005250BZmarrone-01.jpg',
                thumbnail: 'https://s3-eu-west-1.amazonaws.com/img.frmoda.com/scarpe/isabelmarant/bk00/BK005250BZmarrone-01.jpg',
              },
              {
                original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWA7F6sAx51mG59d-ye2eMHFPb4Z5qKrbAw&usqp=CAU',
                thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWA7F6sAx51mG59d-ye2eMHFPb4Z5qKrbAw&usqp=CAU',
              },
          ]

        })}/></div>);
  }
}
 export default Card13;