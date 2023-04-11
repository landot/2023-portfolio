import { AllInbox } from "@mui/icons-material";
import { Drawer, Toolbar, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

interface Navbar {
  name: string;
  href: string;
  // icon: // add icons later
}

const navbar: Navbar[] = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Todo List App',
    href: '/#/todolist'
  },
  {
    name: 'Pomodoro',
    href: '/#/pomodoro'
  },
  {
    name: 'Counters',
    href: '/#/counters'
  },
]

export default function NewDrawer() {
    return (
      <Drawer
      variant="permanent"
      sx={{
        width: 400,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: "30%", boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {navbar.map((nav: Navbar) => (
            <ListItem key={nav.name} disablePadding>
              <ListItemButton href={nav.href}>
                <ListItemIcon>
                  <AllInbox/>
                </ListItemIcon>
                <ListItemText primary={nav.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
    )
  }