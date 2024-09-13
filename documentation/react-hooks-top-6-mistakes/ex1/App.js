import React, { useState, useRef} from 'react';

function App() {
    const emailRef = useRef()
    const passwordRef = useRef()
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')


    function onSubmit(e) {
        e.preventDefault();
        console.log( {
            email: emailRef.current.value, 
            password: passwordRef.current.value 
        });
        // React only uses email, password when the form is being submitted
        // React doesn't care whether email, password are displayed on screen
    }

    return (
        <div>
            <form onSubmit={onSubmit}> {/* only required here */}
                <label htmlFor='email'>Email</label>
                <input 
                    ref={emailRef}
                    type="email"
                    id="email"
                />
                <label htmlFor='password'>Password</label>
                <input
                    ref={passwordRef}
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                    id='password'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )

}