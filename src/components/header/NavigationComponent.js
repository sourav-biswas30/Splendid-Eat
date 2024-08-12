import {Navbar,NavbarBrand,Collapse,NavbarToggler,NavItem,Nav} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useState} from 'react';
const NavigationComponent = () => {
  const [isNavOpen,setIsNavOpen]=useState(false); //step #17
  const navToggle= () =>{
    setIsNavOpen(!isNavOpen); //step 18........... then follow BodyComponent Home, About , Contact
  }
  return (
    <div>
        <Navbar
        className="my-2"
        color="dark"
        dark
        expand='sm'>

      <NavbarToggler onClick={navToggle} />
            <NavbarBrand href="/">
            <img
                alt="logo"
                src="assets/images/splendid.png"
                style={{
                height: 50,
                width: 50
                }}
            />

            <b>SPLENDID EAT</b>
            </NavbarBrand>
            
        <Collapse isOpen={isNavOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" className='nav-link'>Home</Link>
            </NavItem>

            <NavItem>
              <Link to="/menu" className='nav-link'>Menu</Link>
            </NavItem>

            <NavItem>
              <Link to="/about" className='nav-link'>About</Link>
            </NavItem>

            <NavItem>
              <Link to="/contact" className='nav-link'>Contact</Link>
            </NavItem>
            
          </Nav>
          
        </Collapse>

        </Navbar>
        
    </div>
  )
}

export default NavigationComponent