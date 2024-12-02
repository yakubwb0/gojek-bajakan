"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuLinks = [
    { label: "Home", href: "/home" },
    { label: "Partner with us", href: "/partner-with-us" },
    { label: "GoCorp", href: "/gocorp" },
    { label: "Careers", href: "/careers" },
    { label: "Company", href: "/company" },
    { label: "Products", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "Help", href: "/help" },
    { label: "Language", href: "/language" },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1A1A1A" }}>
      <Container
        sx={{
          maxWidth: "lg",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo and Title */}
          <Link href="/" passHref>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <Image
                src="/images/gojek-logo.png"
                alt="Gojek Logo"
                width={40}
                height={40}
                style={{ marginRight: "10px" }}
              />
              <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
                Gojek Bootleg
              </Typography>
            </Box>
          </Link>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                gap: "40px",
                justifyContent: "flex-end", // Align to the right
                flexGrow: 1, // Push items to the right
              }}
            >
              {menuLinks.map((link) => (
                <Link key={link.label} href={link.href} passHref>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="open menu"
                onClick={handleMenuOpen}
                sx={{ marginLeft: "auto" }} // Align menu icon to the right
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{
                  "& .MuiMenu-paper": {
                    textAlign: "right", // Align menu items to the right
                  },
                }}
              >
                {menuLinks.map((link) => (
                  <MenuItem key={link.label} onClick={handleMenuClose}>
                    <Link href={link.href} passHref>
                      <Typography
                        sx={{
                          color: "#000000",
                          textDecoration: "none",
                          textAlign: "right", // Align text within the menu item
                          width: "100%",
                        }}
                      >
                        {link.label}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
