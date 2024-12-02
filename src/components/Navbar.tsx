"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: "#1A1A1A" }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        {/* Logo and Title */}
        <Link href="/" passHref>
          <Typography
            variant="h6"
            component="div" // Makes it a div element with typography styles
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              color: "white", // Optional: Ensures the text color is white
            }}
          >
            <Image
              src="/images/gojek-logo.png" // Path relative to 'public' folder
              alt="Gojek Logo"
              width={40}
              height={40}
              style={{ marginRight: '10px' }} // Adds space between the logo and text
            />
            Gojek Bootleg
          </Typography>
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link href="/home" passHref>
            <Typography variant="body1" style={{ color: "#FFFFFF", cursor: "pointer" }}>
              Home
            </Typography>
          </Link>
          <Link href="/partner with us" passHref>
            <Typography variant="body1" style={{ color: "#FFFFFF", cursor: "pointer" }}>
              Partner with us
            </Typography>
          </Link>
          <Link href="/gocorp" passHref>
            <Typography variant="body1" style={{ color: "#FFFFFF", cursor: "pointer" }}>
              GoCorp
            </Typography>
          </Link>
          <Link href="/careers" passHref>
            <Typography variant="body1" style={{ color: "#FFFFFF", cursor: "pointer" }}>
              Careers
            </Typography>
          </Link>
          <Link href="/company" passHref>
            <Typography variant="body1" style={{ color: "#FFFFFF", cursor: "pointer" }}>
              Company
            </Typography>
          </Link>
          <Link href="/products" passHref>
            <Typography variant="body1" style={{ color: "#FFFFFF", cursor: "pointer" }}>
              Products
            </Typography>
          </Link>
          <Link href="/blog" passHref>
            <Typography variant="body1" style={{ color: "#FFFFFF", cursor: "pointer" }}>
              Blog
            </Typography>
          </Link>
          <Link href="/help" passHref>
            <Typography variant="body1" style={{ color: "#FFFFFF", cursor: "pointer" }}>
              Help
            </Typography>
          </Link>
          <Link href="/language" passHref>
            <Typography variant="body1" style={{ color: "#FFFFFF", cursor: "pointer" }}>
              Language
            </Typography>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div style={{ display: "none", color: "#FFFFFF" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Partner with us</MenuItem>
            <MenuItem onClick={handleMenuClose}>GoCorp</MenuItem>
            <MenuItem onClick={handleMenuClose}>Careers</MenuItem>
            <MenuItem onClick={handleMenuClose}>Company</MenuItem>
            <MenuItem onClick={handleMenuClose}>Products</MenuItem>
            <MenuItem onClick={handleMenuClose}>Blog</MenuItem>
            <MenuItem onClick={handleMenuClose}>Help</MenuItem>
            <MenuItem onClick={handleMenuClose}>Language</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
