import React from 'react'
import { Container, Link } from './navStyle'


const Navbar = () => {
    return (
        <Container>
            <Link to="/home">
                home
            </Link>
            <Link to="/about">
                about me
            </Link>
        </Container >
    )
}

export default Navbar