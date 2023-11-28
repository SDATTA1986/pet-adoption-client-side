import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ins1 from '../../../assets/ins1.jpg'
import ins2 from '../../../assets/ins2.jpg'
import ins3 from '../../../assets/ins3.jpg'
import { FaQuoteLeft } from "react-icons/fa";
const CallToAction = () => {
    return (
        <section>

            <SectionTitle heading={"Call to Action"}></SectionTitle>


            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full " style={{ backgroundImage: `url(${ins1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                        <FaQuoteLeft className="text-7xl text-white" />
                        <p className="text-yellow-500 text-2xl font-bold w-1/2 text-center">Give a homeless pet a chance to be the hero in your life's story. Adopt, and let the journey of unconditional love begin</p>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle text-black">❮</a>
                            <a href="#slide2" className="btn btn-circle text-black">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full " style={{ backgroundImage: `url(${ins2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                        <FaQuoteLeft className="text-7xl text-white" />
                        <p className="text-yellow-500 text-2xl font-bold w-1/2 text-center">Choosing adoption is not just bringing a pet home; it's welcoming a forever friend who will fill your days with joy, laughter, and unwavering loyalty.</p>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle text-black">❮</a>
                            <a href="#slide3" className="btn btn-circle text-black">❯</a>
                        </div>
                    </div>
                </div>
                
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={ins3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className="flex flex-col items-center">
                        <FaQuoteLeft className="text-7xl text-white" />
                        <p className="text-yellow-500 text-2xl font-extrabold w-1/2 text-center">Every pet deserves a loving family. Consider adoption and make a difference in a furry friend's life</p>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>


            </div>



        </section>
    );
};

export default CallToAction;