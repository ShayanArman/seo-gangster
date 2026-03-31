import { Modal, Text, Button, Flex, createStyles } from "@mantine/core";
import { SIGNUP_PATH } from "@/lib/seo";

const useStyles = createStyles((theme) => ({
  modalContainer: {
    width: "40rem",
    padding: "2rem",
    [theme.fn.smallerThan("md")]: {
      width: "100%",
      padding: "1rem",
    },
  },
  title: {
    margin: "0 auto",
    fontWeight: 700,
    fontSize: "1.5rem",
  },
  content: {
    textAlign: "center",
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
}));

export default function AnnouncementModal({
  opened,
  onClose,
}: {
  opened: boolean;
  onClose: () => void;
}) {
  const { classes } = useStyles();

  // Function to split text into animated letters for announcement modal
  const AnimatedText = ({ children, delay = 0 }: { children: string; delay?: number }) => {
    return (
      <span style={{ display: 'inline-block' }}>
        {children.split('').map((char, index) => (
          <span
            key={index}
            className="animated-letter"
            style={{
              animationDelay: `${delay + index * 0.1}s`,
              display: char === ' ' ? 'inline' : 'inline-block'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <>
      <style>
        {`
          @keyframes letterShine {
            0% {
              transform: translateX(-20px) scale(0.8);
              opacity: 0;
              color: #1976d2;
              text-shadow: 0 0 5px rgba(25, 118, 210, 0.3);
            }
            30% {
              transform: translateX(0) scale(1.3);
              opacity: 1;
              color: #42a5f5;
              text-shadow: 
                0 0 10px rgba(66, 165, 245, 0.8),
                0 0 20px rgba(66, 165, 245, 0.6),
                0 0 30px rgba(66, 165, 245, 0.4);
            }
            60% {
              transform: translateX(0) scale(1.1);
              color: #64b5f6;
              text-shadow: 
                0 0 15px rgba(100, 181, 246, 0.9),
                0 0 25px rgba(100, 181, 246, 0.7),
                0 0 35px rgba(100, 181, 246, 0.5);
            }
            100% {
              transform: translateX(0) scale(1);
              opacity: 1;
              color: #1976d2;
              text-shadow: 0 0 8px rgba(25, 118, 210, 0.5);
            }
          }

          .animated-letter {
            animation: letterShine 1s ease-in-out forwards;
            opacity: 0;
            font-weight: bold;
          }

          @keyframes textShine {
            0% {
              transform: translateX(-15px) scale(0.9);
              opacity: 0;
              color: #1976d2;
            }
            40% {
              transform: translateX(0) scale(1.2);
              opacity: 1;
              color: #42a5f5;
              text-shadow: 
                0 0 8px rgba(66, 165, 245, 0.7),
                0 0 16px rgba(66, 165, 245, 0.5);
            }
            70% {
              transform: translateX(0) scale(1.05);
              color: #64b5f6;
              text-shadow: 
                0 0 12px rgba(100, 181, 246, 0.8),
                0 0 20px rgba(100, 181, 246, 0.6);
            }
            100% {
              transform: translateX(0) scale(1);
              opacity: 1;
              color: #1976d2;
              text-shadow: 0 0 6px rgba(25, 118, 210, 0.4);
            }
          }

          .animated-text {
            animation: textShine 1s ease-in-out forwards;
            opacity: 0;
            font-weight: 500;
          }
        `}
      </style>
      <Modal
        opened={opened}
        onClose={onClose}
        title={
          <Text style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            🎉 🥳 <AnimatedText>Exciting Update</AnimatedText> 🎉 🥳
          </Text>
        }
        classNames={{
          title: `${classes.title}`,
        }}
        withCloseButton={false}
        centered
        radius="xl"
      >
        <Flex direction="column" align="center" justify="center">
          <Flex direction="column" mt={15}>
            <Text className={classes.content} weight={700}>
              New Product - AI SEO agents for weekly growth.
            </Text>
            <Text className={classes.content} italic={true} weight={500}>
              With SEO Gangster
            </Text>
          </Flex>
          <Button
            mt={10}
            style={{outline: 'none'}}
            component="a"
            href={SIGNUP_PATH}
            variant="outline"
            color={"dark"}
            radius="xl"
            size="xl"
          >
            Join the Signup List
          </Button>
        </Flex>
      </Modal>
    </>
  );
}
// import { Modal, Text, Button, Flex, createStyles } from "@mantine/core";

// const useStyles = createStyles((theme) => ({
//   modalContainer: {
//     width: "40rem",
//     padding: "2rem",
//     [theme.fn.smallerThan("md")]: {
//       width: "100%",
//       padding: "1rem",
//     },
//   },
//   title: {
//     margin: "0 auto",
//     fontWeight: 700,
//     fontSize: "1.5rem",
//   },
//   content: {
//     textAlign: "center",
//     fontSize: "1.2rem",
//     marginBottom: "1rem",
//   },
  
//   button: {
//     animation: "pulse 2s infinite",
//   },
// }));

// export function AnnouncementModal({
//   opened,
//   onClose,
// }: {
//   opened: boolean;
//   onClose: () => void;
// }) {
//   const { classes } = useStyles();

//   return (
//     <Modal
//       opened={opened}
//       onClose={onClose}
//       title={<Text>🎉 🥳 Exciting Update 🎉 🥳</Text>}
//       classNames={{
//         title: `${classes.title}`,
//       }}
//       withCloseButton={false}
//       centered
//       radius="xl"
//     >
//       <Flex direction="column" align="center" justify="center">
//         <Flex direction="column" mt={15}>
//           <Text className={classes.content} weight={700}>
//             New Product - Supercharge your Sales.
//           </Text>
//           <Text className={classes.content} italic={true} weight={500}>
//             With ZeroInbox.ai AI Workflows
//           </Text>
//         </Flex>
//         <Button
//           mt={10}
//           component="a"
//           href="https://seogangster.ai/signup"
//           target="_blank"
//           variant="outline"
//           color={"dark"}
//           radius="xl"
//           size="xl"
//           className={classes.button}
//         >
//           Check it out
//         </Button>
//       </Flex>
//     </Modal>
//   );
// }
