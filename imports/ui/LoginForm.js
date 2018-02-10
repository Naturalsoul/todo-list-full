import React, { Component } from "react"
import { Accounts } from "meteor/accounts-base"


export default class LoginForm extends Component {
	login = (e) => {
		e.preventDefault()

		Meteor.loginWithPassword(this.email.value, this.password.value, error => {
			if (!error) this.props.client.resetStore()
		})
	}

	render() {
		return (
			<form onSubmit={this.login}>
				<input
					type="email"
					ref={input => (this.email = input)}
					placeholder="Email para Login"
					required
				/>
				<input type="password" ref={input => (this.password = input)} placeholder="Password para Login" required />
				<button type="submit">Login User</button>
			</form>
		)
	}
}

