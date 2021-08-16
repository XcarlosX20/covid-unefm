import React, { Fragment } from 'react';
import Navigation from './Navigation/Navigation';
import { Link } from 'react-router-dom';
const Header = ({ titulo }) => {
    return (
        <Fragment>
            <header className="mb-5">
                <div className="header">
                    <Link to="/"><h1 className="title">{titulo}</h1></Link>
                    <div className="header-img">
                        <span>Coro, Falcon</span>
                        <img width="30px" height="30px" src="https://res.cloudinary.com/do5yybhwe/image/upload/v1619996265/UNEFM/Venezuela_whlxlz.png" alt="vzla" />
                    </div>
                </div>
                <Navigation />
            </header>

        </Fragment>
    );
}

export default Header;