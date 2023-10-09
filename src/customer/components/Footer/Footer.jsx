import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 1 }}
      >
        {/* Company */}
        <Grid item xs={12} sm={6} md={3}>
          <Grid className="mt-5" container direction="column">
            <Typography className="pb-5" variant="h6" gutterBottom>
              Company
            </Typography>
            <Button variant="caption" className="pb-5" gutterBottom>
              About
            </Button>
            <Button variant="caption" className="pb-5" gutterBottom>
              Blog
            </Button>
            <Button variant="caption" className="pb-5" gutterBottom>
              Job
            </Button>
            <Button variant="caption" className="pb-5" gutterBottom>
              Press
            </Button>
            <Button variant="caption" className="pb-5" gutterBottom>
              Partner
            </Button>
            {/* Add more company-related links */}
          </Grid>
        </Grid>

        {/* Contact */}
        <Grid item xs={12} sm={6} md={3}>
          <Grid className="mt-5" container direction="column">
            <Typography className="pb-5" variant="h6" gutterBottom>
              Solutions
            </Typography>
            <Button variant="h6" className="pb-5" gutterBottom>
              Contact Info
            </Button>
            <Button variant="h6" className="pb-5" gutterBottom>
              Marketing
            </Button>
            <Button variant="h6" className="pb-5" gutterBottom>
              Analytics
            </Button>
            <Button variant="h6" className="pb-5" gutterBottom>
              Support
            </Button>
            {/* Add more contact-related links */}
          </Grid>
        </Grid>

        {/* Products */}
        <Grid item xs={12} sm={6} md={3}>
          <Grid className="mt-5" container direction="column">
            <Typography variant="h6" className="pb-5" gutterBottom>
              Documentation
            </Typography>
            <Button variant="h6" className="pb-5" gutterBottom>
              Guides
            </Button>
            <Button variant="h6" className="pb-5" gutterBottom>
              API
            </Button>
            {/* Add more product-related links */}
          </Grid>
        </Grid>

        {/* Connect */}
        <Grid item xs={12} sm={6} md={3}>
          <Grid className="mt-5" container direction="column">
            <Typography variant="h6" className="pb-5" gutterBottom>
              Connect
            </Typography>
            <Button variant="h6" className="pb-5" gutterBottom>
              Facebook
            </Button>
            <Button variant="h6" className="pb-5" gutterBottom>
              Instagram
            </Button>
            <Button variant="h6" className="pb-5" gutterBottom>
              LinkedIn
            </Button>
            {/* Add links to your social media profiles */}
          </Grid>
        </Grid>

        {/* Copyright */}
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 HNA Firm. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with Love and Support.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
