import React, {useState} from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people] = useState([
        {
            name :"2",
            url: "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.clker.com%2Fclipart-two-6.html&psig=AOvVaw2SbyQEPhrSBmOEpGWGsJex&ust=1631324479626000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDfmLOj8_ICFQAAAAAdAAAAABAD"
        },
        {
            name : "1",
            url: "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/edit%2827117%29.png?itok=MZVr8CB5"
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
