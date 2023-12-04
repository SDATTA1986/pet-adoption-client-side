import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import AboutUs from "../AboutUs/AboutUs";
import CallToAction from "../CallToAction/CallToAction";
import ContactUs from "../Contact/ContactUs";
import PetsCategory from "../PetsCategory/PetsCategory";
import Services from "../Services/Services";
import Slider from "../Slider/Slidfer";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Slider/>
            <PetsCategory></PetsCategory>
            <CallToAction></CallToAction>
            <AboutUs></AboutUs>
            <Services></Services>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;