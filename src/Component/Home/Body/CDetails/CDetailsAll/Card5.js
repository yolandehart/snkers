import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Card5 extends React.Component {
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
                original: 'https://www.traininn.com/f/13738/137385922/adidas-strutter.jpg',
                thumbnail: 'https://www.traininn.com/f/13738/137385922/adidas-strutter.jpg',
              },
              {
                original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6--iC-sjAPizv-nk1B_ku6EKGhENE4fmfog&usqp=CAU',
                thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6--iC-sjAPizv-nk1B_ku6EKGhENE4fmfog&usqp=CAU',
              },
          ]

        })}/></div>);
  }
}
 export default Card5;