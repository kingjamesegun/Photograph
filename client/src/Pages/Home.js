import React from 'react'
import { ReactComponent as Logo} from '../assests/Logo.svg'
import smallMama from '../assests/small mama.jpg';
import bigMama from '../assests/bigMama.jpg';
import Overlay from '../assests/cameraImg.jpg';
import '../styles/Home.css'


function Home() {
    return (
        <div className="Home app">
            <nav className="home__nav">
                <div className="nav__logo">
                    <Logo/>
                </div>
                <div className="home__link nav__link">
                    About
                </div>
            </nav>
            <div className="home__images row">
                <div className="col-lg-5">
                    <img className="images__small" alt="smallMama" src={smallMama}/>
                </div>
                <div className="col-lg-7">
                    <img className="images__big" alt="bigMama" src={bigMama}/>
                </div>
            </div>
            <div className="home__bottomLinks">
                <div className="home__link bottom__link">
                    Login
                </div>
                <div className="home__link bottom__link">
                    Register
                </div>
            </div>

            {/* <div className="home__overlayImage">
                <img className="imageOverlay" alt="overlay" src={Overlay}/>
            </div> */}
            

        </div>
    )
}

export default Home
