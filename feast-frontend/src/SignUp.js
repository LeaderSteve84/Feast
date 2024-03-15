import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const SignUp = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);    
   //  const redirect = useHistory();

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const signupData = { firstname, lastname, email, password };
        setIsPending(true);
        console.log(signupData);
        setIsPending(false);

       // redirect.push("/signin");

	/*setIsPending(true);*/

	/*fetch('', {
          method: 'POST',
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(signinData);
        )}.then(() => {
          console.log('Signed Up');
          setIsPending(false);
          redirect.push("/signin");
        })*/
    }

    return ( 
        <div className="signup">
            <form onSubmit={ handleSignupSubmit } className="signup-form">
                <div className='signup-heading'>
                    <h3>Sign Up</h3>
                </div>
                <div className="firstname">
                    <label htmlFor="firstname">First name: </label>
                    <input type="text"
                    id="firstname"
                    required
                    value={ firstname }
                    onChange={(e) => setFirstname(
                        e.target.value
                    )} />
                </div>
		<div className="lastname">
                    <label htmlFor="lastname">Last name: </label>
                    <input type="text"
                    id="lastname"
                    required
                    value={ lastname }
                    onChange={(e) => setLastname(
                        e.target.value
                    )} />
                </div>
                <div className="email">
                    <label htmlFor="email">E-mail: </label>
                    <input type="email"
                    name="email"
                    id="email"
                    required
                    value={ email }
                    onChange={(e) => setEmail(
                        e.target.value
                    )} />
                </div>
                <div className="password">
                    <label htmlFor="password">Password: </label>
                    <input type="password"
                    name="password"
                    id="password"
                    required
                    value={ password }
                    onChange={(e) => setPassword(
                        e.target.value
                    )} />
                </div>
                <div className='signup-buttons'>
                        { !isPending && <button className='submit-signup'>Submit</button> }
			{ isPending && <button className='submit-signup' disabled>Submiting ... </button>}
                                <p>Or Click button below to Login</p>
                        <button className='signup-signin-button'><Link to="/signin">Sign In</Link></button>
                </div>
            </form>
        </div>
    );
}
 
export default SignUp;
