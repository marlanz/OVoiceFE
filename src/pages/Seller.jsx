import { Avatar, Rating, Typography } from "@mui/material";
import React from "react";
import { imgURL } from "../constants";
import Headers from "../components/Headers";
import BookList from "../components/BookList";

const Seller = () => {
  return (
    <div>
      <Headers />
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 100,
          marginTop: "100px",
        }}
      >
        <div
          className="left"
          style={{
            padding: "30px 40px",
            backgroundColor: "#EEEEEE",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Avatar src={imgURL.avt} sx={{ width: "91px", height: "91px" }} />
          <div className="middle">
            <Typography
              variant="body1"
              color="initial"
              fontSize={26}
              fontWeight={600}
            >
              NhaBanSach
            </Typography>
            <Rating defaultValue={5} size="large" />
          </div>
          <div
            className=""
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#A237CA",
              padding: "10px",
            }}
          >
            NHÀ BÁN UY TÍN
          </div>
        </div>
        <div
          className="right"
          style={{
            padding: "30px 40px",
            backgroundColor: "#EEEEEE",
            borderRadius: "20px",
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            fontWeight={600}
            fontSize={20}
          >
            Về người bán
          </Typography>
          <Typography variant="body1" color="initial">
            Nhiều sách mới 90% giá cả hợp lý. <br /> Sách nhiều lượt mua
            <br /> Sách hoàn toàn là hàng chính hãng
          </Typography>
        </div>
      </div>
      <Typography
        variant="body1"
        color="initial"
        sx={{ my: "20px" }}
        fontSize={26}
        fontWeight={600}
        textAlign={"center"}
      >
        Sách của người bán
      </Typography>
      <BookList />
    </div>
  );
};

export default Seller;
