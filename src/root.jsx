import "./App.css";
import {
  Box,
  Button,
  CardMedia,
  List,
  ListItem,
  Typography,
  Grid2,
} from "@mui/material";

import logo from "./assets/logo.png";
import hero from "./assets/hero.png";
import fb1 from "./assets/fb1.png";
import fb2 from "./assets/fb2.png";
import fb3 from "./assets/fb3.png";
import hero3 from "./assets/hero3.png";
import banner from "./assets/banner.png";
import CustomChip from "./components/CustomChip";

const pageList = [
  {
    name: "Thể Loại",
    path: "/category",
  },
  {
    name: "Tìm Kiếm",
    path: "/search",
  },
  {
    name: "Trở thành hội viên",
    path: "/member",
  },
  {
    name: "Trang Chủ",
    path: "/home",
  },
  {
    name: "Đăng Nhập",
    path: "/login",
  },
  {
    name: "Đăng Ký",
    path: "/signup",
  },
];

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

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#D4B6FF" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardMedia component={"img"} src={logo} sx={{ width: "220px" }} />
          <Box
            sx={{ display: "flex", gap: 4, alignItems: "center", pr: "50px" }}
          >
            {pageList.map((item, index) =>
              item.path === "/member" ? (
                <Typography
                  variant="body1"
                  color="white"
                  key={index}
                  sx={{
                    cursor: "pointer",
                    px: "13px",
                    py: "11px",
                    bgcolor: "#F79B52",
                    borderRadius: "15px",
                  }}
                  fontWeight={600}
                >
                  {item.name} {/* Only render the name here */}
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  color="initial"
                  key={index}
                  sx={{ cursor: "pointer" }}
                  fontWeight={600}
                >
                  {item.name} {/* Only render the name here */}
                </Typography>
              )
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            px: "150px",
            justifyContent: "space-between",
            gap: 10,
            py: "50px",
          }}
        >
          <Box sx={{ width: "1500px" }}>
            <Typography
              variant="body1"
              color="#4B1D79"
              fontWeight={600}
              fontSize={64}
            >
              Chào bạn,
            </Typography>
            <Typography
              variant="body1"
              color="#4B1D79"
              fontWeight={600}
              fontSize={64}
            >
              cùng đọc sách nhé.
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              fontSize={30}
              sx={{ marginTop: "30px" }}
            >
              Chúng tôi là nền tảng vay mượn sách với lưu lượng đến 13.000+
              quyển sách
            </Typography>
            <Button
              sx={{
                color: "white",
                bgcolor: "#FFAD6B",
                textTransform: "none",
                fontSize: "20px",
                fontWeight: 600,
                px: "50px",
                py: "10px",
                borderRadius: "15px",
                marginTop: "40px",
              }}
            >
              Bắt đầu chọn
            </Button>
          </Box>
          <CardMedia component={"img"} src={hero} width={"467px"} />
        </Box>
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
      <div
        className="about-us"
        style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "25px",
            p: "70px 100px",
            bgcolor: "#F2DDFA",
            gap: 10,
          }}
        >
          <Box>
            <Typography
              variant="body1"
              color="initial"
              fontSize={32}
              fontWeight={600}
            >
              Về chúng tôi
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              fontSize={16}
              sx={{ width: "380px", marginTop: "10px" }}
            >
              Ovoice là trang thuê và đăng tải sách với hệ thống sách đồ sộ, đa
              dạng về nội dung và thể loại. Nơi bạn có truy cập và đọc sách bản
              quyền. Chúng tôi lắng nghe và được tạo ra nhằm giúp những người
              yêu sách và người đăng tải sách
            </Typography>
            <Button
              sx={{
                mt: "30px",
                fontWeight: 600,
                borderRadius: "10px",
                bgcolor: "#CE81EB",
                color: "white",
                fontSize: "20px",
                px: "50px",
                py: "10px",
                textTransform: "none",
              }}
            >
              Nội dung bản quyền
            </Button>
          </Box>
          <CardMedia component={"img"} src={banner} sx={{ width: "644px" }} />
        </Box>
      </div>
      <div className="foru" style={{ marginTop: "90px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <CardMedia component={"img"} src={hero3} sx={{ width: "256px" }} />
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ borderRadius: "25px", bgcolor: "#F2DDFA", p: "30px 80px" }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{ width: "510px" }}
                fontSize={20}
              >
                Dưới dạng những lá thư của một cậu con trai gửi cho người mẹ,
                tác phẩm khắc hoạ lại cuộc đời của nhân vật chính Cún Con, từ
                thuở ấu thơ cho đến lúc trưởng thành. Đồng thời, cuốn sách còn
                xoay quanh các thế hệ trải dài từ bà, mẹ cho đến cậu, trong một
                cuộc di cư dài đằng đẵng từ miền quê Việt Nam sang đất nước Mỹ.
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                textAlign={"right"}
                fontSize={24}
                fontWeight={600}
                sx={{ marginTop: "10px" }}
              >
                Ocean Vương
              </Typography>
              <div className="tags" style={{ display: "flex", gap: 15 }}>
                <CustomChip
                  title={"Tiểu thuyết"}
                  bgColor={"#CE81EB"}
                  fontSize={14}
                  fontWeight={600}
                />
                <CustomChip
                  title={"Thư tay"}
                  bgColor={"#CE81EB"}
                  fontSize={14}
                  fontWeight={600}
                />
              </div>
            </Box>
            <Button
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: "10px",
                bgcolor: "#F79B52",
                width: "250px",
                color: "white",
                mt: "20px",
                display: "inline-block",
                textTransform: "none",
              }}
            >
              Xem ngay
            </Button>
          </div>
        </Box>
      </div>
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
    </>
  );
}

export default App;
