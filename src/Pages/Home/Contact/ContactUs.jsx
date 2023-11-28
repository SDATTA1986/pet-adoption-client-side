
import { FaMobileAlt} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const ContactUs = () => {
    return (
        <section>
            <SectionTitle heading={"Contact Us"}></SectionTitle>
           <div className="grid grid-cols-3 gap-10 my-20" >
                <div className="max-w-sm p-6"  >
                    <div className="">
                        <div className='flex justify-center'>
                            <FaMobileAlt className="text-3xl mb-3 text-green-700 "></FaMobileAlt>
                        </div>
                        <a href="#">
                            <h5 className="mb-3 text-xl font-light tracking-tight   mx-auto text-center ">Call:+1 5589 55488 55</h5>
                        </a>
                        <a href="#">
                            <h5 className="mb-3 text-xl font-light tracking-tight  mx-auto text-center ">Monday-Friday (9am-5pm)</h5>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm p-6"  >
                    <div className="">
                        <div className='flex justify-center'>
                            <AiOutlineMail className="text-3xl mb-3 text-green-700 "></AiOutlineMail>
                        </div>
                        <a href="#">
                            <h5 className="mb-3 text-xl font-light tracking-tight  mx-auto text-center ">Email: info@gmail.com</h5>
                        </a>
                        <a href="#">
                            <h5 className="mb-3 text-xl font-light tracking-tight  mx-auto text-center ">Web: www.eBusiness.com</h5>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm p-6"  >
                    <div className="">
                        <div className='flex justify-center'>
                            <HiOutlineLocationMarker className="text-3xl mb-3 text-green-700 "></HiOutlineLocationMarker>
                        </div>
                        <a href="#">
                            <h5 className="mb-3 text-xl font-light tracking-tight   mx-auto text-center ">Location: A108 Adam Street </h5>
                        </a>
                        <a href="#">
                            <h5 className="mb-3 text-xl font-light tracking-tight   mx-auto text-center ">California 535022, USA</h5>
                        </a>
                    </div>
                </div>
            </div> 
            
        </section>
    );
};

export default ContactUs;