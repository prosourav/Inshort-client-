import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  image: {
    height: "268px",
    width: "88%",
    borderRadius: 5,
    objectFit: "cover",
  },
});

const Article = ({ news }) => {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item lg={5} md={5} sm={5} xs={12}>
              <img src={news.url} alt="loading-img" className={classes.image} />
            </Grid>
            <Grid item lg={7} md={7} sm={7} xs={12}>
              <Typography>{news.title}</Typography>
              <Typography>
                <b>short</b> by {news.author}/
                {new Date(news.timestamp).toDateString()}
              </Typography>
              <Typography>{news.description}</Typography>
              <Typography>
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
    </div>
  );
};

export default Article;
