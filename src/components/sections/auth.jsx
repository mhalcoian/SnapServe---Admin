import logo from '/snapserve_logo.jpg'

function Auth() {  
    return <div className="login-form">
        <img className="login-logo"src={logo}/>
    <div>
        <p className='subtitle'>Email address</p>
        <input className="inputAuth" placeholder="example@gmail.com"></input>


        <p className='subtitle'>Password</p>
        <input className="inputAuth" placeholder ="Password"></input>
    </div>
        <button id="login-btn">LOG IN</button>
    </div>
}

export default Auth;