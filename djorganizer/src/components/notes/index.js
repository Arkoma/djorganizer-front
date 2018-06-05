import React, { Component } from 'react';
import NavBar from '../navbar';
import Note from '../note';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const NOTES_QUERY = gql `
	query NotesQuery {
	 allNotes {
		 id, title, content,
		 }
	}
`

class Notes extends Component {

	render() {
	console.log('props: ', this.props);

		if (this.props.notesQuery && this.props.notesQuery.loading) {
			return <div>Loading...</div>
		}

		if (this.props.notesQuery && this.props.notesQuery.error) {
			return <div>Error</div>
		}

		const notesToRender = this.props.notesQuery.allNotes;

		return ( 
			<div className="notes-container">
				<NavBar />
				<div>{notesToRender.map(note => <Note key={note.id} note={note} />)}</div>
			</div>
		)
	}
}

export default graphql(NOTES_QUERY, { name: 'notesQuery' }) (Notes);
