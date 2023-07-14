import React from "react";
import Entry from "./Entry";
import emojipedia from "./emojipedia";

function EmojiApp() {
    return (
        <>
            <div className="emojiBody">
                <dl className="dictionary">
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
