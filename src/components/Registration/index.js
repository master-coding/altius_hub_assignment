import React, {useState} from 'react';
import Login from './Login';
import Register from './Register';

export default function Registration() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <h1>Task 1</h1>
            <div>
                {/* <form>
                    <input 
                        type = 'email'
                        placeholder = 'email'
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        type="password"
                        placeholder='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    /> */}

                    <Login />
                    <Register />
                    {/* <div><button>Sign up</button></div>
                </form> */}
            </div>
        </div>
    )
} 