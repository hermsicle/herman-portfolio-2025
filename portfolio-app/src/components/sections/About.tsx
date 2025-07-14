import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
// import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import AboutPhoto from '../../assets/herman-about.png';

const ContactSection = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }

  .container {
    position: relative;
    z-index: 2;
    width: 95%;
    margin: 0 auto;

    @media (min-width: ${theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.textLight};
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing.xl};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: ${theme.spacing.lg} auto;
  text-align: center;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.lg};
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(52, 211, 153, 0.15); /* #34D399 with 15% opacity */
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  @media (min-width: ${theme.breakpoints.lg}) {
    margin: ${theme.spacing.xl} auto;
    padding: ${theme.spacing.xl};
    flex-direction: row-reverse;
  }
`;

const AboutText = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.1rem);
  /* margin-bottom: ${theme.spacing.lg}; */
  color: ${theme.colors.textLight};
  line-height: 1.6;
  opacity: 0.9;
  text-align: left;

  @media (min-width: ${theme.breakpoints.md}) {
    /* margin-bottom: ${theme.spacing.xl}; */
  }
`;

const AboutImage = styled.div`
  flex-shrink: 0;
  img {
    border-radius: 12px;
    width: 300px;
    height: auto;
    object-fit: cover;
    margin: 0 auto ${theme.spacing.lg} auto;

    /* Green overlay gradient */
    background: linear-gradient(
      to bottom right,
      rgba(52, 211, 153, 0.1),
      rgba(52, 211, 153, 0.15)
    );
    mix-blend-mode: overlay;
    filter: hue-rotate(10deg) saturate(1.1);
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    img {
      width: 380px;
      margin-left: ${theme.spacing.lg};
      box-shadow: 0 8px 32px rgba(52, 211, 153, 0.15); /* #34D399 with 15% opacity */
      /* margin-top: 120px; */
    }
  }
`;

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ContactSection id="about" role="region" aria-label="Contact Information">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle variants={itemVariants} role="heading" aria-level={2}>
            About Me
          </SectionTitle>
          <AboutContent role="article">
            <AboutImage aria-label="Photo of Herman">
              <img src={AboutPhoto} alt="" />
            </AboutImage>
            <AboutText variants={itemVariants} role="paragraph">
              Hi, I’m Herman — a front-end software engineer with a passion for
              building intuitive, beautiful, and high-impact web experiences. My
              path into tech wasn’t traditional, but that’s what makes it
              meaningful. Coming from a non-technical background, I discovered
              software engineering through curiosity and grit, and quickly
              realized that front-end development is where my creativity and
              problem-solving instincts thrive.
              <br />
              <br />
              I’m drawn to the challenge of turning complex ideas into
              user-friendly interfaces, and I enjoy collaborating with teams to
              bring products to life. I’ve found my groove in fast-paced
              environments, where a sense of urgency drives focus, ownership,
              and momentum. Whether I’m debugging tricky UI issues or designing
              a smooth user experience, I love the fast feedback loop that
              front-end work offers — and how it constantly pushes me to grow.
              <br />
              <br />
              Outside of coding, I’m really into cars — I appreciate the design,
              precision, and engineering behind them. More recently, I’ve picked
              up Brazilian Jiu-Jitsu, which has been a humbling and motivating
              practice that teaches discipline, adaptability, and persistence.
              <br />
              <br />
              Always learning, always building.
            </AboutText>
          </AboutContent>
        </motion.div>
      </div>
    </ContactSection>
  );
};

export default Contact;
