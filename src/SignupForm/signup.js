import React,{ Component } from 'react';

// CSS Style
import './signup.css';

class Signup extends React.Component {
   
    // Form fields data state 
    state = {
        fields: {},
        errors: {},
        buttonTxt: "Claim your free trial"

    }

    // Handle validation function binding form fields state
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

    // firstname validation
    if(!fields["firstname"]){
        formIsValid = false;
        errors["firstname"] = "Cannot be empty";
    }
    if(typeof fields["firstname"] !== "undefined"){
        if(!fields["firstname"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["firstname"] = "only letters";
        }
    }

    // Email validation 
    if(!fields["email"]){
        formIsValid = false;
        errors["email"] = "Cannot be empty";
    }
    if(typeof fields["email"] !== "undefined"){
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');

        if(!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].IndexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
        }
    }

    this.setState({errors: errors});
    return formIsValid;
    }
   
// Handle form submit
contactSubmit(e){
    e.preventDefault();

    if(this.handleValidation()){
        this.setState({buttonTxt: "Form submitted"});
    }else{
        this.setState({buttonTxt: "Form has errors"});
    }

}

handleChange(field, e){
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({fields});
}
    

  
    render(){
        return(
            <div className="Signup">
                <div className="container">
                    <div className="signup-wrapper">
                        <div className="signup-txt">
                            <h1>Learn to code by <br/> watching others</h1>
                            <p>See how experienced developers solve problems in real-time.</p>
                            <p>Watching scripted tutorials is great, but understanding 
                            how developers think is invaluable.</p>
                        </div>
                        <div className="signup-form">
                            <div className="form-header">
                                <p className="header-txt">Try it free 7 days <span>then $20/mo. thereafter</span> </p>
                            </div>
                            <div className="form-wrapper">
                                <form className="form-group" onSubmit={this.contactSubmit.bind(this)}>
                                    <label for="firstname">
                                    <input type="text" name="firstname" placeholder="First Name" 
                                    value={this.state.fields["firstname"]} onChange={this.handleChange.bind(this, "firstname")} />
                                    <span style={{color: "red"}}>{this.state.errors["firstname"]}</span>
                                    </label>
                                    <label for="lastname">
                                    <input type="text" name="lastname" placeholder="Last Name" 
                                    />
                                    </label>
                                    <label for="email">
                                    <input type="email" name="email" placeholder="Email Address"
                                    value={this.state.fields["email"]} onchange={this.handleChange.bind(this, "email")} />
                                    <span>{this.state.errors["email"]}</span>
                                    </label>
                                    <label for="password">
                                    <input type="password" name="password" placeholder="Password"
                                     />
                                    </label>
                                    <button type="submit" name="submit">{this.state.buttonTxt}</button>
                                </form>
                                <p className="terms-txt">By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Signup;