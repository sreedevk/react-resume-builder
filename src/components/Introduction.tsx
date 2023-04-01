import Elevator from '../data/elevator' 
import Title from './shared/title'

const Introduction = () => {
  return (
    <div className="my-1">
      <Title icon_class='fas fa-user-cog' title="Introduction"/>
      <p className="my-1 text-sm text-justify">{Elevator}</p>
    </div>
  )
}

export default Introduction
