import { Button, CardMedia } from "@mui/material";
import Headers from "../components/Headers";
import banner2 from "../assets/banner2.png";
import { Box, Typography } from "@mui/material";

import fb1 from "../assets/fb1.png";
import fb2 from "../assets/fb2.png";
import fb3 from "../assets/fb3.png";
import banner3 from "../assets/banner3.png";
import StarIcon from "@mui/icons-material/Star";
import CustomChip from "../components/CustomChip";
import Footers from "../components/Footers";

const featuredBooks = [
  {
    name: "Nhà giả kim",
    author: "Paulo Coelko",
    desc: "Nhân vật chính trong truyện là Santiago. Cha mẹ Santiago mong muốn cậu trở thành linh mục để mang lại niềm tự hào cho gia đình, nhưng...",
    img: fb1,
    tags: ["Phiêu lưu", "Thần bí", "Giả tưởng"],
  },
  {
    name: "Sao chúng ta lại ngủ",
    author: "Matthew Walker",
    desc: "Cuốn sách được viết theo quan điểm khoa học thần kinh và chủ yếu dành để thảo luận về tác động của giấc ngủ đến chức ...",
    img: fb3,
    tags: ["Khoa học"],
  },
  {
    name: "Muôn kiếp nhân sinh",
    author: "Nguyên Phong",
    desc: "Muôn kiếp nhân sinh là câu chuyện về hành trình trải nghiệm quá khứ tiền kiếp của doanh nhân tài chính Mỹ tên Thomas...",
    img: fb2,
    tags: ["Tâm linh"],
  },
];

const HomePage = () => {
  return (
    <div>
      <Headers />
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "60px",
        }}
      >
        <CardMedia component={"img"} src={banner2} sx={{ width: "1300px" }} />
      </div>
      <Typography
        variant="body1"
        color="initial"
        fontSize={32}
        fontWeight={600}
        sx={{ marginTop: "80px", marginLeft: "50px", marginBottom: "40px" }}
      >
        Sách hay trong tuần
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 7,
          marginBottom: "90px",
        }}
      >
        {featuredBooks.map((book, index) => (
          <div style={{ display: "flex", gap: 10 }} key={index}>
            <CardMedia
              component={"img"}
              src={book.img}
              sx={{ width: "250px" }}
            />
            <Box sx={{ width: "180px" }}>
              <Typography
                variant="body1"
                color="initial"
                fontSize={26}
                fontWeight={600}
              >
                {book.name}
              </Typography>
              <Typography variant="body1" color="initial" fontSize={20}>
                {book.author}
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                fontSize={16}
                sx={{ marginTop: "20px" }}
              >
                {book.desc}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  marginTop: "10px",
                }}
              >
                {book.tags.map((tag, index) => (
                  <CustomChip
                    title={tag}
                    key={index}
                    bgColor={"#CE81EB"}
                    fontSize={13}
                    fontWeight={600}
                  />
                ))}
              </Box>
            </Box>
          </div>
        ))}
      </Box>
      <div
        className="new-release"
        style={{
          backgroundColor: "#D4B6FF",
          display: "flex",
          padding: "70px 80px",
          alignItems: "center",
          justifyContent: "center",
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
            px: "80px",
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
              người . Cuốn sách được chia thành bốn phần, mỗi phần tập trung vào
              cách thức giấc ngủ hoạt đ...
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
      <Typography
        variant="body1"
        color="initial"
        fontSize={32}
        fontWeight={600}
        sx={{ marginTop: "80px", marginLeft: "50px", marginBottom: "40px" }}
      >
        Có thể bạn sẽ thích
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 7,
          marginBottom: "100px",
        }}
      >
        {featuredBooks.map((book, index) => (
          <div style={{ display: "flex", gap: 10 }} key={index}>
            <CardMedia
              component={"img"}
              src={book.img}
              sx={{ width: "250px" }}
            />
            <Box sx={{ width: "180px" }}>
              <Typography
                variant="body1"
                color="initial"
                fontSize={26}
                fontWeight={600}
              >
                {book.name}
              </Typography>
              <Typography variant="body1" color="initial" fontSize={20}>
                {book.author}
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                fontSize={16}
                sx={{ marginTop: "20px" }}
              >
                {book.desc}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  marginTop: "10px",
                }}
              >
                {book.tags.map((tag, index) => (
                  <CustomChip
                    title={tag}
                    key={index}
                    bgColor={"#CE81EB"}
                    fontSize={13}
                    fontWeight={600}
                  />
                ))}
              </Box>
            </Box>
          </div>
        ))}
      </Box>
      <div
        className=""
        style={{
          padding: "80px 0",
          backgroundColor: "#F9F0FD",
          marginBottom: "100px",
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          fontSize={32}
          fontWeight={600}
          sx={{ marginBottom: "40px", marginLeft: "50px" }}
        >
          Thể loại thần bí
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 7,
          }}
        >
          {featuredBooks.map((book, index) => (
            <div style={{ display: "flex", gap: 10 }} key={index}>
              <CardMedia
                component={"img"}
                src={book.img}
                sx={{ width: "250px" }}
              />
              <Box sx={{ width: "180px" }}>
                <Typography
                  variant="body1"
                  color="initial"
                  fontSize={26}
                  fontWeight={600}
                >
                  {book.name}
                </Typography>
                <Typography variant="body1" color="initial" fontSize={20}>
                  {book.author}
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  fontSize={16}
                  sx={{ marginTop: "20px" }}
                >
                  {book.desc}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    marginTop: "10px",
                  }}
                >
                  {book.tags.map((tag, index) => (
                    <CustomChip
                      title={tag}
                      key={index}
                      bgColor={"#CE81EB"}
                      fontSize={13}
                      fontWeight={600}
                    />
                  ))}
                </Box>
              </Box>
            </div>
          ))}
        </Box>
      </div>
      <div
        className=""
        style={{
          backgroundColor: "#D4B6FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 0",
        }}
      >
        <div
          className="upload-book"
          style={{
            backgroundColor: "#EBD7F3",
            padding: "45px 50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 100,
            borderRadius: "25px",
          }}
        >
          <div className="">
            <Typography
              variant="body1"
              color="#4B1D79"
              fontSize={64}
              fontWeight={600}
            >
              Đăng tải sách
            </Typography>
            <Typography variant="body1" color="#4B1D79" fontSize={24}>
              Đưa sách của bạn đến nhiều người hơn
            </Typography>
            <Button
              startIcon={<StarIcon />}
              sx={{
                marginTop: "30px",
                bgcolor: "#F79B52",
                color: "white",
                fontWeight: 600,
                borderRadius: "20px",
                fontSize: "24px",
                textTransform: "none",
                padding: "10px 30px",
              }}
              fullWidth
            >
              Đăng ngay
            </Button>
          </div>
          <CardMedia component={"img"} src={banner3} sx={{ width: "192px" }} />
        </div>
      </div>
      <Typography
        variant="body1"
        color="initial"
        fontSize={32}
        fontWeight={600}
        sx={{ marginTop: "80px", marginLeft: "50px", marginBottom: "40px" }}
      >
        Vì bạn đã đọc Nhà giả kim
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 7,
          marginBottom: "90px",
        }}
      >
        {featuredBooks.map((book, index) => (
          <div style={{ display: "flex", gap: 10 }} key={index}>
            <CardMedia
              component={"img"}
              src={book.img}
              sx={{ width: "250px" }}
            />
            <Box sx={{ width: "180px" }}>
              <Typography
                variant="body1"
                color="initial"
                fontSize={26}
                fontWeight={600}
              >
                {book.name}
              </Typography>
              <Typography variant="body1" color="initial" fontSize={20}>
                {book.author}
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                fontSize={16}
                sx={{ marginTop: "20px" }}
              >
                {book.desc}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  marginTop: "10px",
                }}
              >
                {book.tags.map((tag, index) => (
                  <CustomChip
                    title={tag}
                    key={index}
                    bgColor={"#CE81EB"}
                    fontSize={13}
                    fontWeight={600}
                  />
                ))}
              </Box>
            </Box>
          </div>
        ))}
      </Box>
      <div
        className=""
        style={{
          padding: "80px 0",
          backgroundColor: "#F9F0FD",
          marginBottom: "100px",
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          fontSize={32}
          fontWeight={600}
          sx={{ marginBottom: "40px", marginLeft: "50px" }}
        >
          Được yêu thích bởi độc giả
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 7,
          }}
        >
          {featuredBooks.map((book, index) => (
            <div style={{ display: "flex", gap: 10 }} key={index}>
              <CardMedia
                component={"img"}
                src={book.img}
                sx={{ width: "250px" }}
              />
              <Box sx={{ width: "180px" }}>
                <Typography
                  variant="body1"
                  color="initial"
                  fontSize={26}
                  fontWeight={600}
                >
                  {book.name}
                </Typography>
                <Typography variant="body1" color="initial" fontSize={20}>
                  {book.author}
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  fontSize={16}
                  sx={{ marginTop: "20px" }}
                >
                  {book.desc}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    marginTop: "10px",
                  }}
                >
                  {book.tags.map((tag, index) => (
                    <CustomChip
                      title={tag}
                      key={index}
                      bgColor={"#CE81EB"}
                      fontSize={13}
                      fontWeight={600}
                    />
                  ))}
                </Box>
              </Box>
            </div>
          ))}
        </Box>
      </div>
      <Footers />
    </div>
  );
};

export default HomePage;
