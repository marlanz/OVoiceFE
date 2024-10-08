import { useEffect, useState } from "react";
import Headers from "../components/Headers";
import {
  CardMedia,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Button,
  Link,
  Grid2,
} from "@mui/material";
import loginBanner from "../assets/loginBanner.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Register = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
    confirmPassword: "",
    lastName: "",
    firstName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{}}>
      <Headers />
      <div
        className="login-body"
        style={{
          backgroundColor: "#D4B6FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          position: "relative",
        }}
      >
        <div
          className="login-container"
          style={{
            backgroundColor: "white",
            position: "absolute",
            top: -15,
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <Grid2 container gap={10}>
            <Grid2 sx={{}}>
              <CardMedia
                component={"img"}
                src={loginBanner}
                sx={{ width: "530px" }}
              />
              <div
                className=""
                style={{ position: "absolute", top: 540, left: 50 }}
              >
                <Typography
                  variant="body1"
                  color="white"
                  fontSize={24}
                  fontWeight={600}
                >
                  Mở Khóa Thế Giới Tri Thức
                </Typography>
                <Typography variant="body1" color="white" fontSize={16}>
                  Thuê những cuốn sách yêu thích của bạn dễ dàng!
                </Typography>
              </div>
            </Grid2>
            <Grid2 sx={{ width: "400px" }}>
              <Typography
                variant="body1"
                color="initial"
                fontSize={24}
                sx={{ display: "flex", gap: 1 }}
              >
                Chào mừng bạn đến với{" "}
                <Typography
                  variant="body1"
                  color="initial"
                  fontWeight={600}
                  fontSize={24}
                >
                  OVoice
                </Typography>
              </Typography>
              <div
                className="name-input"
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 20,
                }}
              >
                <div className="first-name">
                  <Typography variant="body1" color="initial">
                    Họ
                  </Typography>
                  <TextField
                    id=""
                    placeholder="Nhập họ của bạn"
                    name="firstName"
                    value={form.firstName}
                    onChange={(e) => handleInputChange(e)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "15px",
                      },
                      marginTop: "12px",
                    }}
                    fullWidth
                  />
                </div>
                <div className="last-name">
                  <Typography variant="body1" color="initial">
                    Tên
                  </Typography>
                  <TextField
                    id=""
                    placeholder="Nhập tên của bạn"
                    name="lastName"
                    value={form.lastName}
                    onChange={(e) => handleInputChange(e)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "15px",
                      },
                      marginTop: "12px",
                    }}
                    fullWidth
                  />
                </div>
              </div>
              <div className="email-input" style={{ marginTop: "20px" }}>
                <Typography variant="body1" color="initial">
                  Địa chỉ email
                </Typography>
                <TextField
                  id=""
                  placeholder="Nhập email của bạn"
                  name="email"
                  value={form.email}
                  onChange={(e) => handleInputChange(e)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "15px",
                    },
                    marginTop: "12px",
                  }}
                  fullWidth
                />
              </div>
              <div className="password-input" style={{ marginTop: "20px" }}>
                <Typography variant="body1" color="initial">
                  Mật khẩu
                </Typography>
                <OutlinedInput
                  id=""
                  placeholder="Nhập mật khẩu của bạn"
                  name="password"
                  value={form.password}
                  onChange={(e) => handleInputChange(e)}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  sx={{
                    borderRadius: "15px",
                    marginTop: "12px",
                  }}
                  fullWidth
                />
              </div>
              <div className="password-input" style={{ marginTop: "20px" }}>
                <Typography variant="body1" color="initial">
                  Nhập lại mật khẩu
                </Typography>
                <OutlinedInput
                  id=""
                  placeholder="Nhập mật khẩu của bạn"
                  name="password"
                  value={form.password}
                  onChange={(e) => handleInputChange(e)}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  sx={{
                    borderRadius: "15px",
                    marginTop: "12px",
                  }}
                  fullWidth
                />
              </div>
              <Button
                sx={{
                  marginTop: "30px",
                  borderRadius: "10px",
                  backgroundColor: "#FFAD6B",
                  color: "white",
                  fontWeight: 600,
                  width: "100%",
                  py: "10px",
                  textTransform: "none",
                  fontSize: "16px",
                }}
              >
                Đăng Ký
              </Button>
              <Typography
                variant="body1"
                color="initial"
                fontSize={16}
                textAlign={"center"}
                sx={{ marginTop: "15px" }}
              >
                Có tài khoản rồi{" "}
                <Link href="/login" sx={{ cursor: "pointer" }}>
                  Đăng nhập ngay!
                </Link>
              </Typography>
            </Grid2>
          </Grid2>
        </div>
      </div>
    </div>
  );
};

export default Register;
