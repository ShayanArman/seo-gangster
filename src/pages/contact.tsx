import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
} from '@mantine/core';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';
// import { ContactIconsList } from '../ContactIcons/ContactIcons';
import FooterSection from "@/Components/Footer";
import { useState } from "react";
import ZeroHeader, { HEADER_PIXEL_HEIGHT } from '@/Components/ZeroHeader/ZeroHeader';

const useStyles = createStyles((theme) => ({

  wrapper: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },

  container: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundColor: 'white',
    borderRadius: theme.radius.lg,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    color: '#333',
    lineHeight: 1,
  },

  description: {
    color: '#333',
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: '#333',
    padding: theme.spacing.xl,
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: '#333',

    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: 'white',
  },

  control: {
    border: '2px solid #E65E8C',
    color: 'white',
    transition: '0.3s ease-out',
    fontSize: theme.fontSizes.md,
    fontWeight: 400,
    backgroundColor: '#333',
    borderRadius: '',

    "&:hover": {
      transition: '0.3s ease-in',
      backgroundColor: "#E65E8C"
    },

  },
}));

const social = [BrandTwitter, BrandYoutube, BrandInstagram];

export default function ContactUs() {
  const { classes } = useStyles();

  const [scrolledToHeader, setScrolledToHeader] = useState(false);

  const onEnter = () => {
    setScrolledToHeader(false);
  };

  const onLeave = () => {
    setScrolledToHeader(true);
  };

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size="1.4rem" stroke='1.5' />
    </ActionIcon>
  ));

  return (
    <>
    
    <div className={classes.wrapper}>
    <ZeroHeader scrolledToHeader={scrolledToHeader} />
        <div className={classes.container}>
          <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <div>
              <Title className={classes.title}>Contact us</Title>
              <Text className={classes.description} mt="sm" mb={30}>
                Leave your email and we will get back to you within 24 hours
              </Text>

              {/* <ContactIconsList variant="white" /> */}

              <Group mt="xl">{icons}</Group>
            </div>
            <div className={classes.form}>
              <TextInput
                label="Email"
                placeholder="your@email.com"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <TextInput
                label="Name"
                placeholder="John Doe"
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <Textarea
                required
                label="Your message"
                placeholder="I want to order your goods"
                minRows={4}
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />

              <Group position="right" mt="md">
                <Button className={classes.control} radius='lg'>Send message</Button>
              </Group>
            </div>
          </SimpleGrid>
        </div>
      </div>
      <FooterSection />
    </>
  );
}