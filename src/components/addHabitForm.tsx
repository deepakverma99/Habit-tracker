import { Box, TextField,FormControl,InputLabel,Select,MenuItem, Button } from "@mui/material";
import React, { useState } from "react";
import useHabitStore from "../store/store";

const AddHabitForm = () => {
  const [name, setName] = useState("");
  const [frequency, setfrequency] = useState<"Daily" | "Weekly">("Daily");

  const {habits , addHabit} = useHabitStore();
  console.log(habits);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(name.trim()){
        addHabit(name, frequency);
        setName("");
      }
  };

  return (
    <form onSubmit={handleSubmit}> 
      <Box>
        <TextField
          label="Habit Name"
          name={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Habit Name"
          fullWidth
        />
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Frequency</InputLabel>
  <Select
    value={frequency}
    label="Frequency"
    onChange={(e) => setfrequency(e.target.value as "Daily" | "Weekly")}
  >
    <MenuItem value="Daily">Daily</MenuItem>
    <MenuItem value="Weekly">Weekly</MenuItem>
  </Select>
</FormControl>
<Button type="submit" variant="contained" color="primary" fullWidth  >Add Habit</Button>
      </Box>
    </form>
  );
};

export default AddHabitForm;
