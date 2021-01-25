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
  }
    //run these css when smaller devices only
    // [theme.breakpoints.down('sm')]:{
    // mainContainer:{
    //     flexDirection:"column-reverse"
    // }
}));