import React from 'react';
function Slider() {
  return(
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item">
      <img src="https://www.prada.com/content/dam/pradanux/pradasphere/2019/special-projects/pradaforadidas-limited-edition/Asset/Hero_Banner_Big_DT.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item active">
      <img src="https://assets.atmos-tokyo.com/custom_block/1/532/1191a231-100-banner-pc.jpg" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://enfntsterribles.com/wp-content/uploads/2019/12/enfnts-terribles-airjordanxdior-top-04-1000x400.jpg" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://assets.atmos-tokyo.com/custom_block/1/411/banner.asics.pc.jpg" alt="..."/>
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>  
    </div>
  )
}
export default Slider;