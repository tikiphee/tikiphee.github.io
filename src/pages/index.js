import React from 'react'
import styled from 'styled-components';
import Link from 'gatsby-link'
import logoWhite from '../images/logo-white.svg';
import ciqLogo from '../images/ciq-logo.svg';
import telefonicaLogo from '../images/telefonica-logo.png';
import clevertechLogo from '../images/clevertech-logo.png';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.0875rem 1.45rem;

  h2 {
    margin: 40px 0px 20px 0px;
    text-align: center;
    color: #333;
  }

  h3 {
    font-weight: 300;
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Column = styled.div`
  flex: 1;
  margin: 0px 15px;
  text-align: center;
`;

const Hero = styled.div`
  padding-top: 20px;
  background-color: ${props => props.theme.blue};
  text-align: center;
  color: white;

  h1 {
    font-size: 32px;
  }
`;

const Logo = styled.img`
  margin-bottom: 10px;
`;

const Services = styled.div`
  background-color: ${props => props.theme.gray};
`;

const Clients = styled.div`
  text-align: center;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CompanyLogo = styled.img`
  margin: 20px;
  width: 160px;
`;

const Contact = styled.div`
  text-align: center;
  margin: 30px 0px 60px 0px;

  h3 {
    border-top: 1px solid #ccc;
    line-height: 36px;
    display: block;
    padding: 60px 0px 40px 0px;
  }
`;

const ContactButton = styled.a`
  border-color: ${props => props.theme.orange};
  border-style: solid;
  border-width: 3px;
  border-radius: 10px;
  color: #333;
  padding: 12px 30px;
  font-weight: 700;
  text-decoration: none;

  :hover {
    background-color: ${props => props.theme.orange};
    color: white;
  }
`;

const BigIconWrap = styled.div`
  text-align: center;
  color: #333;
  padding: 30px;
  font-size: 140px;
`;

const BigIcon = ({ icon }) => (
  <BigIconWrap>
    <i className={`fa fa-${icon}`} />
  </BigIconWrap>
);

const IndexPage = () => (
  <div>
    <Hero>
      <Container>
        <Logo src={logoWhite} />
        <h1>Desarrollo de aplicaciones web y móviles</h1>
        <p>¿Tienes un proyecto tecnológico que necesitas sacar adelante?<br />
          Te ayudamos a hacerlo realidad.
        </p>
      </Container>
    </Hero>
    <Services id="services">
      <Container>
        <h2>Servicios</h2>
        <Row>
          <Column>
            <BigIcon icon="globe" />
            <h3>Desarrollo WEB</h3>
            <p>Tenemos una dilatada experiencia realizando proyectos web. Somos especialistas en desarrollo Front, utilizando las últimas tecnoloǵias; React, Angular, Node, Next.js...</p>
          </Column>
          <Column>
            <BigIcon icon="bolt" />
            <h3>Prototipado rápido</h3>
            <p>Realizamos prototipos funcionales en ciclos de desarrollo muy cortos, para que puedas testear tu idea rápidamente reduciendo riesgos e implicando al usuario en el desarrollo lo antes posible.</p>
          </Column>
          <Column>
            <BigIcon icon="mobile" />
            <h3>Desarrollo móvil</h3>
            <p>Somos expertos en el desarrollo de aplicaciones móviles multi-plataforma, utilizando tecnologías como React Native, que permiten reducir costes al desarrollar aplicaciones para multiples plataformas.</p>
          </Column>
        </Row>
      </Container>
    </Services>
    <Clients id="clients">
      <Container>
        <h2>Clientes</h2>
        <p>Trabajamos con todo tipo de empresas, desde grandes multi-nacionales hasta pequeños emprendedores</p>
        <Logos>
          <CompanyLogo src={ciqLogo} />
          <CompanyLogo src={telefonicaLogo} />
          <CompanyLogo src={clevertechLogo} />
        </Logos>
      </Container>
    </Clients>
    <Contact id="contact">
      <Container>
        <h3>¿Quiéres saber más sobre nosotros?<br />¿Necesitas que te ayudemos con tu próximo proyecto?</h3>
        <ContactButton href="mailto:info@tikiphee.com">
          Contacta con nostros
        </ContactButton>
      </Container>
    </Contact>
  </div>
)

export default IndexPage
