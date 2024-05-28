import React from 'react'
import src1 from '../images/dallas-reedy-Tx3mPkG2qLA-unsplash.jpg'
import src2 from '../images/windows-VMPhyAoVqqk-unsplash-removebg-preview.png'
import src3 from '../images/nordwood-themes-kRNZiGKtz48-unsplash.jpg'

export default function Carosel() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={src1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={src2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={src3} alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

    </div>
  )
}
