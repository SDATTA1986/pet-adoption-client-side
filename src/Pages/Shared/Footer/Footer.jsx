
import { FaTwitter,FaFacebookF,FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="mt-40">
            <footer className="footer footer-center p-10 text-white bg-black rounded">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Update</a>
                    <a className="link link-hover">Press Release</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a><FaFacebookF></FaFacebookF></a>
                        <a><FaTwitter></FaTwitter></a>

                        <a><FaYoutube></FaYoutube></a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright &copy; 2023 - All right reserved by HomePets</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;