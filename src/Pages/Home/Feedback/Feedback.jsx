import { useRef } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import GoogleMap from "../GoogleMap/GoogleMap";
import Swal from "sweetalert2";

import emailjs from '@emailjs/browser';

const Feedback = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, form.current, `${import.meta.env.VITE_PUBLIC_KEY}`)
            .then((result) => {
                console.log(result);
                if(result.text==="OK")
                {
                    form.current.reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You have successfully sent message",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section >
            <SectionTitle heading={"Give Feedback"}></SectionTitle>
            
            <div className="hero min-h-screen bg-green-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="">
                        {/* <h1 className="text-5xl font-bold">GET IN TOUCH</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        <GoogleMap></GoogleMap>
                    </div>
                    <div className="card shrink-0 w-1/2 shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">GET IN TOUCH</h1>
                        <form ref={form} className="card-body" onSubmit={sendEmail}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Your Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder=" Your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea name="message" type="text"  placeholder="Your Message" className=" textarea textarea-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="submit" className="btn bg-green-500"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;