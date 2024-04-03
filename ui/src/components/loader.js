import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    color: "#fff",
    zIndex: "9999" /* Sit on top */,
    backgroundColor: "rgb(0, 0, 0)" /* Fallback color */,
    backgroundColor: "rgba(0, 0, 0, 0.4) " /* Black w/ opacity */,
  },
}));

function Loader({ loaded }) {
  const classes = useStyles();

  return (
    <>
      {loaded ? (
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" />
          {/* <h5 className='text-white'>Loading your content........</h5> */}
        </Backdrop>
      ) : null}
    </>
  );
}

export default Loader;
