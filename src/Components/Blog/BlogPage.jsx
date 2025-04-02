import React, { useState } from "react";
import { Box, Button, TextField, Typography, Card, CardMedia, CardContent, CardActions } from "@mui/material";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleAddBlog = () => {
    if (title && content.length <= 2000) {
      setBlogs([...blogs, { id: Date.now(), title, content, image }]);
      setTitle("");
      setContent("");
      setImage(null);
    }
  };

  const handleDeleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4, p: 2 }}>
      <Typography variant="h4" gutterBottom>Write Your Blog</Typography>
      <TextField fullWidth label="Title" value={title} onChange={(e) => setTitle(e.target.value)} margin="normal" />
      <TextField
        fullWidth
        multiline
        rows={6}
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        margin="normal"
        inputProps={{ maxLength: 2000 }}
      />
      <input type="file" accept="image/*" onChange={handleImageChange} style={{ margin: "10px 0" }} />
      <Button variant="contained" color="primary" onClick={handleAddBlog} sx={{ mt: 2 }}>Add Blog</Button>
      <Box sx={{ mt: 4 }}>
        {blogs.map((blog) => (
          <Card key={blog.id} sx={{ mb: 2 }}>
            {blog.image && <CardMedia component="img" height="200" image={blog.image} alt={blog.title} />}
            <CardContent>
              <Typography variant="h6">{blog.title}</Typography>
              <Typography variant="body2">{blog.content}</Typography>
            </CardContent>
            <CardActions>
              <Button color="error" onClick={() => handleDeleteBlog(blog.id)}>Delete</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default BlogPage;
