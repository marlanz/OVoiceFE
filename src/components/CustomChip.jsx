import { Typography } from "@mui/material";

const CustomChip = ({ title, bgColor, index, fontSize, fontWeight, color }) => {
  return (
    <Typography
      variant="body1"
      color={color || "white"}
      sx={{
        bgcolor: bgColor,
        borderRadius: "10px",
        display: "inline-block",
        p: "7px 14px",
      }}
      textAlign={"center"}
      fontSize={fontSize}
      fontWeight={fontWeight}
      key={index}
    >
      {title}
    </Typography>
  );
};

export default CustomChip;
