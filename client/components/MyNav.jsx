import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { Navbar, Nav, Dropdown } from 'rsuite'

function MyNav () {


    return(
        <>
        <Navbar>
           <Link to='/sign up'>Sign Up</Link>
           <Link to ='/login'>Login</Link>
         </Navbar>
           </>
    )
}

export default MyNav

