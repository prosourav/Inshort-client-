import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
// import { Menu } from "@mui/icons-material";

const useStyle = makeStyles({
  header: {
    background: "#fff",
    height: "70px",
  },
  logo: {
    height: "55px",
    margin: "auto",
    paddingRight: "70px",
  },
  menu: {
    color: "#000",
  },
});

const Header = () => {
  const classes = useStyle();
  const logo =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";

  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Menu className={classes.menu} />
        <img src={logo} alt="logo" className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
