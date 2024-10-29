import {
  Box,
  Button,
  CardMedia,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Headers from "../components/Headers";
import CustomChip from "../components/CustomChip";
import fb3 from "../assets/fb3.png";
import BookList from "../components/BookList";

const SearchPage = () => {
  return (
    <div>
      <Headers />
      <div className="" style={{ padding: "0 50px", marginTop: "50px" }}>
        <div
          className="new-release"
          style={{
            backgroundColor: "#D4B6FF",
            display: "flex",
            padding: "70px 80px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="body1"
            color="white"
            fontSize={80}
            fontWeight={600}
          >
            Mới Ra Mắt !!!
          </Typography>
          <Box
            sx={{
              bgcolor: "#EBD7F3",
              px: "50px",
              py: "64px",
              borderRadius: "25px",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <CardMedia component={"img"} src={fb3} sx={{ width: "222px" }} />
            <Box>
              <Typography
                variant="body1"
                color="white"
                fontSize={20}
                sx={{
                  p: "12px 40px",
                  borderRadius: "10px",
                  bgcolor: "#F79B52",
                  width: "40px",
                }}
                fontWeight={600}
              >
                New
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                fontSize={32}
                fontWeight={600}
                sx={{ marginTop: "15px" }}
              >
                Sao chúng ta lại ngủ
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ width: "600px", marginBottom: "20px" }}
              >
                Cuốn sách được viết theo quan điểm khoa học thần kinh và chủ yếu
                dành để thảo luận về tác động của giấc ngủ đến chức năng của não
                người . Cuốn sách được chia thành bốn phần, mỗi phần tập trung
                vào cách thức giấc ngủ hoạt đ...
              </Typography>
              <CustomChip
                title={"Khoa học"}
                bgColor={"#CE81EB"}
                fontSize={13}
                fontWeight={600}
              />
            </Box>
          </Box>
        </div>
      </div>

      <div className="title" style={{ marginTop: "50px" }}>
        <Typography
          variant="body1"
          color="black"
          fontSize={24}
          //   fontFamily={fontFamily.msr}
          fontWeight={700}
          textAlign={"center"}
        >
          Tìm kiếm sách yêu thích của bạn tại đây
        </Typography>
      </div>
      <div
        className="search"
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <OutlinedInput
          id=""
          label=""
          placeholder="Find your favorite pets"
          sx={{ borderRadius: "15px", width: "1200px" }}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <Button
          sx={{
            py: "12px",
            fontSize: 16,
            fontWeight: 600,
            textTransform: "none",
            bgcolor: "#103559",
            color: "white",
            borderRadius: "15px",
            marginLeft: "20px",
            width: "195px",
          }}
        >
          Tìm sách
        </Button>
      </div>
      <BookList />
    </div>
  );
};

export default SearchPage;
