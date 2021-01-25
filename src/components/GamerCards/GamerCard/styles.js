import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    container: {
      height: '450px',
      width: '300px',
    },
    profile: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'end',
      width: '75%',
      position: 'relative',
      bottom: '85px',
      left: '25px',
    },

    icon: {
      height: '100px',
      width: '100px',
      border: '0.25em solid white',
      position: 'relative',
      bottom: '35px',
      left: '20px'
    },
    media: {
      objectFit: 'cover',
      paddingTop: '56.25%',
      backgroundBlendMode: 'darken',
    },
    divider: {
      marginTop: '15px',
      borderLeft: '1px solid black',
      height: '130px'
    },
    gameMode: {
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'space-around',
      position: 'relative',
      bottom: '50px',
      icon: {
        width: '50px',
        height: '50px'
      }
    },
    border: {
      border: 'solid',
    },
    fullHeightCard: {
      height: '100%',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '15px',
      height: '100%',
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: 'white',
    },
    overlay2: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      color: 'white',
    },
    grid: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '20px',
    },
    title: {
      padding: '0 16px',
    },
    cardActions: {
      padding: '0 16px 8px 16px',
      display: 'flex',
      justifyContent: 'space-between',
    },
  });