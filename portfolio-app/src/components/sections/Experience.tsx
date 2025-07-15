import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
// import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ExperienceSection = styled.section`
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

const ExperienceContent = styled.div`
  max-width: 1280px;
  margin: ${theme.spacing.lg} auto;
  text-align: center;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.lg};
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(52, 211, 153, 0.15); /* #34D399 with 15% opacity */

  @media (min-width: ${theme.breakpoints.md}) {
    margin: ${theme.spacing.xl} auto;
    padding: ${theme.spacing.xl};
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  margin-bottom: ${theme.spacing.md};
  /* border: 1px solid white; */
`;

const ExperienceYearText = styled(motion.h3)`
  font-weight: bold;
  font-size: clamp(1.5rem, 3.5vw, 1.75rem);
  line-height: 1.8;

  color: ${theme.colors.textLight};
  padding-right: ${theme.spacing.lg};
  width: 20%;

  /* border: 1px solid white; */
`;

const ExperienceDescriptionContainer = styled.div`
  /* border-left: 1px solid white; */
  display: flex;
  flex-direction: column;
  padding-left: ${theme.spacing.lg};
  width: 80%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 12%; /* Start % from top */
    height: 88%; /* Only % of the height */
    width: 1px;
    background-color: #fff; /* Replace with your border color */
  }
`;

const ExperienceRoleText = styled(motion.h3)`
  font-size: clamp(1.5rem, 3.5vw, 1.75rem);
  color: ${theme.colors.textLight};
  line-height: 1.8;
  opacity: 0.9;
  text-align: left;
  font-weight: bold;
`;

const ExperienceCompanyText = styled(motion.h4)`
  font-size: clamp(1rem, 2vw, 1.3rem);

  color: ${theme.colors.textLight};
  line-height: 1.8;
  opacity: 0.9;
  text-align: left;
  margin-bottom: ${theme.spacing.sm};
`;

const ExperienceDescriptionText = styled(motion.p)`
  font-size: clamp(1rem);

  color: ${theme.colors.textMuted};
  line-height: 1.5;
  opacity: 0.9;
  text-align: left;
`;

const ExperienceDot = styled(motion.div)`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${theme.colors.accent};
  border: 2px solid ${theme.colors.accent};
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: -9px;
  opacity: 1;
  transition: all ${theme.transitions.default};

  &:hover {
    opacity: 1;
    transform: scale(1.2);
    border-color: ${theme.colors.accent};
    background: ${theme.colors.accent};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.colors.accent}40,
      0 0 0 4px ${theme.colors.accent}20;
  }

  &::before {
    content: attr(data-tooltip);
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    background: ${theme.colors.glass.card};
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: all ${theme.transitions.default};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    color: ${theme.colors.light};
    font-weight: 500;
    letter-spacing: 0.5px;

    @media (max-width: ${theme.breakpoints.sm}) {
      right: auto;
      left: -16px;
      transform: translate(-100%, -50%);
      font-size: 0.85rem;
      padding: 6px 12px;
    }
  }
`;

const experienceCategories = [
  {
    title: 'Founding Frontend Software Engineer',
    company: 'tresle.ai',
    year: '2024 - 2025',
    description: `Led frontend architecture and development for enterprise-grade GenAI orchestration platforms, delivering scalable admin dashboards with features like app onboarding data connectors (Airbyte, S3, MySQL/Postgres), LLM models, metrics, insights, file uploads, and granular role-based access control. \n
                  Engineered a standalone Reference UI enabling natural language queries with rich AI responses supported by text, charts, tables, and image references—improving insight trust and validation. \n
                  Developed SaaS platform features including multi-tenant app onboarding, user access management, Pinecone API key settings, and a React/TypeScript chat app with persistent history and a file-query Playground. \n
                  Partnered cross-functionally with backend, AI, and product teams to align API contracts and UX goals; built reusable component libraries and optimized UI/UX for accessibility and performance, accelerating feature delivery and reducing defects.
                  `,
  },
  {
    title: 'Software Engineer',
    company: 'TensorIoT',
    year: '2021 - 2024',
    description: `Delivered 15+ responsive, pixel-perfect React/TypeScript applications by transforming Figma designs into production-ready UIs; partnered with UX designers, stakeholders, and cross-functional teams to build intuitive dashboards and workflows—improving user task efficiency by up to 30%. \n
                  Built two React Native apps: one for warehouse RFID tracking using MQTT, and another for Bluetooth-enabled smart furniture control with AWS AppSync—enabling real-time physical device interaction. \n
                  Integrated AWS services (Lambda, API Gateway, Cognito, DynamoDB, S3) to support secure data ingestion, telemetry visualization, and batch processing for 10K+ users. across multiple production environments. \n
                  Collaborated with backend, product, and DevOps teams to streamline API integration and frontend performance, accelerating delivery by 25% and supporting cloud migration efforts.
                  `,
  },
  {
    title: 'Freelance Frontend Developer',
    company: 'Tirios',
    year: '2021 - 2022',
    description: `Developed a custom invoice generation feature tailored to the client's business needs, improving billing efficiency and accuracy. \n
                Revamped an existing tenant dashboard application using React and Tailwind CSS, resulting in a more modern, responsive, and user-friendly interface. \n
                Collaborated closely with stakeholders to gather requirements, propose UI/UX solutions, and ensure delivery aligned with business goals. \n
                Maintained clear and proactive communication throughout the project lifecycle, ensuring expectations and timelines were consistently met. \n
                Contributed to a custom investment portal enabling customers to invest in real estate through tokenized assets, supporting a seamless and secure user experience.
                `,
  },
];

const Experience = () => {
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
    <ExperienceSection
      id="experience"
      role="region"
      aria-label="Experience Information"
    >
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle variants={itemVariants} role="heading" aria-level={2}>
            Experience
          </SectionTitle>
          <ExperienceContent role="article">
            {experienceCategories.map(
              ({ title, company, year, description }, index) => {
                return (
                  <ExperienceContainer>
                    <ExperienceYearText>{year}</ExperienceYearText>
                    <ExperienceDescriptionContainer>
                      <ExperienceDot />
                      <ExperienceRoleText>{title}</ExperienceRoleText>
                      <ExperienceCompanyText>{company}</ExperienceCompanyText>
                      <ExperienceDescriptionText>
                        {description.split('\n').map((line, i) => {
                          return (
                            <span key={i}>
                              {line}
                              {i < description.split('\n').length - 1 && (
                                <br
                                  style={{
                                    margin: '0.25rem 0px',
                                    border: '1px solid white',
                                  }}
                                />
                              )}
                            </span>
                            // Using <span> instead of <div> to avoid block-level issues inside <p>
                            // Adding a <br /> only if it's not the last line to avoid extra space at the end
                          );
                        })}
                      </ExperienceDescriptionText>
                    </ExperienceDescriptionContainer>
                  </ExperienceContainer>
                );
              }
            )}
          </ExperienceContent>
        </motion.div>
      </div>
    </ExperienceSection>
  );
};

export default Experience;
