 import React, { Component } from 'react';
 import { Control, Form , Errors } from 'react-redux-form';
 import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
 import { strength, strengthColor } from '../shared/strengthMeter';
 import './style.css';

 const required = (val) => val && val.length;
 const maxLength = (len) => (val) => !(val) || (val.length <= len);
 const minLength = (len) => (val) => !(val) || (val.length >= len);
 const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
 const isNumber = (val) => !isNaN(Number(val));
 
  class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
         password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handlePasswordChanges = this.handlePasswordChanges.bind(this);
    }

    handleSubmit(vals) {
        //alert(vals.email + vals.password + vals.confirmPassword);
        this.props.postForm1(vals.email,vals.password,vals.confirmPassword);
        this.props.resetForm1();
        this.setState({ password: ""});
    }

    handleSubmit2(values) {
        //alert(values.firstname + values.lastname + values.address + values.postal + values.country);
        this.props.postForm2(values.firstname, values.lastname, values.address, values.postal, values.country);
        this.props.resetForm2();
        this.setState({ password: ""});
    }

    handlePasswordChanges(event) {
    this.setState({ password: event.target.value});
    }

    render() {

        const passwordStrength = strength(this.state.password);
        const color = strengthColor(passwordStrength);

        return(
            <div className="wrap">
                <Tabs
                activeLinkStyle={{
                    fontWeight: "bold",
                    borderBottom: "3px solid #ccc"}}
                >
                  <div className="tabs-container">
                    <TabLink to="tab1">Basic Data</TabLink>
                    <TabLink to="tab2">Address</TabLink>
                  </div>
                  <TabContent for="tab1">
                    <Form model="form1" 
                      validators={{
                        '': {
                          passwordsMatch: (vals) => vals.confirmPassword === vals.password,
                          passStrength: () => color === 'green',
                        }}}
                      onSubmit={(vals) => this.handleSubmit(vals)}>
                        <label htmlFor="email">Email</label>
                        <Control.text model=".email" id="email" name="email"
                            placeholder="email"
                            className="form-control"
                            validators={{
                                required, validEmail
                            }}
                        />
                        <Errors
                        className="text-danger"
                        model=".email"
                        show="touched"
                        messages={{
                            required: 'Email required ',
                            validEmail: 'Invalid Email address'
                        }}
                        />
                        <label htmlFor="password">Password</label>
                        <Control.text model=".password" id="password" name="password"
                            value={this.state.value}
                            placeholder="password"
                            className='password-input'
                            validators={{
                                required
                            }}
                            onChange={this.handlePasswordChanges}
                            style={{
                                borderColor: color
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".password"
                            show="touched"
                            messages={{
                                required: 'Password required '
                            }}
                        />
                        <label htmlFor="confirmPassword" >Confirm password</label>
                        <Control.text model=".confirmPassword" id="confirmPassword" name="confirmPassword"
                            placeholder="Confirm password"
                            className="form-control"
                            validators={{
                                required
                            }}
                            />
                        <Errors
                            className="text-danger"
                            model=".confirmPassword"
                            show="touched"
                            messages={{
                                required: 'Please confirm your password',
                            }}
                        />
                        <Errors
                            className="text-danger" 
                            model="form1"
                            show="touched"
                            messages={{
                                passwordsMatch: 'Passwords must match ',
                                passStrength: 'The password must contain uppercase letters, lowercase letters, numbers and special characters. '
                            }} 
                         />
                        <div className="form-group">
                            <button type="submit" color="primary">
                                Save
                            </button>
                        </div>
                    </Form>
                  </TabContent>
                  <TabContent for="tab2">
                    <Form model="form2" onSubmit={(values) => this.handleSubmit2(values)}>
                        <label htmlFor="firstname">First Name</label>
                        <Control.text model=".firstname" id="firstname" name="firstname"
                            placeholder="First Name"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength:maxLength(15)
                            }}
                            />
                        <Errors
                            className="text-danger"
                            model=".firstname"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                        />
                        <label htmlFor="lastname">Last Name</label>
                        <Control.text model=".lastname" id="lastname" name="lastname"
                            placeholder="Last Name"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength:maxLength(15)
                            }}
                            />
                        <Errors
                            className="text-danger"
                            model=".lastname"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                        />
                        <label htmlFor="address">Address</label>
                        <Control.text model=".address" id="address" name="address"
                                placeholder="street, house number"
                                className="form-control" />
                        <label htmlFor="postal">Postal Code</label>
                        <Control.text model=".postal" id="postal" name="postal"
                                placeholder="Zip"
                                className="form-control"
                                validators={{
                                    required, isNumber
                                }}    
                            />
                        <Errors
                            className="text-danger"
                            model=".postal"
                            show="touched"
                            messages={{
                                required: 'Required',
                                isNumber: 'Must be a number'
                            }}
                        />
                        <label htmlFor="country">Country</label>
                        <Control.select model=".country" name="country"
                            className="form-control">
                            <option>Germany</option>
                            <option>Austria</option>
                            <option>Switzerland</option> 
                        </Control.select>
                        <div className="form-group">
                            <button type="submit" color="primary">
                                Send
                            </button>
                        </div>
                    </Form>
                  </TabContent>
                </Tabs>
            </div>
        );

    }

}

export default User;