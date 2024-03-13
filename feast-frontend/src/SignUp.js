const SignUp = () => {
    return ( 
        <div className="signup">
            <form action="" className="signup-form">
                <label htmlFor="username" className="username">Username:</label>
                <input type="text"
                id="username"
                required
                value={ username }
                onChange={ (e) => setUsername(
                    e.target.value
                )} />
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
            </form>
        </div>
    );
}
 
export default SignUp;