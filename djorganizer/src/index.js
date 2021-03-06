import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notes from './components/notes/';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({ uri: 'http://localhost:8000/graphql/' });

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
});

ReactDOM.render((
	<ApolloProvider client={client}>
		<Router>
			<div className="routeContainer">
				<Route exact path="/" component={App}/>
				<Route path="/notes" component={Notes}/>
			</div>
		</Router>
	</ApolloProvider>
), document.getElementById('root'));
