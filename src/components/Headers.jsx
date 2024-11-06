import { Box, CardMedia, Link, Typography } from "@mui/material";
import logo from "../assets/logo.png";

const pageList = [
  {
    name: "Tìm Kiếm",
    path: "/search",
  },
  {
    name: "Trở thành hội viên",
    path: "/premium",
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
    path: "/register",
  },
];

const Headers = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#D4B6FF",
        }}
      >
        <Link href="/">
          <CardMedia component={"img"} src={logo} sx={{ width: "220px" }} />
        </Link>
        <Box sx={{ display: "flex", gap: 4, alignItems: "center", pr: "50px" }}>
          {pageList.map((item, index) =>
            item.path === "/premium" ? (
              <Link href={item.path} key={index} underline="none">
                <Typography
                  variant="body1"
                  color="white"
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
              </Link>
            ) : (
              <Link href={item.path} key={index} underline="none">
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ cursor: "pointer" }}
                  fontWeight={600}
                >
                  {item.name} {/* Only render the name here */}
                </Typography>
              </Link>
            )
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Headers;
