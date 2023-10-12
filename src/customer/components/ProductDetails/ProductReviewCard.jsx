import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 40, height: 40, bgcolor: "#9155fd" }}
            >
              A
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Adeeb</p>
              <p className="opacity-80">April 12, 2023</p>
            </div>
            <Rating value={4.5} name="half-rating" precision={0.5} readOnly />
            <p>
              Nice Product, beautiful t-shirt
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
