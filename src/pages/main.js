import Header from "../components/Header/Header";
import Benefits from '../components/Benefits/Benefits';
import Description from '../components/Description/Description';
import Numbers from '../components/Numbers/Numbers';
import News from "../components/News/News";
import Contact from '../components/Contact/Contact';

function Main() {
  return (
    <div className="Main">
      <Header />
      <Benefits />
      <Description />
      <Numbers />
      <News />
      <Contact />
    </div>
  );
}

export default Main;
