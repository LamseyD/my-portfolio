import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '200px'
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  cardItem: {
    display: "flex", alignItems: "center", justifyContent:"center"
  },
  topPadding: {
    paddingTop: "15em"
  },
  secondParagraph: {
    paddingTop: "8em",
    paddingBottom: "10em"
  },
  videoPlayer: {
    width: "50%"
  },
    //run these css when smaller devices only
    [theme.breakpoints.down('sm')]:{
    topPadding:{
      paddingTop: "5em",
      paddingBottom: "5em"
    },
    videoPlayer: {
      width: "70%"
    },
    secondParagraph: {
      paddingTop: "20em"
    }
  }
}));