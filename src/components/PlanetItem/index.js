// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetItemDetails} = props
  const {name, imageUrl, description} = planetItemDetails

  return (
    <div className="planet-item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
