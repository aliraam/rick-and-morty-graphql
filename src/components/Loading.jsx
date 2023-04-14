import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Grid } from "@mui/material";
export default function CircularIndeterminate() {
  return (
    <Grid
      container
      paddingLeft={20}
      paddingRight={20}
      paddingTop={5}
      direction="column"
      justify="center"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
}
