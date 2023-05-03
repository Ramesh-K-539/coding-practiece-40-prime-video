// Write your code here

import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {movieDetails} = props
  const {videoUrl, thumbnailUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
      }
      className="popup-content"
    >
      {close => (
        <div className="video-container">
          <button
            className="custom-button"
            type="submit"
            onClick={() => close()}
          >
            <div data-testId="closeButton">
              <IoMdClose size={20} color="#231f20" />
            </div>
            ?
          </button>
          <div>
            <ReactPlayer url={videoUrl} controls />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
