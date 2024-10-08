import { Box, Button, CardMedia, Typography } from "@mui/material";
import banner from "../assets/banner.png";

import Headers from "../components/Headers";
import StarIcon from "@mui/icons-material/Star";
import logo from "../assets/logo.png";
import { Star } from "@mui/icons-material";
import Footers from "../components/Footers";

const benefits = [
  {
    title: "Tăng lượt đề xuất ",
    desc: "Tăng lượt đề xuất trang trên thanh tìm kiếm",
  },
  {
    title: "Quảng cáo bài viết ",
    desc: "Quảng cáo bài viết của bạn trên Ovoice",
  },
  {
    title: "Và nhiều quyền lợi",
    desc: "Nhiều quyền lợi",
  },
];

const packages = [
  {
    title: "Premium",
    price: "50.000 ₫/tuần",
  },
  {
    title: "Premium+",
    price: "70.000 ₫/2 tuần",
  },
  {
    title: "Premium++",
    price: "130.000 ₫/tháng",
  },
];

function PremiumPage() {
  return (
    <div>
      <Headers />
      <Box
        sx={{
          display: "flex",
          px: "20px",
          py: "100px",
          backgroundColor: "#D4B6FF",
        }}
      >
        <Box sx={{ width: "800px" }}>
          <Typography
            variant="body1"
            color="#4B1D79"
            fontWeight={600}
            fontSize={64}
          >
            Nâng cấp
          </Typography>
          <Typography
            variant="body1"
            color="#4B1D79"
            fontWeight={600}
            fontSize={64}
          >
            trải nghiệm
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            fontSize={30}
            sx={{ marginTop: "30px", display: "inline-block" }}
          >
            Trải nghiệm không giới hạn với gói hội viên độc quyền
          </Typography>
          <Button
            startIcon={<StarIcon />}
            sx={{
              color: "white",
              bgcolor: "#FFAD6B",
              textTransform: "none",
              fontSize: "20px",
              fontWeight: 600,
              px: "100px",
              py: "10px",
              borderRadius: "15px",
              marginTop: "40px",
            }}
          >
            Trải nghiệm Hội Viên
          </Button>
        </Box>
        <CardMedia component={"img"} src={banner} width={"700px"} />
      </Box>
      <Typography
        variant="body1"
        color="initial"
        fontSize={32}
        fontWeight={600}
        sx={{ marginTop: "80px", marginBottom: "40px", marginLeft: "580px" }}
      >
        Đặc quyền trở thành hội viên
      </Typography>
      <div
        className=""
        style={{ display: "flex", justifyContent: "space-around", gap: 60 }}
      >
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <StarIcon sx={{ fontSize: 100, color: "#FFAD6B" }} />
              <Typography
                variant="body1"
                color="initial"
                fontSize={24}
                fontWeight={600}
                textAlign={"center"}
              >
                {benefit.title}
              </Typography>
              <Typography variant="body1" color="initial" fontSize={16}>
                {benefit.desc}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div
        className="benefit-container"
        style={{
          padding: "100px",
          backgroundColor: "#D4B6FF",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "100px",
        }}
      >
        {packages.map((item, index) => (
          <div
            className="pacakge-card"
            key={index}
            style={{
              padding: "30px 60px",
              backgroundColor: "white",
              borderRadius: "18px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              fontSize={24}
              fontWeight={600}
            >
              {item.title}
            </Typography>
            <CardMedia component={"img"} src={logo} sx={{ width: "200px" }} />
            <Typography
              variant="body1"
              color="initial"
              fontSize={32}
              fontWeight={600}
              sx={{ marginBottom: "20px" }}
            >
              {item.price}
            </Typography>
            {benefits.map((bene, index) => (
              <div
                className=""
                key={index}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <StarIcon sx={{ fontSize: 20, color: "#FFAD6B" }} />
                <Typography variant="body1" color="initial">
                  {bene.title}
                </Typography>
              </div>
            ))}
            <Button
              sx={{
                borderRadius: "15px",
                fontWeight: 600,
                textTransform: "none",
                bgcolor:
                  index === 0 ? "#F79B52" : index === 1 ? "#9CCE2E" : "#2ABCD2",
                color: "white",
                width: "100%",
                py: "12px",
                marginTop: "40px",
              }}
            >
              Chọn
            </Button>
          </div>
        ))}
      </div>
      <Footers />
    </div>
  );
}

export default PremiumPage;
