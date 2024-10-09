import Biography from "../component/Biography";
import Department from "../component/Department";
import Hero from "../component/Hero";
import MessageForm from "../component/MessageForm";
import Navs from "./Navs";
import FooterContent from "../component/FooterContent";

const Home = () => {
  return (
    <div style={{backgroundColor:"#f7f7f7"}}>
    <Navs/>
    <Hero />
    <Biography/>
    <Department/>
    <MessageForm />
    <FooterContent/>
    </div>
    
  )
}


export default Home;
