/* eslint-disable no-undef */
// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails} = props
  const {emojiName, emojiUrl} = emojiDetails

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={onClickEmojiCard}>
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}
export default EmojiCard
