// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="planet-slider-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        <div>
          {planetsList.map(eachPlanet => (
            <PlanetItem planetItemDetails={eachPlanet} key={eachPlanet.id} />
          ))}
        </div>
      </Slider>
    </div>
  )
}

export default PlanetsSlider
