import React, { useState, useEffect } from 'react';
import { ChevronRight, Heart, Users, GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

export default function HomePage() {
  const images = [
    "/Capture.jpg",
    "/whoba-hero3.webp",
    "/whob-hero2.webp",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-white">
      <section
        id="home"
        className="relative pt-20 text-white transition-all duration-1000"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(45, 122, 90, 0.75),
              rgba(58, 150, 104, 0.75),
              rgba(63, 130, 180, 0.7)
            ),
            url(${images[currentImage]})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#E85D54] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ...touching lives
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering Communities Through Education
              </h1>
              <p className="text-xl mb-8 text-blue-50">
                Whoba Ogo Foundation is committed to transforming lives through
                education, healthcare, and community development initiatives
                across Nigeria.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#E85D54] text-white px-8 py-3.5 rounded-lg hover:bg-[#d54a41] transition-colors font-semibold shadow-lg">
                  Get Involved
                </button>
                <button className="bg-white text-[#3B7BBF] px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                <img
                  src="/image3.jpg"
                  alt="Students in a classroom - Education program participants learning together"
                  className="rounded-xl w-full h-[400px] object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#3B7BBF] mb-2">5000+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E85D54] mb-2">150+</div>
              <div className="text-gray-600">Scholarships Awarded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#22A661] mb-2">30+</div>
              <div className="text-gray-600">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#3B7BBF] mb-2">12+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#3B7BBF]/10 text-[#3B7BBF] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR PROGRAMS
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              How We <span className="text-[#E85D54]">Make a Difference</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our work is focused on providing health and educational support, empowering individuals, and creating lasting positive change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform hover:scale-[1.02] group"
              style={{
                backgroundImage: "url('/skill-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#22A661]/70 group-hover:bg-[#22A661]/80 transition-all"></div>

              <div className="relative p-8 text-white z-10">
                <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Skill Development Program</h3>
                <p className="mb-6 text-green-50">
                  Free ICT training programs, scholarships, and educational resources to empower students and youth in underserved communities.
                </p>
                <button className="flex items-center text-white font-semibold hover:translate-x-2 transition-transform">
                  Learn More <ChevronRight size={20} className="ml-1" />
                </button>
              </div>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform hover:scale-[1.02] group"
              style={{
                backgroundImage: "url('/health-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#E85D54]/70 group-hover:bg-[#E85D54]/80 transition-all"></div>

              <div className="relative p-8 text-white z-10">
                <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Heart size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Health Support Program</h3>
                <p className="mb-6 text-red-50">
                  Providing essential healthcare services, medical supplies, and health education to improve community wellbeing.
                </p>
                <button className="flex items-center text-white font-semibold hover:translate-x-2 transition-transform">
                  Learn More <ChevronRight size={20} className="ml-1" />
                </button>
              </div>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform hover:scale-[1.02] group"
              style={{
                backgroundImage: "url('/education-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#3B7BBF]/70 group-hover:bg-[#3B7BBF]/80 transition-all"></div>

              <div className="relative p-8 text-white z-10">
                <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Education Support Program</h3>
                <p className="mb-6 text-blue-50">
                  Infrastructure development, skills acquisition programs, and support for sustainable livelihoods in rural communities.
                </p>
                <button className="flex items-center text-white font-semibold hover:translate-x-2 transition-transform">
                  Learn More <ChevronRight size={20} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E85D54]/10 text-[#E85D54] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              RECENT NEWS
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Latest <span className="text-[#3B7BBF]">Updates & Events</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="ICT Training Program - Students learning computer skills in modern lab"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#E85D54] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  JAN 19
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">WOF ICT Cohort 3 Training Kicks Off</h3>
                <p className="text-gray-600 mb-4">
                  Over 450 applicants registered for our latest ICT training cohort, marking another milestone in our education support program.
                </p>
                <a href="#" className="text-[#3B7BBF] font-semibold flex items-center hover:translate-x-2 transition-transform">
                  Read More <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8197526/pexels-photo-8197526.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Graduation Ceremony - WOF scholarship beneficiaries receiving certificates"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#E85D54] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  JAN 15
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Cohort 3 Screening Exercise Complete</h3>
                <p className="text-gray-600 mb-4">
                  Successful screening and selection of participants for our third cohort of free ICT training program.
                </p>
                <a href="#" className="text-[#3B7BBF] font-semibold flex items-center hover:translate-x-2 transition-transform">
                  Read More <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5905918/pexels-photo-5905918.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="School Renovation Project - Community members working on infrastructure development"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#E85D54] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  DEC 24
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">School Renovation Completed</h3>
                <p className="text-gray-600 mb-4">
                  Renovation works at Amanyi High School completed, providing better learning environment for students.
                </p>
                <a href="#" className="text-[#3B7BBF] font-semibold flex items-center hover:translate-x-2 transition-transform">
                  Read More <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#E85D54] to-[#d54a41] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Make The World Better Together
          </h2>
          <p className="text-xl mb-8 text-red-50 max-w-3xl mx-auto">
            Your support can transform lives. Join us in our mission to provide education, healthcare, and opportunities to underserved communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#E85D54] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg">
              Become a Partner
            </button>
            <button className="bg-[#22A661] text-white px-8 py-4 rounded-lg hover:bg-[#1d8f52] transition-colors font-bold text-lg shadow-lg">
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-block bg-[#E85D54]/10 text-[#E85D54] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                CONTACT US
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Get In Touch With Us
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions or want to get involved? We'd love to hear from you. Reach out to us and let's make a difference together.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#3B7BBF]/10 p-3 rounded-lg mr-4">
                    <MapPin className="text-[#3B7BBF]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Address</h3>
                    <p className="text-gray-600">No. 5, Teslim Balogun Close, Surulere,<br />Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#22A661]/10 p-3 rounded-lg mr-4">
                    <Phone className="text-[#22A661]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-600">+234 803 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#E85D54]/10 p-3 rounded-lg mr-4">
                    <Mail className="text-[#E85D54]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600">info@whobaogofoundation.org</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3B7BBF] focus:ring-2 focus:ring-[#3B7BBF]/20 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3B7BBF] focus:ring-2 focus:ring-[#3B7BBF]/20 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3B7BBF] focus:ring-2 focus:ring-[#3B7BBF]/20 outline-none transition"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3B7BBF] focus:ring-2 focus:ring-[#3B7BBF]/20 outline-none transition"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button className="w-full bg-[#E85D54] text-white px-8 py-4 rounded-lg hover:bg-[#d54a41] transition-colors font-semibold shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
