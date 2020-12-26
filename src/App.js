import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main.js';
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Dinh Lam Dang" scroll style={{ backgroundColor: "#1c1c1e" }}>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/about-me">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/fun">Fun Things</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/about-me">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Project</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/fun">Fun Things</Link>
            </Navigation>
          </Drawer>

          <Content>
            <div className="page-content" />
            <Main />
            <div className="page-footer" style={{ backgroundColor: "#1c1c1e", position: "fixed", width: "100%", bottom: "0", height: "150px" }}>
              <div className="social-links">
                <a href="https://github.com/LamseyD" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/dinhlam/" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/lamseyd/" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-instagram-square" aria-hidden="true" />
                </a>
              </div>
            </div>

          </Content>


        </Layout>
      </div>
    </div>
  );
}

export default App;
