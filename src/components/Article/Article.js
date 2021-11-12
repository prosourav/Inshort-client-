import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  component: {
    marginBottom: 20,
    boxShadow: "0 2px 5px 0 rgb(0 0 0 /16%),0 2px 10px 0 rgb(0 0 0 /12%)",
  },
  image: {
    height: "268px",
    width: "88%",
    borderRadius: 5,
    objectFit: "cover",
  },
  container: {
    padding: 8,
    paddingBottom: "4px !important",
  },
  rightContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "5px 0px 0 -25px",
    [theme.breakpoints.down("sm")]: {
      margin: "5px 0px",
    },
  },
  title: {
    color: "#44444d",
    lineHeight: "27px",
    fontSize: 22,
    fontWeight: 300,
  },
  author: {
    lineHeight: "22px",
    fontSize: 12,
    color: "#808290",
  },
  description: {
    color: "#44444d",
    lineHeight: "px",
    marginTop: 5,
  },
  publisher: {
    fontSize: 12,
    marginTop: "auto",
    marginBottom: "10px",
    "& > *": {
      textDecoration: "none",
      color: "#000",
      fontWeight: 900,
    },
  },
}));

const Article = ({ news }) => {
  const classes = useStyles();
  return (
    <Card className={classes.component}>
      <CardContent className={classes.container}>
        <Grid container>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <img src={news.url} alt="loading-img" className={classes.image} />
          </Grid>
          <Grid
            item
            lg={7}
            md={7}
            sm={7}
            xs={12}
            className={classes.rightContainer}
          >
            <Typography className={classes.title}>{news.title}</Typography>
            <Typography className={classes.author}>
              <b>short</b> by {news.author} /
              {new Date(news.timestamp).toDateString()}
            </Typography>
            <Typography className={classes.description}>
              {news.description}
            </Typography>
            <Typography className={classes.publisher}>
              read more at{" "}
              <a href={news.link} target="_blank" rel="noreferrer">
                {" "}
                {news.publisher}{" "}
              </a>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Article;
