import { Card, CardMedia, Rating, Typography } from "@mui/material";
import React from "react";
import CustomChip from "./CustomChip";
import CustomDivider from "./CustomDivider";

const BookCard = ({
  img,
  isForBuy,
  saleOff,
  name,
  author,
  price,
  rating,
  uploader,
}) => {
  return (
    <Card
      sx={{
        width: "250px",
        borderRadius: "10px",
        p: "10px",
        border: "1px solid #969696",
      }}
      elevation={0}
    >
      <CardMedia
        component={"img"}
        src={img}
        sx={{ width: "100%", height: "350px", borderRadius: "10px" }}
      />
      <div
        className="chip"
        style={{
          marginTop: "10px",
          display: "flex",
          // justifyContent: "space-between",
          gap: 10,
        }}
      >
        <CustomChip
          title={isForBuy ? "Sách bán" : "Sách thuê"}
          bgColor={"#CE81EB"}
        />
        <CustomChip
          title={`Mới ${saleOff}`}
          color={"#CE81EB"}
          bgColor={"rgb(206,129,235,0.1)"}
        />
      </div>
      <div className="body" style={{ height: "90px" }}>
        <Typography
          variant="body1"
          color="initial"
          fontWeight={600}
          fontSize={16}
          sx={{ marginTop: "10px" }}
        >
          {name}
        </Typography>
        <Typography variant="body1" color="initial">
          {author}
        </Typography>
        <Typography
          variant="body1"
          color="#A935D4"
          sx={{ marginTop: "5px" }}
          fontSize={20}
          fontWeight={600}
        >
          {price} đ
        </Typography>
      </div>
      <CustomDivider />
      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Rating name="read-only" value={rating} readOnly />
        <div className="">
          <Typography variant="body1" color="initial" fontSize={13}>
            Được đăng bởi
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            fontSize={13}
            fontWeight={600}
          >
            {uploader}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

export default BookCard;
