import { Avatar, Button, CardMedia, Rating, Typography } from "@mui/material";
import React from "react";
import { imgURL } from "../constants";
import CustomChip from "../components/CustomChip";
import { WidthFull } from "@mui/icons-material";
import Headers from "../components/Headers";
import BookCard from "../components/BookCard";

const tags = ["Phiêu lưu", "Giả tưởng", "Thần bí"];
const bookData = [
  {
    name: "The Silent Patient",
    author: "Alex Michaelides",
    price: 100000,
    isForBuy: false,
    saleOff: "10%",
    rating: 4.5,
    img: "https://i.pinimg.com/236x/64/4b/f5/644bf5ad3698ae802f83c2e3e43019e9.jpg",
    uploader: "phanh",
  },
  {
    name: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 100000,
    isForBuy: true,
    saleOff: "20%",
    rating: 4.7,
    img: "https://i.pinimg.com/236x/64/4b/f5/644bf5ad3698ae802f83c2e3e43019e9.jpg",
    uploader: "phanh",
  },
  {
    name: "Becoming",
    author: "Michelle Obama",
    price: 100000,
    isForBuy: true,
    saleOff: "15%",
    rating: 4.8,
    img: "https://i.pinimg.com/236x/64/4b/f5/644bf5ad3698ae802f83c2e3e43019e9.jpg",
    uploader: "phanh",
  },
  {
    name: "Educated",
    author: "Tara Westover",
    price: 100000,
    isForBuy: true,
    saleOff: "10%",
    rating: 4.6,
    img: "https://i.pinimg.com/236x/64/4b/f5/644bf5ad3698ae802f83c2e3e43019e9.jpg",
    uploader: "phanh",
  },
  {
    name: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 100000,
    isForBuy: false,
    saleOff: "5%",
    rating: 4.2,
    img: "https://i.pinimg.com/236x/64/4b/f5/644bf5ad3698ae802f83c2e3e43019e9.jpg",
    uploader: "phanh",
  },
  {
    name: "Atomic Habits",
    author: "James Clear",
    price: 100000,
    isForBuy: true,
    saleOff: "25%",
    rating: 4.9,
    img: "https://i.pinimg.com/236x/20/d1/a6/20d1a65703a999cd0b39f87d7bb41c1d.jpg",
    uploader: "phanh",
  },
  {
    name: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 100000,
    isForBuy: false,
    saleOff: "0%",
    rating: 4.7,
    img: "https://i.pinimg.com/236x/a9/e2/13/a9e213cf1668db1dec8ab175e14ce037.jpg",
    uploader: "phanh",
  },
  {
    name: "1984",
    author: "George Orwell",
    price: 100000,
    isForBuy: true,
    saleOff: "20%",
    rating: 4.8,
    img: "https://i.pinimg.com/236x/43/75/b7/4375b7d9bf24b88aa53744b417227485.jpg",
    uploader: "phanh",
  },
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 100000,
    isForBuy: false,
    saleOff: "30%",
    rating: 4.9,
    img: "https://i.pinimg.com/474x/2e/b0/2d/2eb02dc4133acff9ff4cd6b9160fd484.jpg",
    uploader: "phanh",
  },
  {
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 100000,
    isForBuy: true,
    saleOff: "50%",
    rating: 4.1,
    img: "https://i.pinimg.com/236x/53/33/4f/53334fc80a12be02195f18d23f7ad46c.jpg",
    uploader: "phanh",
  },
];

const DetailBook = () => {
  return (
    <div>
      <Headers />
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 50,
          marginTop: "100px",
        }}
      >
        <div className="left">
          <div
            className=""
            style={{
              padding: "10px",
              border: "1px solid #969696",
              width: "250px",
            }}
          >
            <CardMedia
              component={"img"}
              src={imgURL.book}
              sx={{ width: "100%", height: "350px" }}
            />
          </div>
          <div
            className=""
            style={{
              padding: "20px 0",
              backgroundColor: "#EEEEEE",
              paddingLeft: "40px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginTop: "20px",
            }}
          >
            <Avatar src={imgURL.avt} />
            <div className="" style={{}}>
              <Typography variant="body1" color="initial" fontWeight={600}>
                phanh
              </Typography>
              <Rating name="read-only" value={5} readOnly />
            </div>
          </div>
        </div>
        <div className="right" style={{ width: "620px" }}>
          <div
            className="title"
            style={{
              padding: "30px",
              backgroundColor: "#EEEEEE",
              borderRadius: "30px",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              fontSize={24}
              fontWeight={600}
            >
              Sách Nhà Giả Kim Sách bán chạy nhất chỉ sau kinh thánh
            </Typography>
            <Typography variant="body1" color="#667479" fontSize={20}>
              Paulo Coelko
            </Typography>
            <Typography
              variant="body1"
              color="#A935D4"
              fontSize={30}
              fontWeight={600}
            >
              70.000 ₫
            </Typography>
          </div>
          <Button
            sx={{
              p: "15px 60px",
              borderRadius: "25px",
              fontSize: "16px",
              color: "white",
              bgcolor: "#CE81EB",
              textTransform: "none",
              fontWeight: 600,
              my: "30px",
            }}
          >
            Mua ngay
          </Button>
          <div
            className="desc"
            style={{
              padding: "30px",
              backgroundColor: "#EEEEEE",
              borderRadius: "30px",
            }}
          >
            <div
              className="header"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                // marginTop: "30px",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                fontSize={20}
                fontWeight={600}
              >
                Mô tả
              </Typography>
              <div className="chips" style={{ display: "flex", gap: 10 }}>
                {tags.map((t, index) => (
                  <CustomChip
                    key={index}
                    title={t}
                    color={"white"}
                    bgColor={"#A935D4"}
                  />
                ))}
              </div>
            </div>
            <Typography variant="body1" color="initial" sx={{ mt: "20px" }}>
              Nhà giả kim là tiểu thuyết được xuất bản lần đầu ở Brasil năm
              1988, và là cuốn sách nổi tiếng nhất của nhà văn Paulo Coelho. Tác
              phẩm đã được dịch ra 67 ngôn ngữ và bán ra tới 95 triệu bản, trở
              thành một trong những cuốn sách bán chạy nhất mọi thời đại. Nhân
              vật chính trong truyện là Santiago. Cha mẹ Santiago mong muốn cậu
              trở thành linh mục để mang lại niềm tự hào cho gia đình, nhưng vì
              ước mơ từ nhỏ của chính mình là đi đây đi đó khắp thế giới,
              Santigo đã thuyết phục được cha cậu và trở thành một người chăn
              cừu.
            </Typography>
          </div>
        </div>
      </div>
      <Typography
        variant="body1"
        color="initial"
        textAlign={"center"}
        sx={{ my: "40px" }}
        fontSize={24}
        fontWeight={600}
      >
        Các đầu sách khác dành cho bạn
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 42px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: 18,
          }}
        >
          {bookData.map((b, index) => (
            <BookCard
              key={index}
              img={b.img}
              isForBuy={b.isForBuy}
              saleOff={b.saleOff}
              name={b.name}
              author={b.author}
              price={b.price.toLocaleString()}
              rating={b.rating}
              uploader={b.uploader}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
