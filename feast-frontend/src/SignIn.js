import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const SignIn = () => {

    const [signinemail, setSigninemail] = useState('');
    const [signinpassword, setSigninpassword] = useState('');
    // const redirect = useHistory();

    const handleSigninSubmit = (e) => {
        e.preventDefault();
        const signinData = { signinemail, signinpassword };
        console.log(signinData);

        // redirect.push("/");

        /*fetch('', {
          method: 'POST',
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(signinData);
        )}.then(() => {
          console.log('Signed In');
          redirect("/");
        })*/
    }

    return ( 
        <div className="signin">
            <form onSubmit={ handleSigninSubmit } className="signinform">
                <div className='signin-heading'>
                        <h3>Sign In</h3>
                </div>
                <div className="input-email">
                        <label htmlFor='signin-email'>E-mail: </label>
                        <input type="email"
                        name="email"
                        id="signin-email"
                        required
                        value={ signinemail }
                        onChange={(e) => setSigninemail(
                                 e.target.value
                        )} />
                </div>
                <div className="input-password">
                        <label htmlFor="signin-password">Password: </label>
                        <input type="password"
                        name="password"
                        id="signin-password"
                        required
                        value={ signinpassword }
                        onChange={(e) => setSigninpassword(
                                 e.target.value
                        )} />
                </div>
                <div className="signin-buttons">
                        <button className="submit-signin">Submit</button>
                        <p>Or click button below to sign up.</p>
                        <button className="signin-signup-button"><Link to="/signup">Sign Up</Link></button>
                </div>
            </form>
        </div>
     );
}
 
export default SignIn;
