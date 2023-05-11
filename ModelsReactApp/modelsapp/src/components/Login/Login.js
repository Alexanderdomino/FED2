import {useRef, useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import './Login.css';
import {postData} from "../../Services/api";


const Login = (props) => {
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
        try {
            const response = await postData('api/Account/login', { email: user, password: pwd });
            console.log(response);

            if (response.jwt) {
                localStorage.setItem('token', response.jwt);
                props.onLogin();
                setSuccess(true);
            } else {
                const error = JSON.parse(response);
                setErrMsg(error.message);
            }

        } catch (error) {
            setErrMsg(error.message);
        }
    };
    
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
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="polite">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Email:</label>
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