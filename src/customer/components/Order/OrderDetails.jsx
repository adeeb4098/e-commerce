import React from "react";
import AddressCard from "../Addresscard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Star, StarBorder } from "@mui/icons-material";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl round-md p-5 border "
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://images.unsplash.com/photo-1605763240000-7e93b172d754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">
                    Yellow Color with green Flowers Frock
                  </p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Colour: Dark Yellow</span> <span>Size: M</span>
                  </p>
                  <p>Seller: HNA Firm</p>
                  <p>₹1099</p>
                </div>
              </div>
            </Grid>
            <Grid item className="pr-3">
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorder
                  sx={{ fontSize: "2rem" }}
                  className="px-2 text-5xl"
                />
                <span className="font-semibold">Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
