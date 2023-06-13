 import './Nav.css';


 const Nav = () => {
    return (
        <nav className="Navb" id="Navv" >
            <div className="logo">
            {/* <img src='{Logo}' /> */}
                {/* <img src="./Logo.jpg" alt="#" /> */}
                <img src='https://edu.sqi.ng/wp-content/uploads/2019/01/co.jpg' alt='#' />
            </div>
            <button className="nav-btn1">
                About
                <div className="drop-down text-dark">
                    <div className="dropd">Nonsoglobal</div>
                    <div className="dropd">Our Story</div>
                    <div className="dropd">Our Team</div>
                </div>
            </button>
            <button className="nav-btn">
                Programmes
                <div className="drop-down">
                    <div className="dropd"></div>
                    <div className="dropd"></div>
                    <div className="dropd"></div>
                </div>

            </button>
            <button className="nav-btn">
                Admissions
                <div className="drop-down">
                    <div className="dropd"></div>
                    <div className="dropd"></div>
                    <div className="dropd"></div>
                </div>

            </button>
            <button className="nav-btn">
                E-Portal
                <div className="drop-down">
                    <div className="dropd"></div>
                    <div className="dropd"></div>
                    <div className="dropd"></div>
                </div>
            </button>
            <button className="nav-btn">
                SQI Scholarship
            </button>
            <button className="nav-btn">
                News
            </button>
        </nav>


    )
}

export default Nav