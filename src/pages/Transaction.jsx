import React from "react";
import Headers from "../components/Headers";
import Typography from "@mui/material/Typography";
import { Button, Card, CardMedia } from "@mui/material";
import { imgURL } from "../constants";
import CustomChip from "../components/CustomChip";

const Transaction = () => {
  return (
    <div>
      <Headers />
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 80,
          marginTop: "100px",
          marginBottom: "50px",
        }}
      >
        <div className="left">
          <div
            className="paid-type"
            style={{
              padding: "50px 60px",
              backgroundColor: "#EEEEEE",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              fontSize={20}
              fontWeight={600}
              //   sx={{ m: "50px 120px" }}
            >
              Phương thức thanh toán
            </Typography>
            <div
              className=""
              style={{ display: "flex", gap: 50, marginTop: "10px" }}
            >
              <CardMedia
                component={"img"}
                src={imgURL.momo}
                sx={{ width: "60px", height: "60px" }}
              />
              <CardMedia
                component={"img"}
                src={imgURL.vnpay}
                sx={{ width: "60px", height: "60px" }}
              />
            </div>
            <Typography
              variant="body1"
              color="initial"
              sx={{ mt: "20px" }}
              fontSize={18}
              fontWeight={600}
            >
              Quét mã QR để thanh toán
            </Typography>

            <CardMedia
              component={"img"}
              src={imgURL.qr}
              sx={{ width: "315px", height: "286px" }}
            />
          </div>
          <div
            className="rules"
            style={{
              width: "450px",
              padding: "20px 30px",
              backgroundColor: "#EEEEEE",
              borderRadius: "10px",
              marginTop: "30px",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              fontSize={20}
              fontWeight={600}
            >
              Chú ý
            </Typography>
            <Typography variant="body1" color="initial">
              . Sách sẽ thu hồi bằng cách mang đến chi nhánh gần nhất của Ovoice
              hoặc tính thêm phí lấy hàng tận nơi cho bạn
            </Typography>
            <Typography variant="body1" color="initial">
              . Hạn thuê cố định của mỗi quyển sách là 14 ngày
            </Typography>
            <Typography variant="body1" color="initial">
              . Hạn chế làm tổn hại đến sách
            </Typography>
          </div>
        </div>
        <div
          className="right"
          style={{
            padding: "50px 60px",
            backgroundColor: "#EEEEEE",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            textAlign={"center"}
            fontSize={20}
            fontWeight={600}
          >
            Sách bạn chọn
          </Typography>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: "20px",
              borderRadius: "20px",
            }}
          >
            <CardMedia
              component={"img"}
              src={imgURL.book}
              sx={{ width: "180px" }}
            />
            <div
              className=""
              style={{
                display: "flex",
                gap: 20,
                marginTop: "10px",
                marginBottom: "15px",
              }}
            >
              <CustomChip
                title={"Sách bán"}
                bgColor={"#CE81EB"}
                fontSize={12}
              />
              <CustomChip
                title={`Mới 80%`}
                color={"#CE81EB"}
                bgColor={"rgb(206,129,235,0.1)"}
                fontSize={12}
              />
            </div>
            <Typography
              variant="body1"
              color="initial"
              textAlign={"center"}
              sx={{ width: "200px" }}
            >
              Sách Nhà giả kim còn mới, Sách tâm lý hay...
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              fontSize={24}
              fontWeight={600}
            >
              70.000 ₫
            </Typography>
          </Card>
          <div className="" style={{ marginTop: "10px" }}>
            <div
              className=""
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="body1" color="initial" fontSize={14}>
                Phí gia hạn thuê
              </Typography>
              <Typography variant="body1" color="initial" fontSize={14}>
                5.000₫
              </Typography>
            </div>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "8px 0",
              }}
            >
              <Typography variant="body1" color="initial" fontSize={14}>
                Phí lấy sách tận nơi
              </Typography>
              <Typography variant="body1" color="initial" fontSize={14}>
                15.000₫
              </Typography>
            </div>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1" color="initial" fontSize={14}>
                Phí vận chuyển
              </Typography>
              <Typography variant="body1" color="initial" fontSize={14}>
                15.000₫
              </Typography>
            </div>
            <div
              className=""
              style={{
                margin: "8px 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                fontSize={20}
                fontWeight={600}
              >
                Tổng cộng
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                fontSize={20}
                fontWeight={600}
              >
                80.000 ₫
              </Typography>
            </div>
          </div>
          <Button
            sx={{
              borderRadius: "20px",
              bgcolor: "#9AC836",
              color: "white",
              width: "100%",
              mt: "20px",
            }}
          >
            Thanh toán
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
