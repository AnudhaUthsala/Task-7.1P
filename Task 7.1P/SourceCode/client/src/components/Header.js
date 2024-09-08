import React from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => (
  <Menu secondary style={{
    margin: '0',
    padding: '0 50px',
    position: 'sticky',
    top: '0',
    zIndex: '1000',
    backgroundColor: 'white',
    borderBottom: '1px solid #ccc'
  }}>
    <Menu.Item header>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3>DEV@Deakin</h3>
      </Link>
    </Menu.Item>
    <Menu.Menu position='right'>
      <Input style={{ margin: '10px 10px' }} transparent icon='search' placeholder='Search...' />
      <Link to="/post">
        <Button style={{ margin: '10px 10px' }} primary>Post</Button>
      </Link>
      <Link to="/login">
        <Button style={{ margin: '10px 10px' }}>Login</Button>
      </Link>
    </Menu.Menu>
  </Menu>
);

export default Header;
