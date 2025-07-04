import logo from '/snapserve_logo.jpg'

function Dashboard(){
    return <div className="container">
        <div className="header">
    <img className="logo"src={logo}/>
    </div>
    <div className="menu">
        <p>DASHBOARD</p>
        <p>VENDORS</p>
        <p>STORES</p>
        <p>USERS</p>
        <p>REPORTS</p>
        <button id="logout-btn">LOG OUT</button>
    </div>
    </div>
}

export default Dashboard