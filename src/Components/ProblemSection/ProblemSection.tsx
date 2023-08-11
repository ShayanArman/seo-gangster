import {
  createStyles,
  Text,
  rem,
} from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => ({

  wrapper: {
    backgroundColor: "#333",
    height: 'auto',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30px',
    paddingBottom: '30px',
  },  

  container: {
    width: '100%',
    height: 'auto',
    fontWeight: 600,
    fontSize: rem(24),
    position: 'relative',
  },

  heading: {
    margin: '0 auto',
    color: 'white',
    textAlign: 'center',
    paddingTop: '50px',
    paddingBottom: '25px',
    paddingLeft: '100px',
    paddingRight: '100px',
  },

  pinkhighlight: {
      color: '#e65e8c'
  },

  bluehighlight: {
      color: '#47AFE6'
  },

  vertline: {
    width: '230px',
    height: '1px',
    background: '#e65e8c',
    position: 'relative',
    transform: 'Rotate(90deg)',
    left: '24%',
    top: 253
  },

  horizline1: {
    width: '35px',
    height: '1px',
    background: '#e65e8c',
    position: 'relative',
    left: '31.95%',
    top: 137,
  },

  horizline2: {
      width: '550px',
      height: '1px',
      background: '#e65e8c',
      position: 'relative',
      left: 420,
      top: 253
    },

  horizline3: {
    width: '35px',
    height: '1px',
    background: '#e65e8c',
    position: 'relative',
    left: '31.95%',
    top: 365,
  },

  statscontainer: {
    width: '100%',
    height: '500px',
    position: 'relative',
    display: 'flex',
    margin: '0 auto'
  },

  titlediv: {
      width: '33%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto',
  },

  title: {
      color: '#e65e8c',
  },

  statsdiv: {
      width: '33%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
  },

  stats: {
    color: 'rgb(255,255,255, .7)',
    width: '400px',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: '25px',
    background: '#333',
    boxShadow: '5px 5px 15px black',
    borderRadius: '10px',
    margin: '0 auto',
    outline: '1px solid #444'
  },
}))

export default function ProblemSection() {

  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>  
      <div className={classes.container}>
          <Text fw={250} size={rem(45)} className={classes.heading}>Zero Inbox is all about reclaiming your <span className={classes.pinkhighlight}>time</span> and <span className={classes.bluehighlight}>focus</span> from the clutches of an unmanaged inbox.</Text>
          <div className={classes.vertline}></div>
          <div className={classes.horizline1}></div>
          <div className={classes.horizline2}></div>
          <div className={classes.horizline3}></div>
          <div className={classes.statscontainer}>
              <div className={classes.titlediv}>
                  <Text fw={225} size={rem(30)} className={classes.title}>The average employee</Text>
              </div>
              <div className={classes.statsdiv}>
                  <Text fw={200} size={rem(20)} className={classes.stats}>Loses 2.5 hours per day due to ineffective communication and collaboration in the workplace</Text>
                  <Text fw={200} size={rem(20)} className={classes.stats}>Spends 17 hours per week reading and sending work emails but 30% of these emails are neither urgent nor important </Text>
              </div>
              <div className={classes.statsdiv}>
                  <Text fw={200} size={rem(20)} className={classes.stats}>Receives 74 emails during the workday while only sending 26 emails</Text>
              </div>
          </div>
      </div>
    </div>
  );
}