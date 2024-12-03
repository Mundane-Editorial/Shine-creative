// import React, { useState } from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';  // Import Close icon
// import { AppBar, Toolbar, IconButton, Typography, Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import PaletteIcon from '@mui/icons-material/Palette';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);  // State to handle drawer visibility

//   // Function to toggle the drawer
//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

//   return (
//     <>
//       <AppBar position="relative" color="transparent" elevation={0}>
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           {/* Logo and Title */}
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <IconButton size="large" edge="start" color="inherit" aria-label="logo">
//               <PaletteIcon />
//             </IconButton>
//             <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>
//               Shine Creative
//             </Typography>
//           </Box>

//           {/* Desktop Navigation */}
//           <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
//             <Button color="inherit">Home</Button>
//             <Button color="inherit">About Us</Button>
//             <Button color="inherit">Services</Button>
//             <Button color="inherit">Products</Button>
//             <Button color="inherit">Contact Us</Button>
//           </Box>

//           {/* Mobile Menu Icon with Circular Button */}
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               color="inherit"
//               edge="end"
//               // sx={{
//               //   marginLeft: 'auto',
//               //   borderRadius: '50%',        // Circular shape
//               //   backgroundColor: 'rgba(0, 0, 0, 0.1)',  // Light background color
//               //   padding: '8px',              // Spacing around the icon
//               //   '&:hover': {
//               //     backgroundColor: 'rgba(0, 0, 0, 0.2)', // Darker hover effect
//               //   },
//               //   transition: 'background-color 0.3s', // Smooth background color transition
//               // }}
//               onClick={toggleDrawer}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Drawer (Hamburger Menu) with Circular Opening Animation */}
//       <Drawer
//         anchor="right"
//         open={open}
//         onClose={toggleDrawer}
//         sx={{
//           '& .MuiDrawer-paper': {
//             transition: 'transform 2.0s ease',  // Add smooth transition for the opening effect
//             transform: open ? 'scale(1)' : 'scale(0)', // Start from small scale, and expand
//             transformOrigin: 'top right',  // Open from top-right corner
//           },
//         }}
//       >
//         <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
//           {/* Close Button and Horizontal Line Container */}
//           <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', p: 1 }}>
//             {/* Close Button */}
//             {/* <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
//               <CloseIcon />
//             </IconButton> */}

//             {/* Horizontal Line Below the Close Button */}
//             {/* <Box sx={{
//               borderBottom: '1px solid #ddd',
//               width: 'calc(100% - 25px)', // Adjust width to leave space on both sides
//               marginLeft: '20px', // Left space
//               marginRight: '20px', // Right space
//               marginBottom: 0,
//             }} /> */}
//           </Box>

//           {/* Menu Items */}
//           <List sx={{ padding: 0 }}>  {/* Set padding to 0 to remove the space around the list */}
//             <ListItem button sx={{ paddingY: 0.5 }}>  {/* Reduce vertical padding */}
//               <ListItemText primary="Home" />
//             </ListItem>
//             <ListItem button sx={{ paddingY: 0.5 }}>
//               <ListItemText primary="About Us" />
//             </ListItem>
//             <ListItem button sx={{ paddingY: 0.5 }}>
//               <ListItemText primary="Services" />
//             </ListItem>
//             <ListItem button sx={{ paddingY: 0.5 }}>
//               <ListItemText primary="Products" />
//             </ListItem>
//             <ListItem button sx={{ paddingY: 0.5 }}>
//               <ListItemText primary="Contact Us" />
//             </ListItem>
//           </List>

//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;






import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';  // Import Close icon
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';

const Navbar = () => {
  const [open, setOpen] = useState(false);  // State to handle drawer visibility

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position="relative" color="transparent" elevation={0}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo">
              <PaletteIcon />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>
              Shine Creative
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">Contact Us</Button>
          </Box>

          {/* Mobile Menu Icon with Circular Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              color="inherit"
              edge="end"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer (Hamburger Menu) with Circular Opening Animation */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            transition: 'transform 2.0s ease',  // Add smooth transition for the opening effect
            transform: open ? 'scale(1)' : 'scale(0)', // Start from small scale, and expand
            transformOrigin: 'top right',  // Open from top-right corner
          },
        }}
      >
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
  {/* Close Button and Horizontal Line Container */}
  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', p: 1 , mr:2 }}>

    {/* Menu Items (on the second row) */}
    <List sx={{ padding: 0, marginTop: 0 }}>
      <ListItem button sx={{ paddingY: 0.5 }}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button sx={{ paddingY: 0.5 }}>
        <ListItemText primary="About Us" />
      </ListItem>
      <ListItem button sx={{ paddingY: 0.5 }}>
        <ListItemText primary="Services" />
      </ListItem>
      <ListItem button sx={{ paddingY: 0.5 }}>
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem button sx={{ paddingY: 0.5 }}>
        <ListItemText primary="Contact Us" />
      </ListItem>
    </List>
    
    {/* Close Button (on the first row) */}
    <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
      <CloseIcon />
    </IconButton>
  </Box>
</Box>

      </Drawer>
    </>
  );
};

export default Navbar;
