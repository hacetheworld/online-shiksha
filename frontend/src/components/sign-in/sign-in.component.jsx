import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.util'

export default class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {

        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {

        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })

        } catch (error) {
            console.log('Error:' + error);

        }

    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

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


                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>

                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
                            {''}
                            SIGN IN With Google{''}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
