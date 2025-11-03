import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <ListItem sx={{ width: "100%", mt: 2 }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
        <TextField
          fullWidth
          id="fullWidth"
          label="Add Todo"
          variant="outlined"
          onChange={handleChange}
          value={text}
          size="small"
          slotProps={{
            //   endAdornment: (
            //     <InputAdornment position="end">
            //       <IconButton aria-label="hide the password" edge="end">
            //         <Create />
            //       </IconButton>
            //     </InputAdornment>
            //   ),
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="create-todo"
                    edge="end"
                    type="submit"
                    size="small"
                  >
                    <Create />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
    </ListItem>
  );
}
