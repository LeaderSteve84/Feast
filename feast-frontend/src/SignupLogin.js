import './SignupLogin.css';
import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const SignupLogin = () => {

    const [ action, setAction ] = useState('Sign Up');
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    // const [isPending, setIsPending] = useState(false);
    //  const redirect = useHistory();

    const submitHandler = (e) => {
        if (action==="Sign Up") {
            e.preventDefault();
            const signupData = { firstname, lastname, email, password };
            console.log(signupData);
            alert('sign up successful. click ok to continue');
            
            /*fetch('api/v1/auth/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(signupData);
            )}.then(() => {
            console.log('Signed Up');
            setIsPending(false);
            redirect.push("/signin");
            })*/

        } else {
            e.preventDefault();
            const loginData = { email, password };
            console.log(loginData);
            alert('login successful. click ok to continue');

            /*fetch('api/v1/auth/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(loginData);
            )}.then(() => {
            console.log('Signed In');
            redirect.push("/recipes");
            })*/
        }
    }

    return ( 
        <div className="container">
            <form onSubmit={ submitHandler }>
            <div className="header">{ action }</div>
            <div className="inputs-container">
                { action==="Login"?<></>:<div className="input">
                    <input type="text" 
                    placeholder="First Name" 
                    required 
                    value={ firstname } 
                    onChange={(e) => setFirstname(
                        e.target.value
                    )} />
                </div> }
                { action==="Login"?<></>:<div className="input">
                    <input type="text" 
                    placeholder="Last Name" 
                    required
                    value={ lastname }
                    onChange={(e) => setLastname(
                        e.target.value
                    )}/>
                </div> }
                <div className="input">
                    <input type="text" 
                    placeholder="Email Id"
                    required
                    value={ email }
                    onChange={(e) => setEmail(
                        e.target.value
                    )}/>
                </div>
                <div className="input">
                    <input type="text"
                    placeholder="Password"
                    required
                    value={ password } 
                    onChange={(e) => setPassword(
                        e.target.value
                    )}/>
                </div>
            </div>
            { action==="Sign Up"?<></>:<div className="forget-password">
                Forgot Password?<span> Click Here</span>
            </div> }
            <div className="signup-signin-buttons">
                <div className="signup">
                    <h4 className={action==="Login"?"signup-button grey":"signup-button"} onClick={() => setAction('Sign Up')}>Sign Up</h4>
                </div>
                <div className="login">
                    <h4 className={action==="Sign Up"?"signup-button grey":"signin-button"} onClick={() => setAction('Login')}>Login</h4>
                </div>
            </div>
            <div className="submit-buttons">
                { action==="Login"?<></>:<div className="submit-to-signup">
                    <button type="submit">submit to signup</button> 
                </div> }
                { action==="Sign Up"?<></>:<div className="submit-to-login">
                    <button type="submit`">submit to login</button>    
                </div> }                
            </div>
            </form>
        </div>
     );
}
 
export default SignupLogin;
