import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import BeginChoice from './components/BeginChoice/BeginChoice';
import { createNumbersArray } from './utils';
import { useSelector, useDispatch } from 'react-redux';
import { setCards, setFoundCards } from './reducers/cardsSlice';

function App() {

  const cardsArray = useSelector((state) => state.cards.cards)
  const foundCards = useSelector((state) => state.cards.foundCards)
  const selectedCards = useSelector((state) => state.cards.selectedCards)
  const dispatch = useDispatch()

  // TODO : add selection from the user to define the nb of cards
  const [ nbOfCards, setNbOfCards ] = useState(4);
  const [ displayedCards, setDisplayedCards ] = useState([]);
  const [ isWin, setIsWin ] = useState(false);

  // Generates cards with random numbers based on the nb of cards needed
  const generateCards = (nbCards) => {
    const tmpArray = [];
    const nbArray = createNumbersArray(nbCards);

    for (let i = 0; i < nbCards; i++) {
      const index = Math.floor(Math.random() * (nbCards - 1 - i));
      tmpArray.push({number: nbArray[index], isFlipable: true, isShown: false})
      nbArray.splice(index, 1);
    };
    dispatch(setCards(tmpArray));
    setNbOfCards(nbCards);
  };

  const endOfGame = () => {
    setIsWin(false);
    dispatch(setCards([]));
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      if (selectedCards[0].number === selectedCards[1].number) {
        dispatch(setFoundCards(selectedCards[0].number));
      }       
    }
  }, [selectedCards])

  const displayCards = () => {
    const tmpArray = [];
    cardsArray.map((item, index) => {tmpArray.push(<Card numberToDisplay={item.number} isFlipable={item.isFlipable} index={index}></Card>)})
    return tmpArray;
  }

  useEffect(() => {
    setDisplayedCards(displayCards());
  }, [cardsArray]);

  useEffect(() => {
    if (foundCards.length === nbOfCards / 2) setIsWin(true);
  }, [foundCards]);

  return (
    <div className="App">
      <h1>The best memory game you've ever seen</h1>
      {!isWin && 
        <div className='cards-list'>
          { displayedCards.length === 0 &&
            <BeginChoice setNbOfCards={generateCards}></BeginChoice>
          }
          { displayedCards.length !== 0 && 
            displayedCards 
          }
        </div>
      }
      { isWin &&
        <div className='win-screen'>
          <h2>Congrats, you won !</h2>
          <button onClick={endOfGame}>Start a new game</button>
        </div>
      }
    </div>
  )
}

export default App