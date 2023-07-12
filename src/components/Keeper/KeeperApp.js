import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Header from "../Header"
import Footer from "../Footer";

function KeeperApp() {
	const [notes, setNotes] = useState([]);

	function addNote(newNote) {
		setNotes(prevNotes => {
			return [...prevNotes, newNote];
		});
	}

	function deleteNote(id) {
		setNotes(prevNotes => {
			return prevNotes.filter((noteItem, index) => {
				return index !== id;
			});
		});
	}

	return (
		<>
			<Header />
			<div className="keeperBody">

				<CreateArea onAdd={addNote} />
				{notes.map((noteItem, index) => {
					return (
						<Note
							key={index}
							id={index}
							title={noteItem.title}
							content={noteItem.content}
							onDelete={deleteNote}
						/>
					);
				})}

			</div>
			<Footer />
		</>
	);
}

export default KeeperApp;