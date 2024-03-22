import { TextField, Typography } from "@mui/material";
import { MuiButton } from "./Mui Button";

export const MuiTypography = () => {
  return (
    <div className="add">
      <Typography variant="body 2">
        Trying my best Trying my best to be okay Trying my best but every day,
        it's so hard Holding my breath Holding my breath 'til I can say All of
        the words I want to say from my heart..... jmjd
      </Typography>
      <Typography variant="h1"> pH Level of Water </Typography>
      <TextField
        type="text"
        d="standard-basic"
        label="Standard"
        variant="standard"
      >
        Enter pH level
      </TextField>
    </div>
  );
};
