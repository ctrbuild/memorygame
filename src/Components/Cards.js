import { useState, useRef } from "react";
import Card from './Card'
import EndGame from "../EndGame";
import Timer from './Components/Timer'


export default function Cards() {
    const [cards, setCards] = useState([
        {id:0, name: 'Bryan Canstron', status: '', img:'/images/01.png'},
        {id:0, name: 'Bryan Canstron', status: '', img:'/images/01_1.png'},
        {id:1, name: 'Bryan Canstron', status: '', img:'/images/02.png'},
        {id:1, name: 'Bryan Canstron', status: '', img:'/images/02_2.png'},
        {id:2, name: 'Bryan Canstron', status: '', img:'/images/03.png'},
        {id:2, name: 'Bryan Canstron', status: '', img:'/images/03_3.png'},
        {id:3, name: 'Bryan Canstron', status: '', img:'/images/04.png'},
        {id:3, name: 'Bryan Canstron', status: '', img:'/images/04_4.png'},
        {id:4, name: 'Bryan Canstron', status: '', img:'/images/05.png'},
        {id:4, name: 'Bryan Canstron', status: '', img:'/images/05_5.png'},
        {id:5, name: 'Bryan Canstron', status: '', img:'/images/06.png'},
        {id:5, name: 'Bryan Canstron', status: '', img:'/images/06_6.png'},
        {id:6, name: 'Bryan Canstron', status: '', img:'/images/07.png'},
        {id:6, name: 'Bryan Canstron', status: '', img:'/images/07_7.png'},
        {id:7, name: 'Bryan Canstron', status: '', img:'/images/08.png'},
        {id:7, name: 'Bryan Canstron', status: '', img:'/images/08_8.png'},
    ].sort(()=> Math.random()- 0.5))

    const [previousCardState, setPreviousCardState] = useState(-1)
    const previousIndex = useRef(-1)

    const [gameFinished, setGameFinished] = useState(false);

    const matchCheck = (currentCard) => {
        if (cards[currentCard].id === cards[previousCardState].id) {
            cards[previousCardState].status = 'active matched'
            cards[currentCard].status = 'active matched'
            setPreviousCardState(-1)

        }else{
            // here's the flip timeout part
            cards[currentCard].status = 'active'
            setCards([...cards])
            setTimeout(() => {
                setPreviousCardState(-1)
                cards[currentCard].status = 'unmatch'
                cards[previousCardState].status = 'unmatch'
                setCards([...cards])

            }, 3000);

        }
        let matched = 0;
        for (let i = 0; i < 16; i++) {
            if (cards[i].status === 'active matched')
                matched = matched + 1
        }
        if (matched === 16)
            setGameFinished(true);
    }

    // clickhandler for when a user clicks on a card
    const clickhandler = (index)=> {
        if(index !== previousIndex.current){
            // card was already matched with another card
            if(cards[index].status === 'active matched'){
                alert('already matched')
            }
            else{
                // Have it where they can be only 2 active cards (sometimes users can click 3, bugs the game out)
                // count cards, use a counter to keep track -> prob can be optimized more?
                //let active_count = 0;
                // for(let i=0; i<16;i++){
                //     if(cards[i].status === 'active')
                //         active_count+=1
                // }
                // basically does the same thing above^
                let active_count = cards.filter((card) => card.status == 'active').length;
                // check if 2 or more cards have been chosen
                if(active_count >= 2)
                {
                    // debug
                    console.log("2 cards choosen!")
                    //console.log("length of array= " + cards.filter((card) => card.status == 'active').length)
                    // just reset the index
                    previousIndex.current=-1
                }
                // if the user has only chosen 1 - 2 cards
                else{
                    if(previousCardState === -1){
                        previousIndex.current = index
                        cards[index].status = 'active'
                        setCards([...cards])
                        setPreviousCardState(index)
                    }else{
                        matchCheck(index)
                        previousIndex.current=-1
                    }
            }
            }
        }else{
            alert('card currently selected')
        }
    }


    return (
        <div className="App">
            <h1>Google Cloud Products</h1>
            <Timer />

            <div className="container">

                {cards.map((card, index) => {
                    return <Card card={card} key={index} index={index} clickhandler={clickhandler} />
                })}
                {gameFinished && (
                    <EndGame

                    />
                )}
            </div>
        </div>
    );
}