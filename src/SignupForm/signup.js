import React, { Component } from "react";

// CSS Style
import "./signup.css";
import errorIcon from '../images/icon-error.svg';

class Signup extends React.Component {
  // Form fields data state
  state = {
    fields: {},
    errors: {},
    errorsImg: "",
    buttonTxt: "Claim your free trial",
  };

  // Handle validation function binding form fields state
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let errorsImg = {};
    let formIsValid = true;

    // firstname validation
    if (!fields["firstname"]) {
      formIsValid = false;
      this.setState({ errorsImg: "errors"});
      errors["firstname"] = "Firstname cannot be empty";
    }
    if (typeof fields["firstname"] !== "undefined") {
      if (!fields["firstname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["firstname"] = "only letters";
      }
    }

    // lastname validation
    if (!fields["lastname"]){
        formIsValid = false;
        errors["lastname"] = "Lastname cannot be empty"
    };

    // password validation
    if (!fields["password"]){
        formIsValid = false;
        errors["password"] = "Password cannot be empty"
    };

    // Email validation
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Looks like this not an email";
    }
  

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }


  // Handle form submit
  contactSubmit(e) {
    e.preventDefault();
   
    if (this.handleValidation()) {
      this.setState({ buttonTxt: "Form submitted" });
    } else {
      this.setState({ buttonTxt: "Form has errors" });
    }
  }

 
  render() {
    return (
      <div className="Signup">
        <div className="container">
          <div className="signup-wrapper">
            <div className="signup-txt">
              <h1>
                Learn to code by <br /> watching others
              </h1>
              <p>See how experienced developers solve problems in real-time.</p>
              <p>
                Watching scripted tutorials is great, but understanding how
                developers think is invaluable.
              </p>
            </div>
            <div className="signup-form">
              <div className="form-header">
                <p className="header-txt">
                  Try it free 7 days <span>then $20/mo. thereafter</span>{" "}
                </p>
              </div>
              <div className="form-wrapper">
                <form
                  className="form-group"
                  onSubmit={this.contactSubmit.bind(this)}
                >

                  <label for="firstname">
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      className={this.state.errorsImg}
                      value={this.state.fields["firstname"]}
                      onChange={this.handleChange.bind(this, "firstname")}
                    />
                    <p className="errors-txt">
                      {this.state.errors["firstname"]}
                    </p>
                  </label>

                  <label for="lastname">
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      className={this.state.errorsImg}
                      value={this.state.fields["lastname"]}
                      onChange={this.handleChange.bind(this, "lastname")}
                    />
                    <p className="errors-txt">
                        {this.state.errors["lastname"]}
                    </p>
                  </label>

                  <label for="email">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className={this.state.errorsImg}
                      value={this.state.fields["email"]}
                      onChange={this.handleChange.bind(this, "email")}
                    />
                    <p className="errors-txt">
                        {this.state.errors["email"]}
                    </p>
                  </label>
                  <label for="password">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className={this.state.errorsImg}
                      value={this.state.fields["password"]}
                      onChange={this.handleChange.bind(this, "password")}
                    />
                    <p className="errors-txt">
                        {this.state.errors["password"]}
                    </p>
                  </label>
                  <button type="submit" name="submit">
                    {this.state.buttonTxt}
                  </button>
                </form>
                <p className="terms-txt">
                  By clicking the button, you are agreeing to our{" "}
                  <span>Terms and Services</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer>
    <p class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Your Name Here</a>.
    </p>
  </footer>
      </div>
    );
  }
}

export default Signup;
