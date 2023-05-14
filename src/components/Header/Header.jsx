import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
import axios from 'axios'
const Header = () => {

    // const [data, setData] = useState([])

    // const getData = async () => {
    //     const res = await axios.get("https://fakestoreapi.com/products")
    //     setData(res.data)
    // }

    // useEffect(() => {
    //     getData()
    // }, [])


    return (
        <>

            <div className='parent'>

                <div className='header-container'>
                    <div className='header-left'>
                        <div>
                            HEXA
                        </div>
                        <ul>
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/add"}>About</NavLink></li>
                            <li><NavLink to={""}>Projects</NavLink></li>
                            <li><NavLink to={""}>Services</NavLink></li>
                            <li><NavLink to={""}>Blog</NavLink></li>
                            <li><NavLink to={""}>Contact</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <button>COLORBIL</button>
                    </div>

                </div>
                <div className='text'>
                    <h1>Modern Design</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>

                    <div className='get' style={{ width: '30%', display: 'flex', alignItems: 'center', margin: '0 auto', gap: 30 }}>
                        <a href="">get started</a>
                        <p>download</p>
                    </div>
                </div>


            </div>

            {/* <div className='cart-parent'>
                
                {
                    data
                    .filter(f => f.id < 4)
                    .map((d) => (
                        <div className='cart'>
                            <img src={d.image} alt="" />
                            <p>{d.price}azn</p>
                            <p style={{textTransform: 'capitalize'}}>{d.category}</p>
                            <p>{d.title}</p>
                        </div>
                    ))
                }
            </div> */}
        </>
    )
}

export default Header