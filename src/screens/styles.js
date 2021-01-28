import { makeStyles } from '@material-ui/core/styles';
import reactBG from '../assets/reactbg1.jpg'
import vueBG from '../assets/vue.jpg'
import gameBG from '../assets/game.jpg'

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '82vh',
    backgroundImage: `url(${reactBG})`,
    backgroundRepeat: "repeat-y",
    backgroundPosition: "center", 
    backgroundSize: "cover"
  },
  vueContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '82vh',
    backgroundImage: `url(${vueBG})`,
    backgroundRepeat: "repeat-y",
    backgroundPosition: "center", 
    backgroundSize: "cover"
  },
  gameContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '82vh',
    backgroundImage: `url(${gameBG})`,
    backgroundRepeat: "repeat-y",
    backgroundPosition: "center", 
    backgroundSize: "cover"
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
  cardItemLast: {
    display: "flex", alignItems: "center", justifyContent:"center"
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
    },
    cardItemLast: {
      paddingBottom: "10em"
    }
  },
  [theme.breakpoints.down('md')]:{
    mainContainer: {
      backgroundImage: "none",
    },
    vueContainer: {
      backgroundImage: "none",
    },
    gameContainer: {
      backgroundImage: "none"
    },

  }
}));