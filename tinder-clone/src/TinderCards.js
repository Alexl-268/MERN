import React, {useState} from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name :"Tzuyu",
            url: "https://i.pinimg.com/originals/9d/1a/f3/9d1af3f998bedd9b20fb992d8445e96f.jpg"
        },
        {
            name : "IU",
            url: "https://64.media.tumblr.com/6753e270f1ab27f750b917a375ebcfdc/tumblr_oorl87DMIf1reeyqoo4_250.png"
        }
   
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name => {
        console.log(name +  "left the screen!")
    })

    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person)=>(
                    <TinderCard
                        className = "swipe"
                        key = {person.name}
                        preventSwipe={["up","down"]}
                        onSwipe = {(dir) => swiped(dir, person.name)}
                        onCardLeftScreen = {() => outOfFrame(person.name)}
                    >
                        <div
                            style={{backgroundImage: `url(${person.url})`}}
                            className = "card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
