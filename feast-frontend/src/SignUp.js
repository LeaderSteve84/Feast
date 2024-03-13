import { useState } from 'react';

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return ( 
        <div className="signup">
            <form action="" className="signup-form">
                <label htmlFor="username" className="username">Username:</label>
                <input type="text"
                id="username"
                required
                value={ username }
                onChange={(e) => setUsername(
                    e.target.value
                )} />
                <label htmlFor="email">E-mail</label>
                <input type="email"
                name="email"
                id="email"
                required
                value={ email }
                onChange={(e) => setEmail(
                    e.target.value
                )} />
                <label htmlFor="password">Password</label>
                <input type="password"
                name="password"
                id="password"
                required
                value={ password }
                onChange={(e) => setPassword(
                    e.target.value
                )} />
                <button className='submit'>Submit</button>
            </form>
        </div>
    );
}
 
export default SignUp;