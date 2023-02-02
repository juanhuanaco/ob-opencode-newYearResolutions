import React from 'react'
import { Resolution } from '../../models/resolution.class';
import "../../styles/resolutionComponent.css"
// ? Find a better name for the component, since it is only used on the resolutionVisualizer for now.
const ResolutionComponent = ({resolution}: {resolution: Resolution | null}) => {
  return (
    <div style={{"backgroundImage" : `url(${resolution?.noteStyle.normal})`}} className='resolution'>
      <div className='resolution-header'>
        {resolution?.emoji}
      </div>
      <div className='resolution-body'>
        <h2>PROPÓSITO:</h2>
        <p>{resolution?.data.resolution}</p>
        <h2>COMO LO VOY A HACER:</h2>
        <p>{resolution?.data.howItWillBeDone}</p>
        <h2>CUÁNTO TIEMPO ME TOMARÁ:</h2>
        <p>{resolution?.data.howMuchTime}</p>
        <h2>FECHA DE INICIO:</h2>
        <p>{resolution?.data.startDate}</p>
      </div>
    </div>
  )
}

export default ResolutionComponent