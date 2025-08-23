import React from "react";

const About = () => {
    return (
        <section id="about-section" className="bg-gradient-to-tl min-h-[480px] from-[#C7F8E4] to-[#8ED4F2] py-20">
            <div className="max-w-9/12 mx-auto px-6">
                <div className="max-w-6/12 text-justify"> 
                    <h2 className="text-5xl font-outfit font-bold text-blue-primary mb-6">About Us</h2>
                    <p className="leading-8">
                        Welcome to <span className="font-bold text-green-primary">Medoza</span>, your trusted online
                        destination for genuine medicines and healthcare essentials. Our mission is to make quality
                        healthcare accessible, affordable, and convenient for everyone. At Medoza, we offer a wide range
                        of authentic medicines from leading brands, delivered right to your doorstep. Our platform is
                        designed to provide a seamless and secure shopping experience, ensuring you get the right
                        products at the right time. We believe in transparency, reliability, and customer satisfaction.
                        Thank you for choosing Medoza. Your health, our priority.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
