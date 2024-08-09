// Write your code here
import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  onRightReview = () => {
    const {activeReview} = this.state
    if (activeReview <= 3) {
      this.setState(right => {
        return {activeReview: right.activeReview + 1}
      })
    }
  }

  getActiveReview = reviewsList => {
    const {imgUrl, username, companyName, description} = reviewsList
    return (
      <div className="review-card">
        <img src={imgUrl} className="img" alt={username} />
        <p className="username">{username}</p>
        <p className="companyname">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onLeftReview = () => {
    const {activeReview} = this.state
    if (activeReview > 0) {
      this.setState(left => {
        return {activeReview: left.activeReview - 1}
      })
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReview} = this.state
    const getActiveReview = this.getActiveReview(reviewsList[activeReview])
    return (
      <>
        <div className="app-container">
          <div className="container">
            <h1 className="heading">Reviews</h1>
            <div className="review-container">
              <button
                className="arrow-button"
                onClick={this.onLeftReview}
                data-testid="leftArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left arrow"
                  className="arrow"
                />
              </button>
              {getActiveReview}
              <button
                className="arrow-button"
                onClick={this.onRightReview}
                data-testid="rightArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  alt="right arrow"
                  className="arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ReviewsCarousel
