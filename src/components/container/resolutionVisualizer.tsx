import React from 'react'
import "../../styles/resolutionVisualizer.css"
import { Resolution } from '../../models/resolution.class'
import ResolutionComponent from '../pure/resolutionComponent'

const ResolutionVisualizer = ({resolution, selectResolution}: {resolution: Resolution | null, selectResolution: Function}) => {
  return (
    <div onClick={()=>{selectResolution(null)}} className='resolutionVisualizer'>
        <ResolutionComponent resolution={resolution}/>
    </div>
  )
}

export default ResolutionVisualizer