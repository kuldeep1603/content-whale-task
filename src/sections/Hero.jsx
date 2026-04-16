import Container from "../components/common/Container";
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";

const Hero = () => {
    return (
        <section className="relative bg-primary flex flex-col items-center text-center overflow-hidden">
            {/* Hero Content */}
            <Container className="my-10 z-10">
                <h1 className="text-text-primary font-zen text-2xl sm:text-3xl md:text-5xl leading-snug">
                    Therapy and Counseling That
                    <br className="hidden md:block" />
                    <span className="inline-block bg-secondary text-text-secondary px-3 py-1 mt-3">
                        Holds You Through the Hard Parts
                    </span>
                </h1>

                <p className="font-zen opacity-80 text-text-primary my-8 text-base md:text-base">
                    Over 1 in 8 people globally live with a mental health condition, yet
                    fewer than 1% seek timely
                    <br className="hidden md:block" /> support. Our therapy and counseling
                    and mental health services are here to change that, one safe,
                    <br className="hidden md:block" /> judgment-free session at a time.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                    <Button className="bg-secondary">Book a Session</Button>
                    <Button className="bg-tertiary">Contact Us</Button>
                </div>
            </Container>

            {/* Hero GIF */}
            <div className="relative hero-image-section w-full hidden lg:block overflow-hidden self-stretch mt-auto">                <img
                src="/assets/images/hero.gif"
                alt="Hero Illustration"
                className="w-full h-[420px] object-cover object-bottom block"
            />

                <Icon
                    title="cloud"
                    classname="absolute top-10 left-40 w-20 h-20 sm:w-24 md:w-32 lg:w-40 opacity-90"
                />

                <Icon
                    title="cloud"
                    classname="absolute top-10 right-40 w-20 h-20 sm:w-24 md:w-32 lg:w-40 opacity-90 scale-x-[-1]"
                />
            </div>
        </section>
    );
};

export default Hero;