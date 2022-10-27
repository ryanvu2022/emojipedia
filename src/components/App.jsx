import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia"

const App = () => {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(card =>            
            <Entry 
              key={card.id}
              icon= {card.emoji}
              term= {card.name}
              description= {card.meaning}
            />
          )
        }
      </dl>
    </div>
  );
}

export default App;