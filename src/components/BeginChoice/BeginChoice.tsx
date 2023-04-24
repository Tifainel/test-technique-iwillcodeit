import { useState } from 'react'
import './BeginChoice.css'

function BeginChoice({ setNbOfCards }) {
    
    const [ nbCardsInput, setNbCardsInput] = useState(4);
    const [ errorMsg, setErrorMsg ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        if (formJson.nbCards % 2 !== 0) {
            setErrorMsg('The number of cards must be even');
        } else {
            setNbOfCards(formJson.nbCards)
        }
    };

    return (
        <div className='begin-choice'>
            <h3>Choose a number of cards (must be an even number)</h3>
            <form onSubmit={handleSubmit} className="form-choice">
                <input name="nbCards" type="number" defaultValue={nbCardsInput} min={4} />
                <button type='submit'>Start Game</button>
                <p>{errorMsg}</p>
            </form>
        </div>
    )
}

export default BeginChoice
