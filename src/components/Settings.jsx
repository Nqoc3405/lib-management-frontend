import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";

import {
  FaBook,
  FaUsers,
  FaExchangeAlt,
  FaCog,
  FaSave,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { MdMenuBook } from "react-icons/md";

function Setting() {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem(
      "libzone_settings"
    );

    return saved
      ? JSON.parse(saved)
      : {
          libraryName:
            "LibZone Central Library",
          code: "LIB-Z001",
          description:
            "Thư viện trung tâm thành phố với hơn 50.000 đầu sách",
          email: "support@libzone.com",
          phone: "1900 1500",
          address:
            "123 Đường Sách, Quận Trung Tâm",
        };
  });

  useEffect(() => {
    localStorage.setItem(
      "libzone_settings",
      JSON.stringify(settings)
    );
  }, [settings]);

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
             width: 280,
             flexShrink: 0,
             "& .MuiDrawer-paper": {
               width: 280,
               bgcolor: "#171654",
               color: "white",
               p: 2,
               boxSizing: "border-box",
             },
           }}
         >
           <Box>
             {/* LOGO */}
             <Box
               sx={{
                 display: "flex",
                 alignItems: "center",
                 gap: 1.5,
                 mb: 4,
               }}
             >
               <MdMenuBook
                 size={46}
                 color="#facc15"
               />
   
               <Typography
                 sx={{
                   fontSize: 40,
                   fontWeight: "bold",
                 }}
               >
                 LibZone
               </Typography>
             </Box>
   
             {/* MENU */}
             <List>
               <ListItem disablePadding>
                 <ListItemButton
                   component={Link}
                   to="/home"
                   sx={{
                     borderRadius: 2,
                     mb: 1,
                   }}
                 >
                   <ListItemIcon
                     sx={{
                       color: "white",
                       minWidth: 40,
                     }}
                   >
                     <FaBook />
                   </ListItemIcon>
   
                   <ListItemText
                     primary="Tổng quan"
                     primaryTypographyProps={{
                       fontWeight: "bold",
                     }}
                   />
                 </ListItemButton>
               </ListItem>
   
               <ListItem disablePadding>
                 <ListItemButton
                   component={Link}
                   to="/book"
                   sx={{
                     borderRadius: 2,
                     mb: 1,
                   }}
                 >
                   <ListItemIcon
                     sx={{
                       color: "white",
                       minWidth: 40,
                     }}
                   >
                     <FaBook />
                   </ListItemIcon>
   
                   <ListItemText
                     primary="Quản lý sách"
                     primaryTypographyProps={{
                       fontWeight: "bold",
                     }}
                   />
                 </ListItemButton>
               </ListItem>
   
               <ListItem disablePadding>
                 <ListItemButton
                   component={Link}
                   to="/reader"
                   sx={{
                     borderRadius: 2,
                     mb: 1,
                   }}
                 >
                   <ListItemIcon
                     sx={{
                       color: "white",
                       minWidth: 40,
                     }}
                   >
                     <FaUsers />
                   </ListItemIcon>
   
                   <ListItemText
                     primary="Quản lý độc giả"
                     primaryTypographyProps={{
                       fontWeight: "bold",
                     }}
                   />
                 </ListItemButton>
               </ListItem>
   
               <ListItem disablePadding>
                 <ListItemButton
                   component={Link}
                   to="/borrow"
                 >
                   <ListItemIcon
                     sx={{
                       color: "white",
                       minWidth: 40,
                     }}
                   >
                     <FaExchangeAlt />
                   </ListItemIcon>
   
                   <ListItemText
                     primary="Mượn / Trả sách"
                     primaryTypographyProps={{
                       fontWeight: "bold",
                     }}
                   />
                 </ListItemButton>
               </ListItem>
             </List>
           </Box>
   
           {/* BOTTOM */}
           <Box sx={{ mt: "auto" }}>
             <Divider
               sx={{
                 bgcolor:
                   "rgba(255,255,255,0.2)",
                 mb: 2,
               }}
             />
   
             <List>
               <ListItem disablePadding>
                 <ListItemButton component={Link} to="/settings">
                   <ListItemIcon
                     sx={{
                       color: "white",
                       minWidth: 40,
                     }}
                   >
                     <FaCog />
                   </ListItemIcon>
   
                   <ListItemText
                     primary="Cài đặt"
                     primaryTypographyProps={{
                       fontWeight: "bold",
                     }}
                   />
                 </ListItemButton>
               </ListItem>
             </List>
           </Box>
         </Drawer>

      {/* MAIN */}
      <Box
        sx={{
          flexGrow: 1,
          p: 4,
        }}
      >
        {/* HEADER */}
        <Box mb={5}>
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={1}
          >
            Cài đặt hệ thống
          </Typography>

          <Typography
            sx={{
              color: "#6b7280",
              fontSize: 18,
            }}
          >
            Quản lý thông tin và cấu hình
            thư viện
          </Typography>
        </Box>

        {/* CONTENT */}
        <Grid container spacing={4}>
          {/* LEFT CARD */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: "24px",
                boxShadow:
                  "0 9px 12px rgba(0, 0, 0, 0.08)",
                border: "1px solid #131313",
              }}
            >
              <CardContent sx={{ p: 4 }}>
                {/* CARD HEADER */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 52,
                      borderRadius: "16px",
                      bgcolor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        "center",
                    }}
                  >
                    <FaBook
                      color="#4f46e5"
                      size={22}
                    />
                  </Box>

                  <Box>
                    <Typography
                      fontWeight="bold"
                      fontSize={28}
                    >
                      Hồ sơ thư viện
                    </Typography>

                    <Typography
                      sx={{
                        color: "#000000",
                      }}
                    >
                      Thông tin cơ bản hiển
                      thị với độc giả
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ mb: 4 }} />

                {/* FORM */}
                <Box mb={3}>
                  <Typography
                    fontWeight="bold"
                    mb={1}
                  >
                    Tên thư viện
                  </Typography>

                  <TextField
                    fullWidth
                    variant="filled"
                    value={
                      settings.libraryName
                    }
                    InputProps={{
                      disableUnderline: true,
                    }}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        libraryName:
                          e.target.value,
                      })
                    }
                    sx={{
                      "& .MuiFilledInput-root":
                        {
                          bgcolor:
                            "#ffffff",
                          borderRadius:
                            "14px",
                          paddingTop: "0px",
                        },
                        ":& .MuiFilledInput-input": {
                          paddingTop: "16px",
                        },
                    }}
                  />
                </Box>

                <Box mb={3}>
                  <Typography
                    fontWeight="bold"
                    mb={1}
                  >
                    Mã đơn vị
                  </Typography>

                  <TextField
                    fullWidth
                    variant="filled"
                    value={settings.code}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        code:
                          e.target.value,
                      })
                    }
                    sx={{
                      "& .MuiFilledInput-root":
                        {
                          bgcolor:
                            "#ffffff",
                          borderRadius:
                            "14px",
                          paddingTop: "0px",
                        },
                        ":& .MuiFilledInput-input": {
                          paddingTop: "16px",
                        },
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    fontWeight="bold"
                    mb={1}
                  >
                    Mô tả ngắn
                  </Typography>

                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    variant="filled"
                    value={
                      settings.description
                    }
                    InputProps={{
                      disableUnderline: true,
                    }}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        description:
                          e.target.value,
                      })
                    }
                    sx={{
                      "& .MuiFilledInput-root":
                        {
                          bgcolor:
                            "#ffffff",
                          borderRadius:
                            "14px",
                          paddingTop: "0px",
                        },
                        ":& .MuiFilledInput-input": {
                          paddingTop: "16px",
                        },
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* RIGHT CARD */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                borderRadius: "24px",
                boxShadow:
                  "0 9px 12px rgba(0, 0, 0, 0.08)",
                border: "1px solid #000000",
              }}
            >
              <CardContent sx={{ p: 4 }}>
                {/* CARD HEADER */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 6,
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 32,
                      borderRadius: "16px",
                      bgcolor: "#dcfce7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        "center",
                    }}
                  >
                    <FaEnvelope
                      color="#16a34a"
                      size={20}
                    />
                  </Box>

                  <Box>
                    <Typography
                      fontWeight="bold"
                      fontSize={28}
                    >
                      Thông tin liên hệ
                    </Typography>

                    <Typography
                      sx={{
                        color: "#6b7280",
                      }}
                    >
                      Sử dụng trong email và
                      thông báo
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ mb: 4 }} />

                {/* EMAIL */}
                <Box mb={3}>
                  <Typography
                    fontWeight="bold"
                    mb={1}
                  >
                    Email hỗ trợ
                  </Typography>

                  <TextField
                    fullWidth
                    variant="filled"
                    value={settings.email}
                    InputProps={{
                      disableUnderline: true,

                      startAdornment: (
                        <InputAdornment position="start">
                          <FaEnvelope color="gray" />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        email:
                          e.target.value,
                      })
                    }
                    sx={{
                      "& .MuiFilledInput-root":
                        {
                          bgcolor:
                            "#ffffff",
                          borderRadius:
                            "14px",
                          paddingTop: "0px",
                        },
                        ":& .MuiFilledInput-input": {
                          paddingTop: "16px",
                        },
                    }}
                  />
                </Box>

                {/* PHONE */}
                <Box mb={3}>
                  <Typography
                    fontWeight="bold"
                    mb={1}
                  >
                    Số điện thoại
                  </Typography>

                  <TextField
                    fullWidth
                    variant="filled"
                    value={settings.phone}
                    InputProps={{
                      disableUnderline: true,

                      startAdornment: (
                        <InputAdornment position="start">
                          <FaPhone color="gray" />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        phone:
                          e.target.value,
                      })
                    }
                    sx={{
                      "& .MuiFilledInput-root":
                        {
                          bgcolor:
                            "#ffffff",
                          borderRadius:
                            "14px",
                          paddingTop: "0px",
                        },
                        ":& .MuiFilledInput-input": {
                          paddingTop: "16px",
                        },
                    }}
                  />
                </Box>

                {/* ADDRESS */}
                <Box>
                  <Typography
                    fontWeight="bold"
                    mb={1}
                  >
                    Địa chỉ
                  </Typography>

                  <TextField
                    fullWidth
                    variant="filled"
                    value={
                      settings.address
                    }
                    InputProps={{
                      disableUnderline: true,

                      startAdornment: (
                        <InputAdornment position="start">
                          <FaMapMarkerAlt color="gray" />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        address:
                          e.target.value,
                      })
                    }
                    sx={{
                      "& .MuiFilledInput-root":
                        {
                          bgcolor:
                            "#ffffff",
                          borderRadius:
                            "14px",
                          paddingTop: "0px",
                        },
                        ":& .MuiFilledInput-input": {
                          paddingTop: "16px",
                        },
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* FLOAT SAVE */}
        <Box
          sx={{
            position: "fixed",
            bottom: 30,
            right: 30,
            bgcolor: "white",
            p: 2,
            borderRadius: "22px",
            display: "flex",
            alignItems: "center",
            gap: 2,
            boxShadow:
              "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >

          <Button
            variant="contained"
            startIcon={<FaSave />}
            sx={{
              borderRadius: "14px",
              textTransform: "none",
              px: 3,
            }}
          >
            Lưu cài đặt
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Setting;