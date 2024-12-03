// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  const {imageUrl, appName} = details
  return (
    <li className="card">
      <img className="icon" src={imageUrl} alt={appName} />
      <p className="para">{appName}</p>
    </li>
  )
}

export default AppItem
