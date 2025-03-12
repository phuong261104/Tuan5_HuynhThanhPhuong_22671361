import { useEffect, useState } from "react";
import "./ex1.css"
import Footer from "./footer"
import Item from "./item"
const Ex1 = () => {
    const [dataCard, setDataCard] = useState([]);

    useEffect(() => {
        fetch("https://67cab39c102d684575c665a5.mockapi.io/card")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setDataCard(data);
            })
            .catch((error) => console.error(error));
    }, []);
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img className="logo-icon" src="/img1.png" alt="" />
                    <span className="logo-text">Cheffy</span>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search recipes..." />
                </div>

                <nav className="nav-links">
                    <a href="#">What to cook</a>
                    <a href="#">Recipes</a>
                    <a href="#">Ingredients</a>
                    <a href="#">Occasions</a>
                    <a href="#">About Us</a>
                </nav>

                <div className="user-section">
                    <button className="recipe-box">Your Recipe Box</button>
                    <img className="user-avatar" src="/img1.png" alt="" />
                </div>
            </div>

            <div className="body">
                <div className="info">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <div className="info-author">
                        <div className="info-author__avatar">
                            <img src="https://res.cloudinary.com/dx8u0eu1q/image/upload/v1741144816/cucumber_salad_charry_tomatoes_vtsspx.png" alt="" />
                        </div>
                        <div className="info-author__desc">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, itaque. Labore hic, odit odio delectus consequatur iusto fuga cumque assumenda minima dolore, libero necessitatibus ducimus rerum? Dolor reiciendis debitis velit?</p>
                            <div>
                                <span>6.5k Subscribes</span>
                                <button>Share</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <Item dataCard={dataCard} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Ex1