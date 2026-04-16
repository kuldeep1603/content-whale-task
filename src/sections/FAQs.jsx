import { useState } from "react";
import Container from "../components/common/Container";
import Icon from "../components/common/Icon";

const faqs = [
    {
        id: 1,
        question: "Lorem Ipsum Dolor Sit Amet Consectetur. Lorem.",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
        id: 2,
        question: "Lorem Ipsum Dolor Sit Amet Consectetur. Nibb.",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
        id: 3,
        question: "Lorem Ipsum Dolor Sit Amet Consectetur. Interdum.",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
        id: 4,
        question: "Lorem Ipsum Dolor Sit Amet Consectetur. Volutpat.",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
        id: 5,
        question: "Lorem Ipsum Dolor Sit Amet",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
        id: 6,
        question: "Lorem Ipsum Dolor Sit Amet Consectetur.",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
        id: 7,
        question: "Lorem Ipsum Dolor Sit Amet",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
        id: 8,
        question: "Lorem Ipsum Dolor Sit Amet Consectetur. Ante.",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div
            className="border-b border-text-primary py-4 cursor-pointer"
            onClick={onToggle}
        >
            <div className="flex items-center justify-between gap-4">
                <p className="text-text-primary font-zen text-sm md:text-base font-normal">{question}</p>
                <Icon title={isOpen ? "upcaret" : "downcaret"} width="15px" height="15px" />
            </div>

            {/* Answer — expands on open */}
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-3" : "max-h-0"
                    }`}
            >
                <p className="text-white/70 font-zen text-sm">{answer}</p>
            </div>
        </div>
    );
};

const FAQs = () => {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
    const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

    return (
        <Container className="bg-primary py-10 px-20">
            {/* Title */}
            <h1 className="text-white text-center font-zen text-3xl md:text-3xl mb-8">
                FAQ's
            </h1>

            {/* 2-column FAQ grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                {/* Left column */}
                <div>
                    {leftFaqs.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openId === faq.id}
                            onToggle={() => handleToggle(faq.id)}
                        />
                    ))}
                </div>

                {/* Right column */}
                <div>
                    {rightFaqs.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openId === faq.id}
                            onToggle={() => handleToggle(faq.id)}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default FAQs;
