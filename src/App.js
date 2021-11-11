import "./App.css";
import { Box, makeStyles } from "@material-ui/core";
import Header from "./components/Header/Header";
import InfoHeader from "./components/InfoHeader/Infoheader";

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
      </Box>
    </Box>
  );
}

export default App;
