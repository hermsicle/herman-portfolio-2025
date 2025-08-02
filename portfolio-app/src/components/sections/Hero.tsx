import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { keyframes } from '@emotion/react';
import { lazy, Suspense } from 'react';
import useRotatingAnimation from '../../hooks/useRotatingAnimation';
import HeroPhoto from '../../assets/herman-hero.png';

const FaGithub = lazy(() =>
  import('react-icons/fa').then((mod) => ({ default: mod.FaGithub }))
);
const FaLinkedin = lazy(() =>
  import('react-icons/fa').then((mod) => ({ default: mod.FaLinkedin }))
);
const FaEnvelope = lazy(() =>
  import('react-icons/fa').then((mod) => ({ default: mod.FaEnvelope }))
);

const HeroSection = styled.section`
  height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;
  /* border: 1px solid white; */
  /* background-color: rgba(0, 0, 0, 0.2); */

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: ${theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  width: 100%;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  border: none;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
    flex-direction: row-reverse;
  }
`;

const fadeUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  animation: ${fadeUpKeyframes} 0.5s ease-out forwards;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.light};
  line-height: 1.1;
  letter-spacing: -0.02em;
  white-space: nowrap;
`;

const Subtitle = styled.h2`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.2s forwards;
  opacity: 0;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  margin-bottom: ${theme.spacing.lg};
  opacity: 0.9;
  font-weight: 500;
`;

const Description = styled.p`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.4s forwards;
  opacity: 0;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  max-width: 600px;
  margin-bottom: ${theme.spacing.xl};
  opacity: 0.8;
  line-height: 1.7;
`;

const SocialLinks = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.6s forwards;
  opacity: 0;
  display: flex;
  gap: ${theme.spacing.md};

  a {
    color: ${theme.colors.textLight};
    font-size: 1.5rem;
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.glass.background};

    &:hover {
      color: ${theme.colors.light};
      transform: translateY(-3px);
      background: ${theme.colors.glass.card};
      box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.lg};

    a {
      font-size: 1.75rem;
    }
  }
`;

const HeroProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  position: relative;
  margin-bottom: 1rem;
  animation: ${fadeUpKeyframes} 0.5s ease-out forwards;

  @media (min-width: ${theme.breakpoints.md}) {
    height: 150px;
    width: 150px;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    height: 300px;
    width: 300px;
  }
`;

const ProfileImage = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 50%; /* optional */
  object-fit: cover;
  display: block;
  z-index: 1;
  filter: brightness(95%) contrast(110%) saturate(90%);
  transition: filter 0.3s ease;
`;

const RotatingSVG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const drift = keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(-500px, -500px); }
`;

const Starfield = styled.div<{ isHero: boolean | undefined }>`
  position: absolute;
  top: 0;
  inset: 0;
  background: radial-gradient(ellipse at center, #0f172a 0%, #020617 100%);
  overflow: hidden;
  z-index: 0;
  /* height: 100%;
  width: 100%; */
  height: ${(props) => (props.isHero ? '100%' : '100%')};
  width: ${(props) => (props.isHero ? '100%' : '100vw')};
  border-radius: ${(props) => (props.isHero ? '50%' : '')};

  .stars {
    position: absolute;
    width: 300%;
    height: 300%;
    background: transparent
      url('https://www.transparenttextures.com/patterns/stardust.png') repeat;
    animation: ${drift} 5s linear infinite;
    opacity: 0.4;
  }

  .stars:nth-child(2) {
    animation-duration: 180s;
    opacity: 0.2;
    background-size: 800px;
  }

  .stars:nth-child(3) {
    animation-duration: 240s;
    opacity: 0.1;
    background-size: 600px;
  }
`;

export default function StarfieldBackground({ isHero }: { isHero?: boolean }) {
  return (
    <Starfield isHero={isHero}>
      <div className="stars" />
      <div className="stars" />
      <div className="stars" />
    </Starfield>
  );
}

export const Hero = () => {
  const ellipseRef = useRotatingAnimation();

  return (
    <HeroSection id="hero" role="region" aria-label="Introduction">
      <div className="container">
        <HeroContent>
          <HeroProfileIcon>
            <StarfieldBackground isHero={true} />
            <ProfileImage
              // src="https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/Components/hero-placeholder.png?updatedAt=1739628240660"
              src={HeroPhoto}
              alt="Herman Liu"
              className=""
            />
            {/* SVG Ellipse */}
            <RotatingSVG ref={ellipseRef} className="">
              <svg
                className=""
                viewBox="0 0 412 413"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="206"
                  cy="206.401"
                  r="204.5"
                  stroke="#18F2E5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="18 36 54 72"
                />
              </svg>
            </RotatingSVG>
          </HeroProfileIcon>
          <div>
            <Title role="heading" aria-level={2}>
              Hi, I'm Herman
            </Title>
            <Subtitle role="heading" aria-level={3}>
              Software Engineer
            </Subtitle>
            <Description role="paragraph">
              I'm a front-end focused software engineer with a passion for
              building intuitive, beautiful, and high-impact web experiences.
            </Description>
            <SocialLinks role="list" aria-label="Social media links">
              <a
                href="https://github.com/hermsicle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                role="listitem"
              >
                <Suspense
                  fallback={
                    <div style={{ width: '1.5rem', height: '1.5rem' }} />
                  }
                >
                  <FaGithub aria-hidden="true" />
                </Suspense>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/liuherman/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                role="listitem"
              >
                <Suspense
                  fallback={
                    <div style={{ width: '1.5rem', height: '1.5rem' }} />
                  }
                >
                  <FaLinkedin aria-hidden="true" />
                </Suspense>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:hermanliu95@gmail.com"
                aria-label="Send me an email"
                role="listitem"
              >
                <Suspense
                  fallback={
                    <div style={{ width: '1.5rem', height: '1.5rem' }} />
                  }
                >
                  <FaEnvelope aria-hidden="true" />
                </Suspense>
                <span className="sr-only">Email</span>
              </a>
            </SocialLinks>
          </div>
        </HeroContent>
      </div>
    </HeroSection>
  );
};
