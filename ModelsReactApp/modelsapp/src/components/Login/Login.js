import {useRef, useState, useEffect} from 'react'

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    
    const [user, setUSer] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    
    useEffect(() => {
        userRef.current.focus();
    }, [])
    
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])
    
    return(
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertLive">{errMsg}</p>
            <h1>Sign In</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                       id=""
                />
            </form>
            
        </section>
    )
}

export default Login