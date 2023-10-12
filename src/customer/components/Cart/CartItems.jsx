import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";

const CartItems = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center space-x-5">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[8rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://assets.ajio.com/medias/sys_master/root/20230624/d2lM/64966b12a9b42d15c9ddccee/-288Wx360H-465410816-burgundy-MODEL.jpg"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1 ">
          <p className="font-semibold">Womens frock with Narrow design</p>
          <p className="opacity-70">Size: M, Colour: Purple </p>
          <p className="opacity-70 mt-2">Seller: Cristalhiyo Gucci</p>
          <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 pt-6">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutline />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutline />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
