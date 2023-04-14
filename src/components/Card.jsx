import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Box, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "0.75rem",
    marginBottom: "0.75rem",
    borderRadius: "4px",
    padding: "1rem 1rem",
  },
  innerDiv: {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: " 4px",
    boxShadow:
      "0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12)",
  },
  fontWeightBold: {
    fontWeight: "700",
  },
  fieldTitle: {
    marginLeft: "0.25rem",
    marginRight: "0.25rem",
  },
  cardActionsSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  characterImage: {
    maxWidth: "90%",
  },
}));

const CharacterCard = (props, ref) => {
  const { id, name, status, species, gender, image, origin } = props;
  const classes = useStyles();
  const originText = origin.type
    ? `[${origin.type}] ${origin.name}`
    : origin.name;

  return (
    <Grid item xs={12} md={6} className={classes.container}>
      <Grid container className={classes.innerDiv}>
        <Grid item xs={4}>
          <img loading="lazy" src={image} className={classes.characterImage} />
        </Grid>
        <Grid item xs={6}>
          <Box display="flex">
            <Typography
              variant="body1"
              className={`${classes.fontWeightBold} ${classes.fieldTitle}`}
            >
              Name:
            </Typography>
            <Typography variant="body1">{name}</Typography>
          </Box>
          <Box mt={2} display="flex">
            <Typography
              variant="body1"
              className={`${classes.fontWeightBold} ${classes.fieldTitle}`}
            >
              Species:
            </Typography>
            <Typography variant="body1">{species}</Typography>
          </Box>
          <Box mt={2} display="flex">
            <Typography
              variant="body1"
              className={`${classes.fontWeightBold} ${classes.fieldTitle}`}
            >
              Gender:
            </Typography>
            <Typography variant="body1">{gender}</Typography>
          </Box>
          <Box mt={2} display="flex">
            <Typography
              variant="body1"
              className={`${classes.fontWeightBold} ${classes.fieldTitle}`}
            >
              Origin:
            </Typography>
            <Typography variant="body1">{originText}</Typography>
          </Box>
          <Box mt={2} display="flex">
            <Typography
              variant="body1"
              className={`${classes.fontWeightBold} ${classes.fieldTitle}`}
            >
              Dimension:
            </Typography>
            <Typography variant="body1">{origin.dimension}</Typography>
          </Box>
          <Box mt={2} display="flex">
            <Typography
              variant="body1"
              className={`${classes.fontWeightBold} ${classes.fieldTitle}`}
            >
              Status:
            </Typography>
            <Typography variant="body1">{status}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CharacterCard;
