import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const AboutUs = () => {
    return (
        <section>
            <SectionTitle heading={"About Us"}></SectionTitle>
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center w-1/2 ">
      <h1 className="text-5xl font-bold  ">How the Website <br/>Works</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="text-center border-r-4 pr-4 w-1/2">
    <h1 className="text-5xl font-bold">Why this website was made</h1>
      <p className="py-6">This pet adoption website focuses for connecting pets in need with caring adopters, providing valuable information, and fostering a sense of community around the cause of animal welfare. It streamlines the adoption process, enhances communication, and contributes to the overall success of pet adoption efforts.</p>
    </div>
  </div>
</div>
        </section>
    );
};

export default AboutUs;