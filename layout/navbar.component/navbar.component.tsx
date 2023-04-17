import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";
import { useRouter } from 'next/router';

export type NavBarProps ={
    className:string
}




const NavbarComponent = ({className}:NavBarProps) => {

  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };




  return (
    <>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" className={className} elevation={0}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{router.push('/health')}}>VitalZEO Salud</MenuItem>
        <MenuItem onClick={()=>{router.push('/animals')}}>VitalZEO Animales</MenuItem>
        <MenuItem onClick={()=>{router.push('/agro')}}>VitalZEO Agricultura</MenuItem>
      </Menu>
        
      
    </>
  );
};

export default NavbarComponent;
