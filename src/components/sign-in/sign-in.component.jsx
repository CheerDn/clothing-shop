import React, { Component } from "react"
import "./sign-in.styles.scss"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import { singInWithGoogle } from "../../firebase/firebase.utils"

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ email: "", password: "" })
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput label="email" name="email" type="email" value={this.state.email} handleChange={this.handleChange} required />
          <FormInput label="password" name="password" type="password" value={this.state.password} handleChange={this.handleChange} required />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={singInWithGoogle} isGoogleSignIn>
              {" "}
              Sign in with Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
