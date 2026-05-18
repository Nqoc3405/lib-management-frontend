import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import {
    Box,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField,
    Card,
    CardContent,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    IconButton,
    Badge,
    Popover,
    Divider,
} from "@mui/material";

import {
    FaBell,
    FaReact,
    FaBook,
    FaUsers,
    FaExchangeAlt,
    FaCog,
} from "react-icons/fa";

import { MdMenuBook } from "react-icons/md";

function Interface() {
    const [anchorEl, setAnchorEl] = useState(null);

    const books = [
        {
            id: "PM0452",
            reader: "Trần Thị B",
            book: "Đắc Nhân Tâm",
            date: "24/05/2024",
            status: "Đang mượn",
        },
    ];

    const handleNotifyClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);

    return (
         <Box
              sx={{
                display: "flex",
                minHeight: "100vh",
                bgcolor: "#f5f5f5",
              }}
            >
              {/* SIDEBAR */}
              <Drawer
                variant="permanent"
                sx={{
                  width: 300,
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    width: 300,
                    boxSizing: "border-box",
                    bgcolor: "#171654",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                  },
                }}
              >
                <Box>
                  {/* LOGO */}
                  <Box
                    sx={{
                      display: "flex",
                      marginTop: 3,
                      marginLeft: "20%",
                      alignItems: "center",
                      gap: 2,
                      mb: 4,
                    }}
                  >
                    <MdMenuBook size={40} color="#facc15" />
        
                    <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
                      LibZone
                    </Typography>
                  </Box>
        
                  {/* MENU */}
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton component={Link} to="/home">
                        <ListItemIcon sx={{ color: "white" }}>
                          <FaBook />
                        </ListItemIcon>
        
                        <ListItemText primary="TỔNG QUAN" 
                        primaryTypographyProps={{ fontWeight: "bold" }}
                        />
                      </ListItemButton>
                    </ListItem>
        
                    <ListItem disablePadding>
                      <ListItemButton component={Link} to="/book">
                        <ListItemIcon sx={{ color: "white" }}>
                          <FaBook />
                        </ListItemIcon>
        
                        <ListItemText primary="QUẢN LÝ SÁCH" 
                        primaryTypographyProps={{ fontWeight: "bold" }}
                        />
                      </ListItemButton>
                    </ListItem>
        
                    <ListItem disablePadding>
                      <ListItemButton component={Link} to="/reader">
                        <ListItemIcon sx={{ color: "white" }}>
                          <FaUsers />
                        </ListItemIcon>
        
                        <ListItemText primary="QUẢN LÝ ĐỘC GIẢ" 
                        primaryTypographyProps={{ fontWeight: "bold" }}
                        />
                      </ListItemButton>
                    </ListItem>
        
                    <ListItem disablePadding>
                      <ListItemButton component={Link} to="/borrow">
                        <ListItemIcon sx={{ color: "white" }}>
                          <FaExchangeAlt />
                        </ListItemIcon>
        
                        <ListItemText primary="MƯỢN / TRẢ SÁCH" 
                        primaryTypographyProps={{ fontWeight: "bold" }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
        
                {/* BOTTOM */}
                <Box>
                  <Divider
                    sx={{
                      bgcolor: "rgba(255,255,255,0.2)",
                      mb: 2,
                    }}
                  />
        
                  <List>
        
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ color: "white" }}>
                          <FaCog />
                        </ListItemIcon>
        
                        <ListItemText primary="CÀI ĐẶT" 
                        primaryTypographyProps={{ fontWeight: "bold" }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>

            {/* MAIN */}
            <Box sx={{ flex: 1, p: 4 }}>
                {/* HEADER */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 4,
                    }}
                >
                    <Typography variant="h3" fontWeight="bold">
                        Bảng điều khiển
                    </Typography>

                    <TextField
                        placeholder="Tìm nhanh ..."
                        variant="outlined"
                        size="small"
                        sx={{
                            width: 300,
                            bgcolor: "white",
                            borderRadius: 2,
                        }}
                    />

                    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                        {/* NOTIFICATION */}
                        <Box>
                            <IconButton onClick={handleNotifyClick}>
                                <Badge badgeContent={3} color="error">
                                    <FaBell />
                                </Badge>
                            </IconButton>

                            <Popover
                                open={open}
                                anchorEl={anchorEl}
                                onClose={() => setAnchorEl(null)}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "right",
                                }}
                            >
                                <Box sx={{ p: 2, width: 250 }}>
                                    <Typography variant="h6" mb={2}>
                                        Thông báo
                                    </Typography>

                                    <Typography mb={1}>
                                        Nguyễn Văn A vừa mượn sách
                                    </Typography>

                                    <Typography mb={1}>
                                        Có 2 sách sắp hết hạn
                                    </Typography>

                                    <Typography>
                                        Thêm thành công sách mới
                                    </Typography>
                                </Box>
                            </Popover>
                        </Box>

                        {/* ADMIN */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            <FaReact size={40} color="#61dafb" />

                            <Typography fontSize={20} fontWeight={500}>
                                Admin
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* BANNER */}
                <Box
                    sx={{
                        background: "linear-gradient(135deg, #4f46e5, #a855f7)",
                        color: "white",
                        p: 5,
                        borderRadius: 5,
                        mb: 4,
                    }}
                >
                    <Typography variant="h3" fontWeight="bold" mb={2}>
                        Chào mừng đến với LibZone
                    </Typography>

                    <Typography variant="h6" mb={3}>
                        Hệ thống quản lý thư viện hiện đại, giúp bạn dễ dàng theo dõi
                        sách và độc giả.
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Button href="book" variant="contained" color="warning">
                            Thêm sách mới
                        </Button>

                        <Button variant="contained" color="secondary">
                            Tra cứu độc giả
                        </Button>
                    </Box>
                </Box>

                {/* CARDS */}
                <Grid container spacing={3} mb={4}>
                    {[
                        ["Tổng số sách", "12,500"],
                        ["Độc giả tích cực", "3,120"],
                        ["Đang mượn", "452"],
                        ["Sách quá hạn", "19"],
                    ].map((item, index) => (
                        <Grid item xs={12} md={3} key={index}>
                            <Card sx={{ borderRadius: 4 }}>
                                <CardContent>
                                    <Typography color="text.secondary" mb={2}>
                                        {item[0]}
                                    </Typography>

                                    <Typography variant="h4" fontWeight="bold">
                                        {item[1]}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* TABLE */}
                <Card sx={{ borderRadius: 4 }}>
                    <CardContent>
                        <Typography variant="h5" fontWeight="bold" mb={3}>
                            Phiếu mượn mới nhất
                        </Typography>

                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Mã phiếu</TableCell>
                                        <TableCell>Độc giả</TableCell>
                                        <TableCell>Sách</TableCell>
                                        <TableCell>Ngày mượn</TableCell>
                                        <TableCell>Trạng thái</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {books.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{item.id}</TableCell>
                                            <TableCell>{item.reader}</TableCell>
                                            <TableCell>{item.book}</TableCell>
                                            <TableCell>{item.date}</TableCell>
                                            <TableCell>{item.status}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>

                <Outlet />
            </Box>
        </Box>
    );
}

export default Interface;
