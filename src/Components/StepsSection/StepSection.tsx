import {
    createStyles,
    Text,
    Card,
    rem,
  } from '@mantine/core';
  import React from 'react';
  import { HexagonNumber1, HexagonNumber2, HexagonNumber3, HexagonNumber4 } from 'tabler-icons-react'
  
  const stepdata = [
    {
      title: 'Step',
      description:
        "Simply sign-in to your email account through Zero Inbox's web portal.",
      icon: HexagonNumber1,
    },
    {
      title: 'Step',
      description:
        'Allow our AI 25 seconds to sort your email into designated folders such as personal, promotions and travel',
        icon: HexagonNumber2,
    },
    {
      title: 'Step',
      description:
        'In one easy click, unsubscribe from all mail in your junk folder or delete all mail in a designated folder',
        icon: HexagonNumber3,
    },
    {
      title: 'Step',
      description:
        'Spend your new found free time however you please. Email stress free thanks to Zero Inbox',
        icon: HexagonNumber4,
    },
  ];

  
  const useStyles = createStyles((theme) => ({

    wrapper: {
      backgroundColor: "#333",
      height: 'auto',
      width: '100%',
      marginTop: '10px'
    },  

    container: {
        width: '100%',
        height: '650px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    /* stepsbg is in order to have the top right corner of stepsdiv white */

    stepsbg: {
        width: '50%',
        height: '100%',
        backgroundColor: 'white',
    },

    stepsdiv: {
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(45deg, #333 95%, white calc(95% + 2px))',
        padding: '50px',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center'
    },

    stepsheading: {
      color: 'white',
      textAlign: 'center',
      marginTop: '40px',
      marginBottom: '15px',
    },

    stepscard: {
      width: '100%',
      height: 'auto',
      background: "#333",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    stepstitle: {
      color: "#e65e8c",
      textAlign: 'center'
    },

    stepsdescription: {
      color: 'white',
      marginLeft: '30px'
    },

    imgdiv: {
        width: '50%',
        height: '100%',
        backgroundImage: 'linear-gradient(45deg, #333 5%, white calc(5% + 2px))',
        borderBottomLeftRadius: '15px',
    },
  }));

  
  export default function Features() {
    const { classes } = useStyles();

    const steps = stepdata.map((step) => (
      <Card key={step.title} className={classes.stepscard}>
        <div>
            <Text fz={rem(25)} fw={225} className={classes.stepstitle}>
            {step.title}
            </Text>
            <step.icon size={rem(55)} strokeWidth={1} color={'#e65e8c'} />
        </div>
        <Text fz={rem(17)} fw={225} className={classes.stepsdescription} >
          {step.description}
        </Text>
      </Card>
    ));
  
    return (
      <div className={classes.wrapper}>  
        <div className={classes.container}>
            {/* steps bg div is in order to have the top right corner of stepsdiv white */}
            <div className={classes.stepsbg}>
                <div className={classes.stepsdiv}>
                    {/* <Text fw={225} size={rem(33)} className={classes.stepsheading}>
                        Elevate your email experience with Zero Inbox
                    </Text> */}
                    {steps}
                </div>
            </div>
            <div className={classes.imgdiv}>
                <img></img>
            </div>
        </div>
      </div>
    );
  }