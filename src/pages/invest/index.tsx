import { Button, createStyles, Flex, Text } from "@mantine/core";
import { FaBandcamp, FaDocker } from "react-icons/fa";
import { SIGNUP_PATH } from "@/lib/seo";

const useStyles = createStyles((theme) => ({
  container: {
    margin: "3rem 0rem",
  },

  section: {
    width: "50%",

    [theme.fn.smallerThan("xl")]: {
      width: "80%"
    }
  },

  title: {
    fontFamily: "Calibri, Arial, sans-serif"
  },

  description: {
    fontFamily: "Calibri, Arial, sans-serif",
    fontSize: "1.5rem",
    lineHeight: "2.5rem",
    alignContent: "center"
  }
}));

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'buy-button-id'?: string; // Add any specific attributes you use.
        'publishable-key'?: string; // Add any specific attributes you use
        };
    }
  }
}

export default function Invest() {
  const { classes } = useStyles();

  return (
    <Flex direction="column" align={"center"} className={classes.container} gap={30}>
      <Flex direction="column" align="center" className={classes.section} gap={10}>
        <h1 className={classes.title}>
          Work With SEO Gangster
        </h1>
        <Button 
          mt={15}
          radius="lg" 
          component="a"
          href={SIGNUP_PATH}
          size={ "xl"}
          color="dark"
          variant="outline"
          leftIcon={<FaBandcamp />}
        >
          Join the signup list
        </Button>
      </Flex>

      <Flex direction="column" align="center" className={classes.section} gap={10}>
        <h1 className={classes.title}>
          Why partner with us
        </h1>
        <Text className={classes.description}>
          SEO Gangster is built for operators who want AI SEO agents doing real execution work: building pages, refreshing
          articles, and handling the technical follow-through that usually gets delayed. If that sounds like your kind of system,
          this is where to start.
        </Text>
        <Button 
          mt={15}
          radius="lg" 
          component="a"
          href={SIGNUP_PATH}
          size={ "xl"}
          color="dark"
          variant="outline"
          leftIcon={<FaDocker />}
        >
          Get started
        </Button>
      </Flex>

      <Flex direction="column" align="center" className={classes.section} gap={10}>
        <h1 className={classes.title}>
          Advisory
        </h1>
        <p className={classes.description}>
          We care about operators who know that search growth needs both creativity and discipline. If that sounds like you, reach out.
        </p>
      </Flex>

      <Flex direction="column" align="center" className={classes.section} gap={10}>
        <h1 className={classes.title}>
          Founder Bio
        </h1>
        <p className={classes.description}>
          <span><PeopleLink link="https://www.linkedin.com/in/shayan-arman/" content="Shayan Arman" /></span> graduated from Waterloo Computer Engineering and worked at Apple on Siri from 2017 to 2021 before starting SEO Gangster to turn AI into a real SEO execution system.
        </p>
      </Flex>
    </Flex>
  );
}

function PeopleLink({link, content}: {link: string, content: string}) {
  return (
    <a style={{textDecoration: "underline"}} href={link} target="_blank">
      { content }
    </a>
  )
}


{/* <Text c="dimmed" align="center" style={{ 
  fontStyle: 'italic',
  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
  padding: '2rem',
  borderRadius: '16px',
  border: '1px solid rgba(148, 163, 184, 0.2)',
  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
}}>
  <Text size="lg" mb="md"><Text weight={700} span={true} style={{ color: '#1e293b' }}>Business Valuation:</Text> <Text span={true} style={{ color: '#3730a3', fontWeight: 600 }}>$1 Million USD</Text></Text>
  <Text size="lg" mb="md"><Text weight={700} span={true} style={{ color: '#1e293b' }}>Total Shares Outstanding:</Text> <Text span={true} style={{ color: '#059669', fontWeight: 600 }}>1 Million Shares</Text></Text>
  <Text size="lg" mb="md"><Text weight={700} span={true} style={{ color: '#1e293b' }}>For Sale:</Text> <Text span={true} style={{ color: '#dc2626', fontWeight: 600 }}>100,000 at $1 each</Text></Text>
  <Text size="lg"><Text weight={700} span={true} style={{ color: '#1e293b' }}>Share Type:</Text> <Text span={true} style={{ color: '#7c3aed', fontWeight: 600 }}>Class A Voting</Text></Text>
</Text> */}


{/* <Script async src="https://js.stripe.com/v3/buy-button.js"></Script>
      <stripe-buy-button
          buy-button-id="buy_btn_1RyxVRDiSp5w1D9ctMJQJuP2"
          publishable-key="pk_live_51LkBIzDiSp5w1D9cTkO1gzwjZNmn8FCzO2UMApwriY75CMKNU1fKLyi9ZuLQwJtosnQUC2gnTu3zm5sqUVe9fGDt006NbdBfVf"
        >
      </stripe-buy-button> */}
