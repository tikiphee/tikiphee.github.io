import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme';

import Header from '../components/Header';
import favicon from './favicon.png';
import 'font-awesome/css/font-awesome.css';
import './index.css';

const Footer = styled.div`
  background-color: ${props => props.theme.orange};
  color: white;
  text-align: center;
  padding: 30px;
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Tikiphee"
      meta={[
        { name: 'description', content: 'Desarrollo de aplicaciones web y móviles' },
        { name: 'keywords', content: 'aplicaciones web móvil desarrollo programación servicios' },
      ]}
    >
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <div>
          {children()}
        </div>
        <Footer>
          Tikiphee - 2018
        </Footer>
      </div>
    </ThemeProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
