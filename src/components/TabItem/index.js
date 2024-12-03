// Write your code here
import './index.css'

const TabItem = props => {
  const {details, getId, isActive} = props
  const {tabId, displayText} = details
  const onSub = () => {
    getId(tabId)
  }
  const star = isActive ? 'active-tab' : 'not-active'
  return (
    <li>
      <button className={`btn ${star}`} onClick={onSub}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
