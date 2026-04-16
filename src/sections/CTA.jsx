import Button from "../components/common/Button";
import Container from "../components/common/Container";

const CTA = () => {
    return (
        <Container className="bg-primary py-6">
            <div className="rounded-lg border px-7 cta-section py-7 border-white">
                <h1 className="text-white font-zen text-3xl md:text-3xl ">
                    Reach out to us to find <br /> perfect therapist for you
                </h1>
                <p className="font-zen opacity-80 text-text-primary my-4 text-base md:text-base">Lacinia vel faucibus nullam purus facilisis consectetur euismod.</p>
                <Button className="bg-secondary">Book a Session</Button>
                <img src="/assets/images/mobile-device-cta.png" className="mobile-device-cta" alt="" />
            </div>
        </Container>
    );
};

export default CTA;
