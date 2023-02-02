import React from 'react'
import { Resolution } from '../../models/resolution.class';
import { STICKY_NOTE_STYLES } from '../../models/stickyNoteStyles.enum';
import "../../styles/createResolutionComponent.css"
import EmojiPickerComponent from './emojiPickerComponent';


const CreateResolutionComponent = ({removeComponent, addResolution}: {removeComponent:Function, addResolution:Function}) => {

    const inputEmoji = React.useRef<HTMLButtonElement>(null);
    const emojiPicker = React.useRef<HTMLDivElement>(null);

    var today = new Date().toISOString().slice(0, 10);

    function createResolution(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        var inputs:HTMLFormControlsCollection = event.currentTarget.elements;
        var resolution: string = (inputs.namedItem("answer-1-textarea") as HTMLTextAreaElement).value;
        var howItWillBeDone: string = (inputs.namedItem("answer-2-textarea") as HTMLTextAreaElement).value;
        var howMuchTime: string = 
            (inputs.namedItem("answer-3-quantity") as HTMLInputElement).value
            +" "
            +(inputs.namedItem("answer-3-timeframe") as HTMLSelectElement).value;
        var startDate: string = (inputs.namedItem("answer-4-date") as HTMLInputElement).value;

        var colorNote: {tiny: string, normal: string};
        switch (Math.floor((Math.random() * 4))){
            case 0:
                colorNote = STICKY_NOTE_STYLES.BLUE; break;
            case 1:
                colorNote = STICKY_NOTE_STYLES.GREEN; break;
            case 2:
                colorNote = STICKY_NOTE_STYLES.WHITE; break;
            default:
                colorNote = STICKY_NOTE_STYLES.PINK;
        }


        var newResolution: Resolution = 
            new Resolution(
                inputEmoji.current!.innerText, 
                colorNote,
                {resolution, howItWillBeDone, howMuchTime, startDate});
        addResolution(newResolution);
        removeComponent();
    }

    function setEmoji(emoji: string) {
        inputEmoji.current!.innerText = emoji;
    }

    var pickerElement:React.RefObject<HTMLDivElement>;

    function passPickerElement(element:React.RefObject<HTMLDivElement>) {
        pickerElement = element;
    }

    function showPickerElement() {
        pickerElement.current!.style.display = "block";
    }

    return (
        <div className='createResolutionContainer'>
            <form className='createResolutionForm' onSubmit={createResolution}>
                <span className='removeButton' onClick={()=>removeComponent()}>❌</span>
                <div className='createResolutionBlock'>
                    <span className="createResolutionQuestion">Emoji</span>
                    <span className='createResolutionDescription'>Un emoji dice más que mil palabras... bueno, una imagen, pero ñe, same thing 😂😝</span>
                    <button className='button-emoji' ref={inputEmoji} onClick={showPickerElement} type='button' name='answer-0-emoji'>😉</button>
                    <EmojiPickerComponent setEmoji={setEmoji} passPickerElement={passPickerElement}/>
                </div>
                <div className='createResolutionBlock'>
                    <span className="createResolutionQuestion">Propósito</span>
                    <span className='createResolutionDescription'>Tu objetivo para este año, nuevo inicio = nuevo tú</span>
                    <textarea name="answer-1-textarea" id="answer-1-textarea" required cols={15} rows={5} placeholder="Conseguir músculos, como el primo Fabio y pitufo fortachón."></textarea>
                </div>
                <div className='createResolutionBlock'>
                    <span className="createResolutionQuestion">¿Cómo lo conseguirás?</span>
                    <span className='createResolutionDescription'>"Dividamos la torta en tajadas, así es más fácil acabarla 🎂". Espera... ¿de qué hablabamos? 🤨</span>
                    <textarea name="answer-2-textarea" id="answer-2-textarea" required cols={15} rows={5} placeholder={"- Preguntar gimnasios al primo Fabio\n- Asistir 3 días a la semana durante 5 meses\n- Comprobar resultados desafiando a la Roca a un PvP"}></textarea>
                </div>
                <div className='createResolutionBlock'>
                    <span className="createResolutionQuestion">¿Cuánto tiempo tomará?</span>
                    <span className='createResolutionDescription'>Un tiempo para cada cosa, y cada cosa a su tiempo. ⌛</span>
                    <input style={{"width":"50px", "display":"inline-block"}} type="number" value={3} required name='answer-3-quantity' max={30} min={1}/>
                    <select style={{"width":"150px","display":"inline-block"}} name="answer-3-timeframe" id="answer-3-timeframe">
                        <option value="Mes(es)">Mes(es)</option>
                        <option value="Semana(s)">Semana(s)</option>
                        <option value="Día(s)">Día(s)</option>
                    </select>
                </div>
                <div className='createResolutionBlock'>
                    <span className="createResolutionQuestion">¿Cuándo iniciamos?</span>
                    <span className='createResolutionDescription'>Más vale tarde que nunca. Y mejor aún temprano que tarde. 😉</span>
                    
                    <input type="date" name="answer-4-date" required value={today} min={today}></input>
                </div>
                <button type='submit'>Crear Propósito</button>
            </form>
        </div>
    )
}

export default CreateResolutionComponent