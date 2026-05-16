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
  TextField,
  Select,
  MenuItem,
  Pagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Divider,
  InputAdornment,
} from "@mui/material";

import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaBook,
  FaUsers,
  FaExchangeAlt,
  FaCog,
  FaFileAlt,
} from "react-icons/fa";

import { MdMenuBook } from "react-icons/md";

function Book() {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("books");

    return saved
      ? JSON.parse(saved)
      : [];
  });

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 5;

  const [form, setForm] = useState({
    name: "",
    author: "",
    category: "Kỹ năng sống",
    quantity: 0,
    status: "Còn",
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const saveBook = () => {
    if (!form.name || !form.author) {
      alert("Nhập đầy đủ thông tin!");
      return;
    }

    if (editId) {
      setBooks(
        books.map((b) =>
          b.id === editId ? { ...b, ...form } : b
        )
      );
    } else {
      setBooks([
        ...books,
        {
          id: books.length + 1,
          ...form,
        },
      ]);
    }

    closeModal();
  };

  const deleteBook = () => {
    const updatedBooks = books.filter(
      (b) => b.id !== deleteId
    );

    setBooks(updatedBooks);

    setDeleteId(null);
  };

  const editBook = (book) => {
    setEditId(book.id);
    setForm(book);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditId(null);

    setForm({
      name: "",
      author: "",
      category: "Kỹ năng sống",
      quantity: 0,
      status: "Còn",
    });
  };

  const filteredBooks = books.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(
    filteredBooks.length / booksPerPage
  );

  const startIndex = (currentPage - 1) * booksPerPage;

  const currentBooks = filteredBooks.slice(
    startIndex,
    startIndex + booksPerPage
  );

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
          background: "#f5f6fa",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Quản lý sách
        </Typography>

        <Typography sx={{ mt: 1, color: "gray" }}>
          Danh sách tất cả các đầu sách trong thư viện
        </Typography>

        {/* SEARCH + BUTTON */}
        <Box
          sx={{
            mt: 3,
            mb: 3,
            display: "flex",
            gap: 2,
          }}
        >
          <TextField
            fullWidth
            placeholder="Tìm sách..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaSearch />
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            onClick={() => setShowModal(true)}
          >
            Thêm sách
          </Button>
        </Box>

        {/* TABLE */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Mã</TableCell>
                <TableCell align="center">Tên</TableCell>
                <TableCell align="center">Tác giả</TableCell>
                <TableCell align="center">Thể loại</TableCell>
                <TableCell align="center">Trạng thái</TableCell>
                <TableCell align="center">Số lượng</TableCell>
                <TableCell align="center">Thao tác</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {currentBooks.map((b) => (
                <TableRow key={b.id}>
                  <TableCell align="center">{b.id}</TableCell>
                  <TableCell align="center">{b.name}</TableCell>
                  <TableCell align="center">{b.author}</TableCell>
                  <TableCell align="center">{b.category}</TableCell>
                  <TableCell align="center">{b.status}</TableCell>
                  <TableCell align="center">{b.quantity}</TableCell>

                  <TableCell align="center">
                    <Button onClick={() => editBook(b)}>
                      <FaEdit />
                    </Button>

                    <Button
                      color="error"
                      onClick={() => setDeleteId(b.id)}
                    >
                      <FaTrash />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* PAGINATION */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(e, page) =>
              setCurrentPage(page)
            }
            color="primary"
          />
        </Box>

        {/* ADD / EDIT MODAL */}
        <Dialog open={showModal} onClose={closeModal} fullWidth>
          <DialogTitle>
            {editId ? "Sửa sách" : "Thêm sách"}
          </DialogTitle>

          <DialogContent>
            <TextField
              fullWidth
              label="Tên sách"
              margin="normal"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />

            <TextField
              fullWidth
              label="Tác giả"
              margin="normal"
              value={form.author}
              onChange={(e) =>
                setForm({
                  ...form,
                  author: e.target.value,
                })
              }
            />

            <Select
              fullWidth
              value={form.category}
              sx={{ mt: 2 }}
              onChange={(e) =>
                setForm({
                  ...form,
                  category: e.target.value,
                })
              }
            >
              <MenuItem value="Kỹ năng sống">
                Kỹ năng sống
              </MenuItem>

              <MenuItem value="Văn học">
                Văn học
              </MenuItem>

              <MenuItem value="Khoa học">
                Khoa học
              </MenuItem>

              <MenuItem value="Kinh tế">
                Kinh tế
              </MenuItem>
            </Select>

            <TextField
              fullWidth
              type="number"
              label="Số lượng"
              margin="normal"
              value={form.quantity}
              onChange={(e) =>
                setForm({
                  ...form,
                  quantity: e.target.value,
                })
              }
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={closeModal}>
              Hủy
            </Button>

            <Button
              variant="contained"
              onClick={saveBook}
            >
              {editId ? "Cập nhật" : "Thêm"}
            </Button>
          </DialogActions>
        </Dialog>

        {/* DELETE CONFIRM */}
        <Dialog
          open={deleteId !== null}
          onClose={() => setDeleteId(null)}
        >
          <DialogTitle>
            Xác nhận xóa
          </DialogTitle>

          <DialogContent>
            Bạn có chắc muốn xóa sách này không?
          </DialogContent>

          <DialogActions>
            <Button onClick={() => setDeleteId(null)}>
              Hủy
            </Button>

            <Button
              color="error"
              variant="contained"
              onClick={deleteBook}
            >
              Xóa
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}

export default Book;