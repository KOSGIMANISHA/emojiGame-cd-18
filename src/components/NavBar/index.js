/* eslint-disable no-undef */
// Write your code here.
import './index.css'

// eslint-disable-next-line no-unused-vars
const NavBar = () => (
  // eslint-disable-next-line spaced-comment
  //const {currentScore, isGameInProgress, topScore} = props

  <nav className="nav-bar-container">
    <div className="title-with-score-container">
      <div className="logo-and-title-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="emoji-logo"
          alt="emoji logo"
        />
        <h1 className="title">Emoji Game</h1>
      </div>

      <div className="scores-container">
        <p className="score">Score: 0</p>
        <p className="score">Top Score: 0</p>
      </div>
    </div>
  </nav>
)

export default NavBar
