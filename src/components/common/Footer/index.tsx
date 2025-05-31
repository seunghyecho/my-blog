import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 3rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const FooterLink = styled(Link)`
  color: #a0a0a0;
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    color: #ffffff;
  }
`;

const FooterText = styled.p`
  color: #a0a0a0;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 2rem 2rem 0;
  border-top: 1px solid #333;
  text-align: center;
`;

const Copyright = styled.p`
  color: #a0a0a0;
  font-size: 0.8rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #a0a0a0;
  transition: color 0.2s ease;
  
  &:hover {
    color: #ffffff;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>
            <FooterLink href="/about">About Blog →</FooterLink>
            </FooterTitle>
        </FooterSection>

        {/* <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
        </FooterSection> 

        <FooterSection>
          <FooterTitle>Connect With Us</FooterTitle>
          <SocialLinks>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </SocialLink>
            <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        */}
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {new Date().getFullYear()} Seunghye Cho. All rights reserved.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 