import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

// I am using bootstrap navbar
const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <div className='header'>
                    <span>Data Visualization Dashboard</span>
                </div>
            </Navbar>
        </>
    )
}

export default Header