import { useEffect, useState } from 'react'
import './Card.css'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedCards, setFoundCards } from '../../reducers/cardsSlice'

function Card({ numberToDisplay, isFlipable, index}) {

  const cardsArray = useSelector((state) => state.cards.cards)
  const selectedCards = useSelector((state) => state.cards.selectedCards)
  const foundCards = useSelector((state) => state.cards.foundCards)

  const dispatch = useDispatch()
  const [ isFaceShown, setIsFaceShown ] = useState(false);
  const [ isFound, setIsFound ] = useState(false);

  useEffect(() => {
    if (selectedCards.length === 2) {
      if (selectedCards[0].number === selectedCards[1].number) {
        dispatch(setSelectedCards([]));
      } else if (isFaceShown) {
        setTimeout(() => {
          if (!isFound) {
            setIsFaceShown(!isFaceShown);
          }
          dispatch(setSelectedCards([]));
        }, 1000);        
      }
    }
  }, [selectedCards])

  useEffect(() => {
    if (foundCards.find(elem => elem === numberToDisplay)) setIsFound(true);
  }, [foundCards]);

  const flipCard = () => {
    if (isFlipable && selectedCards.length < 2 && !isFound) {
      setIsFaceShown(!isFaceShown);
      dispatch(setSelectedCards(cardsArray[index]));
    }
  }
  
  return (
    <div className="card" onClick={flipCard}>
      {isFaceShown && <p>{numberToDisplay}</p>}
    </div>
  )
}

export default Card