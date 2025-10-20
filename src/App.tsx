import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Heart, Users, GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const images = [
    "/Capture.jpg",
    "/whoba-hero3.webp",
    "/whob-hero2.webp",
    // "https://images.pexels.com/photos/3184641/pexels-photo-3184641.jpeg?auto=compress&cs=tinysrgb&w=1600",
    // "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1600",
    // "https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000); // changes every 6 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/wof_logo_png (1).png"
                alt="Whoba Ogo Foundation Logo"
                className="h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#E85D54] transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-[#E85D54] transition-colors font-medium">About Us</a>
              <a href="#programs" className="text-gray-700 hover:text-[#E85D54] transition-colors font-medium">Programs</a>
              <a href="#news" className="text-gray-700 hover:text-[#E85D54] transition-colors font-medium">News</a>
              <a href="#gallery" className="text-gray-700 hover:text-[#E85D54] transition-colors font-medium">Gallery</a>
              <a href="#team" className="text-gray-700 hover:text-[#E85D54] transition-colors font-medium">Our Team</a>
              <a href="#contact" className="text-gray-700 hover:text-[#E85D54] transition-colors font-medium">Contact</a>
            </div>

            {/* Donate Button */}
            <div className="hidden md:block">
              <button className="bg-[#E85D54] text-white px-6 py-2.5 rounded-lg hover:bg-[#d54a41] transition-colors font-medium shadow-md">
                JOIN OUR RECENT COHORT
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-gray-700 hover:text-[#E85D54] transition-colors py-2">Home</a>
                <a href="#about" className="text-gray-700 hover:text-[#E85D54] transition-colors py-2">About Us</a>
                <a href="#programs" className="text-gray-700 hover:text-[#E85D54] transition-colors py-2">Programs</a>
                <a href="#news" className="text-gray-700 hover:text-[#E85D54] transition-colors py-2">News</a>
                <a href="#gallery" className="text-gray-700 hover:text-[#E85D54] transition-colors py-2">Gallery</a>
                <a href="#team" className="text-gray-700 hover:text-[#E85D54] transition-colors py-2">Our Team</a>
                <a href="#contact" className="text-gray-700 hover:text-[#E85D54] transition-colors py-2">Contact</a>
                <a href="#contact" type="button" className="bg-[#E85D54] text-white px-6 py-2.5 rounded-lg hover:bg-[#d54a41] transition-colors w-full">
                  JOIN OUR RECENT COHORT
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Stats Section */}
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

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/wof3-4-1.jpg"
                alt="Foundation team members working together - Community outreach program"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-[#E85D54]/10 text-[#E85D54] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                WANT TO KNOW ABOUT US?
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Giving Back to <span className="text-[#E85D54]">Humanity</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are an African based social impact organization committed to touching lives of rural community dwellers through medical and educational support. 
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are propelled by a passion to ease the burdens of these unfortunate many, especially in rural communities of third world nations, who are being weighed down by the burdens of poverty. We do this by narrowing our gaze to what we believe forms the core of the issue.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#22A661] text-white p-2 rounded-lg mr-4 mt-1">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1"> <span className='inline-block bg-[#E85D54]/10 text-[#E85D54] rounded-full px-1 py-1 text-sm font-semibold mb-1'> To Humanity</span> Our Mission</h3>
                    <p className="text-gray-600">Committed to enhancing the quality of life by supporting initiatives.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#3B7BBF] text-white p-2 rounded-lg mr-4 mt-1">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1"> <span className='inline-block bg-[#E85D54]/10 text-[#E85D54] rounded-full px-1 py-1 text-sm font-semibold mb-1'> To Humanity</span> Our Vision </h3>
                    <p className="text-gray-600">Our work is focused on providing health and educational support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
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

          {/* <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#22A661] to-[#1d8f52] rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Skill development program </h3>
              <p className="mb-6 text-green-50">
                Free ICT training programs, scholarships, and educational resources to empower students and youth in underserved communities.
              </p>
              <button className="flex items-center text-white font-semibold hover:translate-x-2 transition-transform">
                Learn More <ChevronRight size={20} className="ml-1" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-[#E85D54] to-[#d54a41] rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow">
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

            <div className="bg-gradient-to-br from-[#3B7BBF] to-[#2E6DA4] rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow">
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
          </div> */}

          <div className="grid md:grid-cols-3 gap-8">
            {/* Skill Development Program (Green Theme) */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform hover:scale-[1.02] group"
              style={{
                backgroundImage: "url('/skill-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Themed Overlay */}
              <div className="absolute inset-0 bg-[#22A661]/70 group-hover:bg-[#22A661]/80 transition-all"></div>

              {/* Content */}
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

            {/* Health Support Program (Red Theme) */}
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

            {/* Education Support Program (Blue Theme) */}
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

      {/* News & Events Section */}
      <section id="news" className="py-20 bg-gray-50">
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

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#22A661]/10 text-[#22A661] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              PHOTO GALLERY
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Moments That <span className="text-[#E85D54]">Matter</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="ICT Lab Session - Students actively participating in computer training"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">ICT Training Lab</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Community Outreach - Foundation team engaging with local community members"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Community Outreach</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/5905918/pexels-photo-5905918.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Infrastructure Development - Construction work at beneficiary school"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">School Renovation</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Scholarship Award - Foundation leadership presenting certificate to beneficiary"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Award Ceremony</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/8197526/pexels-photo-8197526.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Graduation Day - Proud graduates from WOF education program"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Graduation Ceremony</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/5427868/pexels-photo-5427868.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Healthcare Outreach - Medical team providing health services to community"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Health Support</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/8363119/pexels-photo-8363119.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Skills Training - Vocational training session for community members"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Skills Acquisition</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Youth Empowerment - Young leaders at WOF empowerment workshop"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Youth Empowerment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#3B7BBF] text-white px-8 py-3 rounded-lg hover:bg-[#2E6DA4] transition-colors font-semibold">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#3B7BBF]/10 text-[#3B7BBF] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR TEAM
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-[#E85D54]">Awesome Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to making a lasting impact in communities across Nigeria.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Executive Director - Foundation leadership"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Dr. John Okonkwo</h3>
                <p className="text-[#3B7BBF] font-semibold mb-3">Executive Director</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-[#3B7BBF] transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#3B7BBF] transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Programs Director - Managing education and community programs"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Mrs. Grace Adeyemi</h3>
                <p className="text-[#3B7BBF] font-semibold mb-3">Programs Director</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-[#3B7BBF] transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#3B7BBF] transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Operations Manager - Overseeing foundation operations"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Mr. Emmanuel Nwachukwu</h3>
                <p className="text-[#3B7BBF] font-semibold mb-3">Operations Manager</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-[#3B7BBF] transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#3B7BBF] transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Communications Lead - Managing foundation outreach and media"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Miss Blessing Okeke</h3>
                <p className="text-[#3B7BBF] font-semibold mb-3">Communications Lead</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-[#3B7BBF] transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#3B7BBF] transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Contact Section */}
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

      {/* Newsletter Section */}
      <section className="py-16 bg-[#3B7BBF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-white">
              <h3 className="text-3xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-blue-100">Stay updated with our latest news, updates, and impact stories.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-l-lg w-full md:w-80 focus:outline-none"
              />
              <button className="bg-[#E85D54] text-white px-8 py-3 rounded-r-lg hover:bg-[#d54a41] transition-colors font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="/wof_logo_png (1).png"
                alt="Whoba Ogo Foundation"
                className="h-16 mb-4"
              />
              <p className="text-gray-400 text-sm">
                Touching lives through education, healthcare, and community development.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Our Programs</a></li>
                <li><a href="#news" className="hover:text-white transition-colors">News & Events</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Our Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Get Involved</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-[#3B7BBF] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-[#3B7BBF] transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-[#3B7BBF] transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-[#3B7BBF] transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Whoba Ogo Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
