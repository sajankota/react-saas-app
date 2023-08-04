import { Container, Nav, Navbar } from 'react-bootstrap';
import classNames from 'classnames';

// component
import Menu from './Menu';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';

// dummy data
import { notifications, profileOptions } from './data';

// images
import logo from 'assets/images/logo.png';
import logoLight from 'assets/images/logo-light.png';

type Navbar4Props = {
    isSticky?: boolean;
    navClass?: string;
    fixedWidth?: boolean;
};

const Navbar4 = ({ isSticky, navClass, fixedWidth }: Navbar4Props) => {
    return (
        <header>
            <Navbar
                id={isSticky ? 'sticky' : ''}
                collapseOnSelect
                expand="lg"
                className={classNames('topnav-menu', navClass)}
            >
                <Container fluid={!fixedWidth}>
                    <Navbar.Brand href="/" className="logo">
                        <img src={logo} height="30" className="align-top logo-dark" alt="" />
                        <img src={logoLight} height="30" className="align-top logo-light" alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle className="me-3" aria-controls="topnav-menu-content4" />

                    <Navbar.Collapse id="topnav-menu-content4">
                        <Menu />
                        <Nav as="ul" className="align-items-lg-center">
                            <NotificationDropdown notifications={notifications} />
                            <ProfileDropdown profileOptions={profileOptions} />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navbar4;
