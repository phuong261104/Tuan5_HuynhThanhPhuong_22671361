import React from "react";
import "./footer.css"; // Import file CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section about">
                <h3>About Us</h3>
                <p>
                    Welcome to our website, a wonderful place to explore and learn how to
                    cook like a pro.
                </p>
                <div className="subscribe">
                    <input type="email" placeholder="Enter your email" />
                    <button>Send</button>
                </div>
                <div className="footer-bottom">
                    <div className="footer-logo">
                        <span className="logo">Chefify</span>
                    </div>
                    <p> <span className="logo">Chefify</span>© 2023 Chefify Company | Terms of Service | Privacy Policy</p>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div className="footer-section">
                    <h3>Learn More</h3>
                    <ul>
                        <li>Our Cooks</li>
                        <li>See Our Features</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Shop</h3>
                    <ul>
                        <li>Gift Subscription</li>
                        <li>Send Us Feedback</li>
                    </ul>
                </div>
            </div>

            <div className="footer-section">
                <h3>Recipes</h3>
                <ul>
                    <li>What to Cook This Week</li>
                    <li>Pasta</li>
                    <li>Dinner</li>
                    <li>Healthy</li>
                    <li>Vegetarian</li>
                    <li>Vegan</li>
                    <li>Christmas</li>
                </ul>
            </div>
        </footer >
    );
};

export default Footer;
