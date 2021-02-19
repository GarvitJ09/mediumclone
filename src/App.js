import logo from './Assets/images.png';  
import Navbar from './Components/Navbar';
import './App.css';
import Card from './Containers/Card';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App"> 
    <div className="new2"> 
    <Navbar /><br /><br/><br/><br />
    <Body /></div><hr />
    <div className="card"> 
    <Card name="peter" place="germany" heading="Intro to psycology" time="7" date="7 feb" link={logo} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" /><br />
    <Card name="peter" place="germany" heading="Intro to psycology" time="7" date="7 feb" link={logo} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" /><br />
    <Card name="peter" place="germany" heading="Intro to psycology" time="7" date="7 feb" link={logo} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" /><br />
    <Card name="peter" place="germany" heading="Intro to psycology" time="7" date="7 feb" link={logo} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" /><br />
    <Card name="peter" place="germany" heading="Intro to psycology" time="7" date="7 feb" link={logo} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" /><br />
    <Card name="peter" place="germany" heading="Intro to psycology" time="7" date="7 feb" link={logo} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" /><br />
    </div>
    <Footer /> </div>
  );
}

export default App;
