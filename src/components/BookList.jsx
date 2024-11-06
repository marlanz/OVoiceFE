import { Card, CardMedia, Rating, Typography } from "@mui/material";
import React from "react";
import CustomChip from "./CustomChip";
import CustomDivider from "./CustomDivider";
import BookCard from "./BookCard";

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

const BookList = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0 42px",
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
  );
};

export default BookList;
