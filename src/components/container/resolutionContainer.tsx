import React, {useState} from 'react'
import { Resolution } from '../../models/resolution.class'
import { STICKY_NOTE_STYLES } from '../../models/stickyNoteStyles.enum'
import "../../styles/resolutionContainer.css"
import deleteIcon from "../../img/icon-trash.svg"
import CreateResolutionComponent from '../pure/createResolutionComponent'
import GreetingMessageComponent from '../pure/greetingMessageComponent'

const ResolutionContainer = ({selectResolution} : {selectResolution: Function}) => {

  var temp: Resolution[] = [
    new Resolution("📖", STICKY_NOTE_STYLES.PINK, {resolution: "Study more often", howMuchTime: "3 months", startDate: "17/01/2023", howItWillBeDone: "Will collect a lot of books to read."}),
    new Resolution("😎", STICKY_NOTE_STYLES.GREEN, {resolution: "Go to the gym", howMuchTime: "2 months", startDate: "20/02/2023", howItWillBeDone: "Will visit a gym near to my house."}),
    new Resolution("⭐", STICKY_NOTE_STYLES.WHITE, {resolution: "Fly to new countries", howMuchTime: "3 months", startDate: "17/01/2023", howItWillBeDone: "Will learn about new countries."}),
  ]
  const [resolutions, setResolutions] = useState(temp);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showGreetingMessage, setShowGreetingMessage] = useState(false);
  function toggleCreateResolutionForm () {
    if (resolutions.length === 6){
      toggleGreetingMessage();
      return;
    } 
    setShowCreateForm(!showCreateForm);
  }

  function toggleGreetingMessage() {
    setShowGreetingMessage(!showGreetingMessage);
  }

  function addResolution(resolution: Resolution) {
    var temp = resolutions.slice();
    temp.push(resolution);
    setResolutions(temp);
  }

  function deleteResolution (resolution: Resolution, event: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    event.stopPropagation();
    var index: number = resolutions.indexOf(resolution);
    var temp: Resolution[] = resolutions.slice();
    temp.splice(index, 1);
    setResolutions(temp);
  }

 // * Do reference of this for later use
  
  return (
    // ? Change resolutionContainer as a whole, add resolutionOptions and resolutionBoard
    <div className='resolutionContainer'>
      {(showGreetingMessage) ? <GreetingMessageComponent removeComponent={toggleGreetingMessage}/>:""}
      {(showCreateForm) ? <CreateResolutionComponent addResolution={addResolution} removeComponent={toggleCreateResolutionForm}/>:""}
      <div className='resolutionOptions'>
        <button onClick={toggleCreateResolutionForm}>Create</button>
      </div>
    
      <div className='resolutionBoard'>
        {resolutions.map((elm, index)=>
          <div>
            <div style={{"backgroundImage": `url(${elm.noteStyle.tiny})`}} onClick={()=>{selectResolution(elm)}} className='resolutionItem' key={index}>
              <span className='deleteButton' onClick={(event)=>deleteResolution(elm, event)}><img src={deleteIcon} alt="icon-delete" /></span>
              {elm.emoji}
              </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResolutionContainer