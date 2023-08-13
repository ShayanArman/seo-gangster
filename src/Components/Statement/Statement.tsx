import {
    createStyles,
    Text,
    rem,
  } from '@mantine/core';
  import React from 'react';
  
  const useStyles = createStyles((theme) => ({
  
    wrapper: {
      backgroundColor: "#333",
      width: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },  
  
    container: {
      width: '80%',
      height: 'auto',
      padding: '70px'
    },

    heading: {
      color: 'white',

      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: "#E65E8C",
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  }))
  
  export default function Statement() {
  
    const { classes } = useStyles();
  
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <Text fw={250} fz={rem(45)} className={classes.heading}>
                    Alleviate stress and improve efficiency with the Email Manager you didn't know you needed. 
                </Text>
            </div>
        </div>
    );
  }