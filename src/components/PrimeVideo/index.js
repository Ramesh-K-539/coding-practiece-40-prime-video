// Write your code here

import Slider from 'react-slick'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  console.log(moviesList)

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="videos-container">
        <div className="action-movies-container">
          <h1 className="heading">Action Movies</h1>
          <div className="action-movies-container-2">
            <Slider>
              <div className="text">1</div>
              <div className="text">1</div>
              <div className="text">1</div>
              <div className="text">1</div>
              <div className="text">1</div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
