import React from 'react';
import {ReactComponent as Twitter} from '../../assets/icons/twitter.svg';
import {ReactComponent as Facebook} from '../../assets/icons/facebook.svg';
import {ReactComponent as Youtube} from '../../assets/icons/youtube.svg';
import {ReactComponent as Reddit} from '../../assets/icons/reddit.svg';

import './footer.scss';
import Box from "../box/";

const Footer = () => {
    return (
        <footer className="footer">
            <Box className="footer__box">
                <Facebook className="facebook"/>
            </Box>
            <Box className="footer__box">
                <Twitter className="twitter"/>
            </Box>
            <Box className="footer__box">
                <Youtube className="youtube"/>
            </Box>
            <Box className="footer__box">
                <Reddit className="reddit"/>
            </Box>

        </footer>
    )
};

export default Footer;