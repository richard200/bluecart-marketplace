import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import SearchBar from './SearchBar';
import UserMenu from './UserMenu';

function Navbar() {
const handleClick = () => {
console.log('Menu icon clicked');
};

return (
<AppBar position="static" color="primary">
<Toolbar>
<IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
<MenuIcon />
</IconButton>
<Typography variant="h6" style={{ flexGrow: 1 }}>
BlueCart
</Typography>
<div>
{/* <SearchBar /> */}
<UserMenu />
</div>
</Toolbar>
</AppBar>
);
}

export default Navbar;