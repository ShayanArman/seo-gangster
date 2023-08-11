import {
    createStyles,
    Text,
    rem,
  } from '@mantine/core';
  import React from 'react';
  
  const useStyles = createStyles((theme) => ({

    wrapper: {
        width: '100%',
        height: 'auto',
        backgroundColor: 'white',
    },

    container: {
        width: '100%',
        height: '250px',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '40px',
    },

    infodiv: {
        width: '20%',
        height: '100%',
        position: 'relative',
        paddingTop: '20px',
        display: 'flex-box',
        alignItems: 'top',
        justifyContent: 'left',
        borderTop: '2px solid black',

        '&::after': {
            bottom: 0,
            left: 0,
            content: "''",
            position: 'absolute',
            width: '15px',
            height: '1px',
            backgroundColor: 'black',
        },
    },

    infotitle: {
        width: '100%',
        height: 'auto',
        color: 'black',
        paddingBottom: '10px',
    },

    info: {
        width: '100%',
        height: 'auto',
        color: 'black',
    },

    percentage: {
        color: '#e65e8c'
    },

    bluehighlight: {
        color: '#47AFE6',
        height: 'auto'
    },


  }))

  export default function InfoSection() {

    const { classes } = useStyles();
  
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.infodiv}>
                    {/* <Text fw={275} fz={rem(25)} className={classes.infotitle}>title</Text> */}
                    <Text fw={225} fz={rem(18)} className={classes.info}>
                    <span className={classes.percentage}><b>89%</b></span> of office workers said daily work tasks such as sorting through an inbox of emails is one of the most unpleasant parts of working remotely.
                    </Text>   
                </div>
                <div className={classes.infodiv}>
                    {/* <Text fw={275} fz={rem(25)} className={classes.infotitle}>title</Text> */}
                    <Text fw={225} fz={rem(18)} className={classes.info}>
                    <span className={classes.percentage}><b>38%</b></span> of office workers said this "email fatigue" is likely to push them to quit their jobs.
                    </Text>   
                </div>
                <div className={classes.infodiv}>
                    {/* <Text fw={275} fz={rem(25)} className={classes.infotitle}>title</Text> */}
                    <Text fw={225} fz={rem(18)} className={classes.info}>
                    <span className={classes.percentage}><b>51%</b></span> of office workers 40 or under, listed the volume of emails they received as a top reason for why they’d consider leaving their jobs.
                    </Text>   
                </div>
                <div className={classes.infodiv}>
                    {/* <Text fw={275} fz={rem(25)} className={classes.infotitle}>title</Text> */}
                    <Text fw={225} fz={rem(18)} className={classes.info}>   
                    <span className={classes.percentage}><b>50%</b></span> of remote workers spent their own money on tools to help manage their productivity, and another <span className={classes.percentage}><b>17%</b></span> plan to do so in the future.  
                    </Text>   
                </div>
            </div>
        </div>

    )
  }