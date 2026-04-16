import Benefits from "../sections/Benefits";
import Blogs from "../sections/Blogs";
import Commitment from "../sections/Commitment";
import CTA from "../sections/CTA";
import FAQItem from "../sections/FAQs";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Team from "../sections/Team";
import Testimonials from "../sections/Testimonials";
import TherapistServices from "../sections/TherapistServices";


const Home = () => {
    return (
        <>
            <Hero />
            <Commitment />
            <Services />
            <TherapistServices />
            <Benefits />
            <Testimonials />
            <Team />
            <Blogs />
            <FAQItem />
            <CTA />
        </>
    );
};

export default Home;