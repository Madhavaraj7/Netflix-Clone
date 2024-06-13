import React from 'react';
import './Footer.css';

const Foot = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <a href="#">FAQ</a>
                    <a href="#">Help Center</a>
                    <a href="#">Account</a>
                    <a href="#">Media Center</a>
                    <a href="#">Investor Relations</a>
                    <a href="#">Jobs</a>
                    <a href="#">Ways to Watch</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy</a>
                    <a href="#">Cookie Preferences</a>
                    <a href="#">Corporate Information</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
                <div className="footer-text">
                    <p>© 2024 Netflix, Inc.</p>
                </div>
            </div>
        </footer>
    );
};

export default Foot;
