import {useRef, useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import './Login.css';


const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (userRef.current) {
            userRef.current.focus();
        }
    }, []);
    
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user,pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }
    
    return(
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <Link to="/"> Go to Home</Link>
                    </p>
                </section>
                
            ) : (

                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertLive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <button>Sign In</button>
                        </div>
                    </form>
                    <p>
                        Need an Account?
                        Contact your modelManager
                    </p>
                </section>
            )}
            </>
    )
}

export default Login