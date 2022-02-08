import React, { Component, useEffect } from 'react';
import './navbar.css';
import netflix from './netflix.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChevronDown, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';


export default ({ black }) => {
    return <div className={black ? 'Navbar1' : 'Navbar'} >
        <ul className='Navbar--ul'>
            <li style={{ background: `url(${netflix})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></li>
            <li className='li--Explore'><a href='#'>Explore</a><FontAwesomeIcon icon={faChevronDown} /></li>
            <li className='li--ul1' ><a href='#'>Home</a></li>
            <li className='li--ul1'><a>Series</a></li>
            <li className='li--ul1'><a>Films</a></li>
            <li className='li--ul1'><a>Latest</a></li>
            <li className='li--ul1'><a>My List</a></li>
        </ul>
        <ul className='Navbar--ul2'>
            <li className='icons' style={{ fontSize: '22px', cursor: 'pointer' }}><FontAwesomeIcon icon={faBell} /></li>
            <li className='icons' style={{ fontSize: '22px', fontWeight: '100', cursor: 'pointer' }}><FontAwesomeIcon icon={faSearch} /></li>
            <li className='icons' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '80px', cursor: 'pointer' }}>
                <img src='https://i.pinimg.com/474x/5d/0f/9c/5d0f9ca26f942f0eda69ffd4dc1710dc.jpg' style={
                    {
                        width: '50px',
                        height: '50px',
                        cursor: 'pointer',
                        borderRadius: '5px'
                    }} />
                <FontAwesomeIcon icon={faChevronDown} />
            </li>

        </ul>
    </div>;
}
