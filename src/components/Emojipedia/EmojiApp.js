import React from "react";
import Entry from "./Entry";
import emojipedia from "./emojipedia";

// function createEntry(emojiTerm) {
//   return (
//     <Entry
//       key={emojiTerm.id}
//       emoji={emojiTerm.emoji}
//       name={emojiTerm.name}
//       description={emojiTerm.meaning}
//     />
//   );
// }

function EmojiApp() {
    return (
        <>
            <div className="emojiBody">             
                    <span>emojipedia</span>          
                <dl className="dictionary">
                    {/* {emojipedia.map(createEntry)} */}
                    {emojipedia.map((emojiTerm) => (
                        <Entry
                            key={emojiTerm.id}
                            emoji={emojiTerm.emoji}
                            name={emojiTerm.name}
                            description={emojiTerm.meaning}
                        />
                    ))}
                </dl>
            </div>
        </>
    );
}

export default EmojiApp;
