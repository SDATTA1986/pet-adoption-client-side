import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const AboutUs = () => {
    return (
        <section>
            <SectionTitle heading={"About Us"}></SectionTitle>
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center w-1/2 ">
      <h1 className="text-5xl font-bold  ">How the Website <br/>Works</h1>
      <p className="py-6">This website has two types of users: one is normal user and another is admin. Normal user once logged in, will see all the pets available for adoption and all the donation campaigns that are going on. If they want, either they can adopt a pet or donate to a existing campaign. The normal user will have a seperate dashboard from admin. If the user wants, he/she can add a pet or create a new campaign for other users. The admin can see all the users in the dashboard and the admin has only the right to make any other user Admin.</p>
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