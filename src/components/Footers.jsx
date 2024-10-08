import { CardMedia, Grid2, List, ListItem } from "@mui/material";
import logo from "../assets/logo.png";

const Footers = () => {
  return (
    <div
      className="footer"
      style={{
        padding: "20px 80px",
        backgroundColor: "#E4E4E4",
        marginTop: "100px",
      }}
    >
      <CardMedia component={"img"} src={logo} sx={{ width: "307px" }} />
      <div
        className="divider"
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "black",
          marginBottom: "10px",
        }}
      ></div>
      <Grid2 container spacing={30}>
        <Grid2>
          <List>
            <ListItem>Về chúng tôi</ListItem>
            <ListItem>Chính sách</ListItem>
            <ListItem>Chính sách</ListItem>
          </List>
        </Grid2>
        <Grid2>
          <List>
            <ListItem>Liên hệ</ListItem>
            <ListItem>Copyright</ListItem>
          </List>
        </Grid2>
        <Grid2>
          <List>
            <ListItem>Facebook</ListItem>
            <ListItem>Nền tảng X</ListItem>
            <ListItem>Tiktok</ListItem>
          </List>
        </Grid2>
        <Grid2>
          <List>
            <ListItem>Youtube</ListItem>
            <ListItem>Instagram</ListItem>
          </List>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Footers;
