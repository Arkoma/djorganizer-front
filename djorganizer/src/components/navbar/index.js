import React from 'react';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';

const NavBar = () => {
	return (
		<div>
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="/">Djorganizer</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1} href="notes/">
								Notes
							</NavItem>
						</Nav>
						<Nav pullRight>
							<NavItem eventKey={1} href="auth/">
								Login / Signup
							</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
	)
}

export default NavBar;

