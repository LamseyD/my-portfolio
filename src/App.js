import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main.js';
import { Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
          <Header className = "header-color" title="Hi." scroll>
            <Navigation>
              <Link to="/about-me">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/fun">Fun Things</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/about-me">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Project</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/fun">Fun Things</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
