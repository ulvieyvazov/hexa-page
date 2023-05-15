import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Helmet } from "react-helmet";


const Home = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>


            <div className="home-container">

                <div className="home-parent">
                    <div className="cart-parent">
                        {data
                            .filter((f) => f.id < 4)
                            .map((d) => (
                                <div className="cart">
                                    <img src={d.image} alt="" />
                                    <p>{d.price}azn</p>
                                    <p style={{ textTransform: "capitalize", padding: "10px 0" }}>
                                        {d.category}
                                    </p>
                                    <p>{d.title}</p>
                                </div>
                            ))}
                    </div>

                    <div className="build">
                        <div className="build-parent">
                            <div className="left">
                                <div>01</div>
                                <dir className="a"></dir>
                                <div style={{ textTransform: "uppercase" }}> Infrastructure</div>
                            </div>

                            <h2>Let's Build Together</h2>

                            <div>
                                <p>
                                    Far far away, behind the word mountains, far from the
                                    countries Vokalia and Consonantia, there live the blind texts.
                                    Separated they live in Bookmarksgrove right at the coast of
                                    the Semantics, a large language ocean.
                                </p>
                            </div>
                        </div>

                        <div className="image">
                            <img
                                src="https://preview.colorlib.com/theme/hexa/images/img_1_long.jpg.webp"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="build">
                        <div className="image">
                            <img
                                src="https://preview.colorlib.com/theme/hexa/images/img_2_long.jpg.webp"
                                alt=""
                            />
                        </div>

                        <div className="build-parent">
                            <div className="left">
                                <div>02</div>
                                <dir className="a"></dir>
                                <div style={{ textTransform: "uppercase" }}>Collaborate</div>
                            </div>

                            <h2>Open for Collaboration</h2>

                            <div>
                                <p>
                                    A small river named Duden flows by their place and supplies it
                                    with the necessary regelialia. It is a paradisematic country,
                                    in which roasted parts of sentences fly into your mouth.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="projects-parent">
                        <div className="projects">
                            <h2>Projects</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Commodi unde impedit, necessitatibus, soluta sit quam minima
                                expedita atque corrupti reiciendis.
                            </p>
                        </div>

                        <div className="images">
                            <div>
                                <img
                                    src="https://preview.colorlib.com/theme/hexa/images/img_1_long.jpg.webp"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    src="https://preview.colorlib.com/theme/hexa/images/img_1_long.jpg.webp"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    src="https://preview.colorlib.com/theme/hexa/images/img_1_long.jpg.webp"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    src="https://preview.colorlib.com/theme/hexa/images/img_1_long.jpg.webp"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    src="https://preview.colorlib.com/theme/hexa/images/img_1_long.jpg.webp"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    src="https://preview.colorlib.com/theme/hexa/images/img_1_long.jpg.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-parent">
                        <div className="projects">
                            <h2>Testimonial</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Commodi unde impedit, necessitatibus, soluta sit quam minima
                                expedita atque corrupti reiciendis.
                            </p>
                        </div>

                        <div className="testimonial-cart" style={{ display: "flex" }}>
                            {data
                                .filter((f) => f.id < 4)
                                .map((d) => (
                                    <div className="cart">
                                        <img src={d.image} alt="" />
                                        <p>{d.price}azn</p>
                                        <p
                                            style={{ textTransform: "capitalize", padding: "10px 0" }}
                                        >
                                            {d.category}
                                        </p>
                                        <p>{d.title}</p>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="blog">
                        <div className="projects">
                            <h2>Blog Posts</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Commodi unde impedit, necessitatibus, soluta sit quam minima
                                expedita atque corrupti reiciendis.
                            </p>
                        </div>

                        <div className="c">
                            <div className="feb">
                                <div className="feb-image">
                                    <img
                                        src="https://preview.colorlib.com/theme/hexa/images/img_1.jpg.webp"
                                        alt=""
                                    />
                                    <div>
                                        <span>Feb 26th, 2018</span>
                                        <h3 style={{ padding: "15px 0" }}>Free Website Template at Free-Template.co</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Ipsam minus ipsa earum nemo consectetur cupiditate
                                            necessitatibus suscipit assumenda perspiciatis provident.
                                        </p>
                                        <p style={{ margin: "15px 0" }} className="more">Read more</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d">
                                <div className="div">
                                    <div className="feb">
                                        <div className="feb-image">
                                            <img
                                                src="https://preview.colorlib.com/theme/hexa/images/img_2.jpg.webp"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <span>Feb 26th, 2018</span>
                                            <h3 style={{ padding: "15px 0" }}>
                                                Free Website Template at Free-Template.co
                                            </h3>
                                            <p className="more">Read more</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="feb">
                                    <div className="feb-image">
                                        <img
                                            src="https://preview.colorlib.com/theme/hexa/images/img_3.jpg.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <span>Feb 26th, 2018</span>
                                        <h3 style={{ padding: "15px 0" }}>
                                            Free Website Template at Free-Template.co
                                        </h3>
                                        <p className="more">Read more</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div></div>
                </div>
            </div>
        </>
    );
};

export default Home;
