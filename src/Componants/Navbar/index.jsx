import React, { useContext } from 'react';
import './style.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { ThemeContext } from '../../Context/ThemeContext';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton, Tooltip } from '@mui/material';
import TemporaryDrawer from '../Drawer';

const ScrollButton = ({ target }) => (
    <Link
        activeClass="active"
        to={target}
        spy={true}
        smooth={true}
        duration={300}
        style={{ cursor: 'pointer' }}
    >
        {target}
    </Link>
);

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleClick = () => {
        window.location.reload(); 
    };

    return (
        <nav className="navbar">
            <div className="left-nav">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h2 onClick={handleClick}>Anagh.Porfolio</h2>
                </Link>
            </div>
            <div className="right-nav">
                <Tooltip title={theme} arrow>
                    <IconButton onClick={toggleTheme}>
                        {theme === 'light' ? <DarkModeIcon /> : <WbSunnyIcon />}
                    </IconButton>
                </Tooltip>
                <ScrollButton target='Home' />
                <ScrollButton target='About' />
                <ScrollButton target='Project' />
                <ScrollButton target='Contacts' />
                <a className="resume" target="_blank" href="https://drive.google.com/file/d/1Y10n7jCSQgLeIyrtrgKvDBvP6Jt-K2c3/view?usp=drive_link">Resume</a>
            </div>
            <div className='drawer'>
                <TemporaryDrawer />
            </div>
        </nav>
    );
}

export default Navbar;
