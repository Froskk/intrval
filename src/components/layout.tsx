import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  min-height: 100vh;
`;

const ContentWrapper = styled.section`
  margin: ${p => p.theme.sizing.large};
  flex-grow: 1;

  font-size: ${p => p.theme.sizing.large};
`;

const Nav = styled.nav`
  height: ${p => p.theme.sizing.large};
`;

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => (
  <Wrapper>
    <ContentWrapper>Content here</ContentWrapper>
    <Nav>Nav here</Nav>
  </Wrapper>
);

export default Layout;
