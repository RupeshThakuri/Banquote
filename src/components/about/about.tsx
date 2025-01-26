
import React from 'react';
import teamMembers from "./aboutdata"


const About = () => {
    return (
        <div className="p-8 ">


            <title>About Us </title>
            <meta name="description" content="Learn more about Primal 7 Movement and our mission." />
            <link rel="icon" href="/favicon.ico" />







            {/* <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white text-center"> */}





            <main className="bg-gray-50">
                <div>
                    <section className="text-center mb-12      ">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We are passionate about helping people to find suitable banquet in most faborable place and price.
                        </p>
                    </section>

                    <section className="relative p-8 rounded-lg">
  <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
    
    {/* Content Section */}
    <div className="flex-1 md:pr-8 relative z-20 bg-white md:ml-16 mb-8 md:mb-0"> 
      <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">
        Our Mission
      </h2>
      <p className="text-xl text-gray-600">
        Not just people that are already fit, but all people.<br/> We offer a more accessible and sustainable alternative to the popular “No, pain. No gain.” mantra.
        <br />
        Not just people that are already fit, but all people. 
      </p>
      <p className="text-xl text-gray-600 mt-4">
        We don’t think exercise should be associated with pain at all. It gives it a bad name. Exercise is medicine. When done right, it not only alleviates pain, but it protects against it.
      </p>
    </div>

    {/* Image Section */}
    <div className="flex-1 relative z-10 w-full h-auto md:w-1/2 md:-ml-8">
      <img src="/Images/img1.jpg" alt="Our Mission" className="w-full h-full object-cover rounded-lg shadow-lg" />
    </div>

  </div>
</section>




                </div>




                <section className="relative bg-gray-200 p-8 rounded-lg shadow-lg mb-12">
                    <div className="flex items-center justify-between relative z-10">
                        <div className="flex-1 relative z-10 mr-8"> {/* Added right margin */}
                            <img src="/Images/img1.jpg" alt="Our Values" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                        </div>

                        <div className="flex-1 pl-8 relative z-20">
                            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Values</h2>
                            <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                                <li className="flex items-center">
                                    <img src="/images/integrity-icon.png" alt="Integrity" className="w-5 h-5 mr-3" />
                                    Integrity and Trust
                                </li>
                                <li className="flex items-center">
                                    <img src="/images/health-icon.png" alt="Commitment to Health" className="w-5 h-5 mr-3" />
                                    Commitment to Health
                                </li>
                                <li className="flex items-center">
                                    <img src="/images/improvement-icon.png" alt="Continuous Improvement" className="w-5 h-5 mr-3" />
                                    Continuous Improvement
                                </li>
                                <li className="flex items-center">
                                    <img src="/images/community-icon.png" alt="Community and Support" className="w-5 h-5 mr-3" />
                                    Community and Support
                                </li>
                                <li className="flex items-center">
                                    <img src="/images/empathy-icon.png" alt="Empathy and Understanding" className="w-5 h-5 mr-3" />
                                    Empathy and Understanding
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>










                <section className="mb-12 flex flex-col justify-center item-center">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Meet Our Team</h2>
                    <p className="text-lg text-gray-600 mb-8 text-center md:mx-40">
  Our team consists of highly skilled trainers, fitness experts, and movement specialists who are dedicated to providing quality instruction, guidance, and support. We believe in creating a community that fosters growth, progress, and wellness.
</p>

                    {/* Team Cards */}
                    <div className="flex flex-wrap justify-center gap-12">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden text-center">
                                <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                                    <p className="text-gray-500">{member.designation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>




            </main>
        </div>
    );
};

export default About;
