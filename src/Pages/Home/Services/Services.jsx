import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaPaw, FaFileAlt, FaGraduationCap} from "react-icons/fa";

const Services = () => {
    return (
        <section>
            <SectionTitle heading={"Our Services"}></SectionTitle>
            <div className="grid grid-cols-3 gap-10 my-20" >

                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                    <div className="">
                        <div className='flex justify-center'>
                            <FaPaw className="text-3xl mb-3 hover:text-green-700"></FaPaw>
                        </div>
                        <a href="#">
                            <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white  mx-auto text-center hover:text-green-700">Pet Adoption Listings</h5>
                        </a>
                    </div>

                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[300px] mx-auto">Browse through a comprehensive list of pets available for adoption, complete with profiles and details about each animal.</p>

                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                    <div className="">
                        <div className='flex justify-center'>
                            <FaFileAlt className="text-3xl mb-3 hover:text-green-700"></FaFileAlt>
                        </div>
                        <a href="#">
                            <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white  mx-auto text-center hover:text-green-700">Online Adoption Applications</h5>
                        </a>
                    </div>

                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[300px] mx-auto">Submit adoption applications online, streamlining the process for potential adopters and making it easier for adoption organizations to manage applications.</p>

                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                    <div className="">
                        <div className='flex justify-center'>
                            <FaGraduationCap className="text-3xl mb-3 hover:text-green-700"></FaGraduationCap>
                        </div>
                        <a href="#">
                            <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white  mx-auto text-center hover:text-green-700">Educational Resources for Pet Owners</h5>
                        </a>
                    </div>

                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[300px] mx-auto">Access educational content on pet care, training, and responsible ownership to ensure the well-being of adopted pets and promote responsible pet ownership.</p>

                </div>


            </div>
        </section>
    );
};

export default Services;