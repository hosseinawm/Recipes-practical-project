import { Skeleton, Grid, Card, CardHeader, CardContent } from "@mui/material";
import React from "react";

const SkeletonLoading = ({ recipesPerPage }) => {
  return (
    <Grid container spacing={2}>
      {Array.from(new Array(recipesPerPage)).map((item, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card
            sx={{
              height: "100%",
              bgcolor: "#c8d5b9",
            }}
          >
            <CardHeader
              title={
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              }
              subheader={<Skeleton animation="wave" height={10} width="40%" />}
            />
            <Skeleton
              sx={{ height: 190 }}
              animation="wave"
              variant="rectangular"
            />
            <CardContent>
              <React.Fragment>
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </React.Fragment>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonLoading;
