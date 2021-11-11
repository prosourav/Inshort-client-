import "./App.css";
import { Box, makeStyles } from "@material-ui/core";
import Header from "./components/Header/Header";
import InfoHeader from "./components/InfoHeader/Infoheader";
import Articles from "./components/Article/Articles";

const useStyle = makeStyles({
  container: {
    marginTop: "110px",
    width: "60%",
    margin: "0 auto",
  },
});

function App() {
  const classes = useStyle();
  return (
    <Box>
      <Header />
      <Box className={classes.container}>
        <InfoHeader />
        <Articles />
      </Box>
    </Box>
  );
}

export default App;
