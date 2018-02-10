import React, { Component } from "react"
import { Accounts } from "meteor/accounts-base"

export default class RegisterForm extends Component {
	registerUser = (e) => {
		e.preventDefault()

		Accounts.createUser({
			email: this.email.value,
			password: this.password.value
		}, error => {
			if (!error) this.props.client.resetStore()
				
			console.log(error)
		})
	}

	render() {
		return (
			<form onSubmit={this.registerUser}>
				<input
					type="email"
					ref={input => (this.email = input)}
					placeholder="Email para registrarse"
					required
				/>
				<input type="password" ref={input => (this.password = input)} placeholder="Pass para registrarse" required />
				<button type="submit">Register User</button>
			</form>
		)
	}
}