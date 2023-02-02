import React from 'react'
import 'emoji-picker-element';

const EmojiPickerComponent = ({setEmoji, passPickerElement}:{setEmoji:Function, passPickerElement: Function}) => {
    const emoji = React.useRef<any>(null);
    const picker = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        
            emoji.current.addEventListener('emoji-click', (event:any) => {
                setEmoji(event.detail.unicode);
                picker.current!.style.display = "none";
            });
            emoji.current.skinToneEmoji = '👍';
            passPickerElement(picker);
    }, [])

    return (
        <div style={{"position":"relative"}}>
            <div ref={picker} style={{"position":"absolute", "display":"none"}}>
                {React.createElement('emoji-picker', {ref: emoji})}
            </div>
        </div>
        
    )
}

export default EmojiPickerComponent