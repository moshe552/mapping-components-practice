import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

function createEmojipedia(emoji) {
    return(
        <Emoji
          key={emoji.id}
          emoji={emoji.emoji}
          name={emoji.name}
          meaning={emoji.meaning}
        />
    )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEmojipedia)}
      </dl> 
    </div>
  );
}

export default App;
