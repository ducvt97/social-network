import { AppBar, styled, Toolbar, Typography, IconButton, InputBase, alpha, Box, Badge, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react';

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(0, 2)
    }
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    minWidth: '200px',
    maxWidth: '500px',
    flexGrow: 1,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(0, 2)
    },
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
}));

const Icons = styled(Box)(({ theme }) => {
    console.log(theme.breakpoints.up('sm'));
    return {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    [theme.breakpoints.up('sm')]: {
        gap: theme.spacing(1),
    },}
});

const Navbar = () => {
    return (
        <AppBar flex={1} position="fixed">
            <CustomToolbar>
                <Box display="flex" alignItems="center" flexGrow={1}>
                    <Typography variant="h6" sx={{ display: {xs: "none", sm: "block"} }}>Social Network</Typography>
                    <IconButton color="inherit" size="large" aria-label="menu" sx={{ mr: 1, display: {sm: "none"} }}>
                        <MenuIcon />
                    </IconButton>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
                    </Search>
                </Box>
                <Icons>
                    <IconButton size="large" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <ChatIcon />
                        </Badge>
                    </IconButton>
                    <IconButton size="large" color="inherit">
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton aria-controls="" aria-haspopup="true" color="inherit" disableRipple>
                        <Avatar>Đ</Avatar>
                    </IconButton>
                </Icons>
            </CustomToolbar>
        </AppBar>
    );
}

export default Navbar;