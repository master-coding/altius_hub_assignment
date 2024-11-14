import React, {useState, useEffect} from 'react';
import Login from './Login';
import Register from './Register';

export default function Registration() {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div>
            <h1>Task 1, will be using localStorage for it</h1>
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
                    <Register setIsAuthenticated={setIsAuthenticated}/>
                    <Login setIsAuthenticated={setIsAuthenticated}/>
                    {/* <div><button>Sign up</button></div>
                </form> */}
            </div>
        </div>
    )
} 