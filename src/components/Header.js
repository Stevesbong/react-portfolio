import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='navigation'>
            <div className='navigation-sub'>
                <Link to='/' className='item'>Projects</Link>
                <Link to='/about' className='item'>About</Link>
                <Link to='/contact' className='item'>Contact</Link>
            </div>
            
        </div>
    )
}

export default Header
