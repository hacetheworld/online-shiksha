import React, { Component } from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

export default class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (e) => {

        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {

        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Passord  and confirm Password does Not match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState({ displayName: '', email: '', password: '', confirmPassword: '' })

        } catch (error) {
            console.log('Error:' + error);

        }



    }
    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'>I Don't have an account</h2>
                <span>Sign Up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                    <FormInput
                        name='displayName' type='text' value={this.state.displayName}

                        handleChange={this.handleChange}
                        label='Display Name'
                        required
                    />

                    <FormInput
                        name='email' type='email' value={this.state.email}

                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />


                    <FormInput name='password' type='password' value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required />

                    <FormInput name='confirmPassword' type='password' value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
