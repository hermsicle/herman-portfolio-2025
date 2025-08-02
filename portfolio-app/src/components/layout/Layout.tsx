import styled from '@emotion/styled';
import type { MotionProps } from 'framer-motion';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { useEffect, useState, type ReactNode } from 'react';
import { theme } from '../../styles/theme';
import { FloatingNav } from '../navigation/FloatingNav';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';
import StarfieldBackground from '../sections/Hero';
// import LogoIcon from '../../../public/android-chrome-512x512.png';
// import Logo_ from '../../assets/logo.png';
import { FiMenu } from 'react-icons/fi';

interface LayoutProps {
  children: ReactNode;
}

const LayoutWrapper = styled.div`
  @media print {
    background: white !important;
    color: black !important;

    * {
      color: black !important;
      text-shadow: none !important;
      box-shadow: none !important;
    }

    section {
      min-height: auto !important;
      padding: 2rem 0 !important;
      page-break-inside: avoid;
    }

    a[href]:after {
      content: ' (' attr(href) ')';
      font-size: 0.8em;
    }
  }

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
  background: transparent;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 70% 30%,
      ${theme.colors.accent}15 0%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 0;
  }
`;

const Header = styled.header`
  /* background: ${theme.colors.glass.background}; */
  background: transparent;
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.md} 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media print {
    display: none;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    height: 20px;
    /* background: linear-gradient(
      to bottom,
      ${theme.colors.glass.background},
      transparent
    ); */
  }
`;

const Nav = styled.nav`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${theme.spacing.md};
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
`;

const Logo = styled(motion.div)`
  color: ${theme.colors.light};
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
    margin-right: ${theme.spacing.sm};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  display: none;

  a {
    color: ${theme.colors.textLight};
    transition: all ${theme.transitions.default};
    font-weight: 500;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: 4px;

    &:hover {
      color: ${theme.colors.light};
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: ${theme.spacing.md};
  }

  @media (min-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

const MenuContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const MenuButton = styled(motion.button)`
  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const Dropdown = styled(motion.ul)`
  position: absolute;
  top: 100%;
  left: 0;
  margin: 8px 0 0 0;
  padding: 8px 0;
  background: ${theme.colors.glass.card};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  list-style: none;
  min-width: 180px;
  z-index: 1000;
`;

const MenuItem = styled.li`
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    /* background: #f0f0f0; */
    background: ${theme.colors.glass.background};
  }

  a {
    color: ${theme.colors.textLight};
    text-decoration: none;
    display: block;
    width: 100%;

    &:hover {
      color: ${theme.colors.light};
    }
  }
`;

const Main = styled.main`
  flex: 1;
  margin-top: 4.5rem;
  width: 100%;
  overflow-x: hidden;
`;

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: ${theme.colors.accent};
  color: ${theme.colors.textDark};
  padding: ${theme.spacing.sm};
  z-index: 9999;
  transition: top 0.2s;

  &:focus {
    top: 0;
  }
`;

const Footer = styled.footer`
  /* background: ${theme.colors.glass.background}; */
  background: transparent;
  backdrop-filter: blur(8px);
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;
  text-align: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    height: 20px;
    /* background: linear-gradient(
      to top,
      ${theme.colors.glass.background},
      transparent
    ); */
  }
`;

export const Layout = ({ children }: LayoutProps) => {
  useKeyboardNavigation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Add keyboard navigation instructions to console
    console.info(
      'Keyboard Navigation:\n',
      '- Arrow Up/Down or PageUp/PageDown: Navigate between sections\n',
      '- Home: Go to top\n',
      '- End: Go to bottom'
    );
  }, []);

  return (
    <LayoutWrapper>
      <StarfieldBackground />
      <SkipLink href="#main-content">Skip to main content</SkipLink>

      <Header role="banner">
        <Nav role="navigation" aria-label="Main navigation">
          <div className="container">
            <Logo
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              role="heading"
              aria-level={1}
            >
              {/* <img src={LogoIcon} /> */}
              {/* Herman Liu */}
              hermanliu
            </Logo>
            <MenuContainer>
              <MenuButton
                aria-label="Menu"
                aria-haspopup="true"
                aria-controls="navigation-menu"
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
              >
                <FiMenu size={24} color={theme.colors.light} />
              </MenuButton>
              <AnimatePresence>
                {isOpen && (
                  <Dropdown
                    initial="closed"
                    animate="open"
                    exit="closed"
                    // variants={dropdownVariants}
                  >
                    <MenuItem>
                      <a
                        href="#about"
                        role="listitem"
                        aria-label="About section"
                      >
                        About
                      </a>
                    </MenuItem>

                    <MenuItem>
                      {' '}
                      <a
                        href="#skills"
                        role="listitem"
                        aria-label="Skills section"
                      >
                        Skills
                      </a>
                    </MenuItem>

                    <MenuItem>
                      {' '}
                      <a
                        href="#experience"
                        role="listitem"
                        aria-label="Experience section"
                      >
                        Experience
                      </a>
                    </MenuItem>
                    <MenuItem>
                      {' '}
                      <a
                        href="#projects"
                        role="listitem"
                        aria-label="Projects section"
                      >
                        Projects
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#contact"
                        role="listitem"
                        aria-label="Contact section"
                      >
                        Contact
                      </a>
                    </MenuItem>
                  </Dropdown>
                )}
              </AnimatePresence>
            </MenuContainer>
            <NavLinks role="list">
              <a href="#about" role="listitem" aria-label="About section">
                About
              </a>

              <a href="#skills" role="listitem" aria-label="Skills section">
                Skills
              </a>
              <a
                href="#experience"
                role="listitem"
                aria-label="Experience section"
              >
                Experience
              </a>
              <a href="#projects" role="listitem" aria-label="Projects section">
                Projects
              </a>
              <a href="#contact" role="listitem" aria-label="Contact section">
                Contact
              </a>
            </NavLinks>
          </div>
        </Nav>
      </Header>
      <Main id="main-content" role="main" tabIndex={-1}>
        {children}
      </Main>
      <FloatingNav />
      <Footer role="contentinfo">
        <div className="container">
          <p>© {new Date().getFullYear()} Herman Liu. All rights reserved.</p>
        </div>
      </Footer>
    </LayoutWrapper>
  );
};
