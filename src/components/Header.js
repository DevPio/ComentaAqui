import React,{useContext} from 'react'
import 
{
    Navbar,
    NavbarBrand,
    Container, 
    NavItem,
    NavLink
    
}
from 'reactstrap';
import {Link} from 'react-router-dom'
import {AuthContext} from '../auth'
export default function Header() {

    const auth = useContext(AuthContext)
    if(auth){
        return (
            <>
          
                <Navbar color='light' light expand='md'>
                   
                        <NavbarBrand to='/' tag={Link}>Comente aqui</NavbarBrand>
    
                        <NavItem style={{listStyle:'none'}}>
                            <NavLink to='/newComment' tag={Link}>
                                Novo item
                            </NavLink>
                        </NavItem>
                        <NavItem style={{listStyle:'none'}}>
                            <NavLink to='/infoUser'  tag={Link}>
                                Informacoes do Usuario
                            </NavLink>
                        </NavItem>
                   
                </Navbar>
            </>
        )
    }else{
        return (
            <>
          
                <Navbar color='light' light expand='md'>
                    <Container>
                        <NavbarBrand to='/' tag={Link}>Comente aqui</NavbarBrand>
    
                       
                    </Container>
                </Navbar>
            </>
        )
    }
    
}
