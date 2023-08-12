import {
    createStyles,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
  } from '@mantine/core';
  import React from 'react';
  import { Axe, Coin, HourglassHigh, Files } from 'tabler-icons-react';

  const featuredata = [
    {
      title: 'Organize',
      description:
        'Seamlessly organize thousands of emails into custom folders with a simple click.',
      icon: Files,
    },
    {
      title: 'Unsubscribe',
      description:
        'Overwhelmed by junk emails? Instantly opt-out from every unwanted message in your junk folder.',
      icon: Axe,
    },
    {
      title: 'Save Time',
      description:
        'Streamline your email sorting process from hours to minutes with Zero Inbox.',
      icon: HourglassHigh,
    },
    {
      title: 'Cost Effective',
      description:
        'Our pricing is carefully calibrated to offer our customers the value they deserve.',
      icon: Coin,
    },
  ];
  
  const useStyles = createStyles((theme) => ({

    wrapper: {
      backgroundColor: "#333",
      height: 'auto',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '45px',
      paddingTop: '80px'
    },  

    featuresdescription: {
      maxWidth: 800,
      margin: '0 auto',
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
  
    featurecard: {
      backgroundColor: 'white',
      boxShadow: '2px 2px 10px black',
    },
  
    cardtitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: "#E65E8C",
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
      },
    },
  }));

  
  export default function Features() {
    const { classes } = useStyles();
    const features = featuredata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.featurecard} padding="xl">
        <feature.icon size={rem(50)} strokeWidth={1.25} color={'#333'} />
        <Text fz="lg" fw={250} className={classes.cardtitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" fw={250} c='dimmed' mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));

    return (
      <div className={classes.wrapper}>  
        <Container size="lg" py="xl">
          <Text className={classes.featuresdescription} ta="center" mt="md" fw={250} size={rem(34)}>
            Relax and let those emails do their thing; we&apos;ll swoop in to tidy up the mess whenever you want
          </Text>
  
          <SimpleGrid cols={4} spacing="xl" mt={65} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {features}
          </SimpleGrid>
        </Container>
      </div>
    );
  }