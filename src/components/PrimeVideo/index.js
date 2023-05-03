// Write your code here

import './index.css'

import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )

  console.log(actionMoviesList)

  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )

  console.log(comedyMoviesList)

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
          <div>
            <MoviesSlider moviesList={actionMoviesList} />
          </div>
        </div>
        <div className="action-movies-container">
          <h1 className="heading">Comedy Movies</h1>
          <div>
            <MoviesSlider moviesList={comedyMoviesList} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
