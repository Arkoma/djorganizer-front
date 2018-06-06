import React, { Component } from "react";
import { AUTH_TOKEN } from "../constants";

class Login extends Component {

	state = {
		login: true,
		password:'',
		username:''
	}

	render() {

		return (
			<div>
				<h4 className="mv3">{this.state.login ? 'Login' : 'Sign Up'}</h4>
				<div className="flex flex-column">
					{!this.state.login && (
							<input
								value={this.state.username}
								onChange={(e) => this.setState({ username: e.target.value })}
								type="text"
								placeholder="username"
							\>
						)}
						<input
							value={this.state.password}
							onChange={e => this.setState({ password: e.target.value })}
							type="password"
							placeholder="password"
						/>
					</div>
					<div className="flex mt3">
						<div className="pointer mr2 button" onClick={() => this._confirm()}>
							{this.state.login ? 'login' : 'create account'}
						</div>
						<div
							className="pointer button"
							onClick{() => this.setState({ login: !this.state.login })}
						>
							{this.state.login
									? 'need to create an account?'
									: 'already have an account?'}
						</div>
					</div>
				</div>
			)
		}

		_confirm = () => {
		}

		_saveUserData = token => {
			localStorage.setItem(AUTH_TOKEN, token)
		}
	}

	export default Login
