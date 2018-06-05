import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Note extends Component {
	render() {
		return (
			<div>
				<Panel>
					<Panel.Heading>
						<Panel.Title componentClass="h3">
							{this.props.note.title}
						</Panel.Title>
					</Panel.Heading>
					<Panel.Body>
						{this.props.note.content}
					</Panel.Body>
				</Panel>
			</div>
		)
	}
}

export default Note;
