import React from 'react';
import { Heart, Users, Target, Eye, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative bg-gradient-to-br from-[#3B7BBF] via-[#22A661] to-[#2E6DA4] py-20 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">ABOUT US</h1>
            <div className="flex items-center justify-center space-x-2 text-lg">
              <span>HOME</span>
              <span>/</span>
              <span>ABOUT US</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/DSC_3740.jpg"
                alt="Foundation team members working together"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-[#E85D54] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ABOUT US
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                We Serve Humanity
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are an African based social impact organization committed to touching lives of rural community dwellers through medical and educational support.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are propelled by a passion to ease the burdens of these unfortunate many, especially in rural communities of third world nations, who are being weighed down by the burdens of poverty. We do this by narrowing our gaze to what we believe forms the core of the issue.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed italic">
                As they say, <span className="font-bold">"A healthy body and a healthy (well informed) mind is the recipe for success"</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#3B7BBF] to-[#2E6DA4] rounded-2xl p-8 text-white shadow-xl">
              <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-50 leading-relaxed">
                To be a major beacon of hope to rural community dwellers across Africa, availing them more opportunity to live healthy lives and fulfill potentials like everyone else.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#E85D54] to-[#d54a41] rounded-2xl p-8 text-white shadow-xl">
              <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-red-50 leading-relaxed">
                Committed to enhancing the quality of life by supporting initiatives that promote health and education, creating lasting positive change in communities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#22A661] to-[#1d8f52] rounded-2xl p-8 text-white shadow-xl">
              <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-green-50 leading-relaxed">
                Integrity, compassion, excellence, and community empowerment drive everything we do. We believe in transparency and sustainable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#3B7BBF]/10 text-[#3B7BBF] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              WHERE IT STARTED
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              OUR STORY
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                We are an African based social impact organization committed to touching lives of rural community dwellers through medical and educational support.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are propelled by a passion to ease the burdens of these unfortunate many, especially in rural communities of third world nations, who are being weighed down by the burdens of poverty. We do this by narrowing our gaze to what we believe forms the core of the issue.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As they say, <span className="font-bold italic">"A healthy body and a healthy (well informed) mind is the recipe for success"</span>.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Therefore, we channel the waves of our passion towards providing Educational support and Health initiatives in rural communities across the nations where we work.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This vision was born in the heart of our founder, Whoba Ogo, who started out his journey of life from very humble beginnings, bearing the weight of the realities being faced on a daily basis by inhabitants of rural communities, and having also experienced in his own journey the world of difference a helping hand can make in uplifting one's future.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                He decided to set up this foundation to be that 'Helping hand' to many.
              </p>

              <div className="bg-[#E85D54] text-white p-6 rounded-xl">
                <a href="https://cohort.whobaogofoundation.org" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:underline">
                  JOIN US NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E85D54]/10 text-[#E85D54] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR IMPACT
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Making a Real Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/DSC_3749.jpg"
                alt="Foundation activities"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-[#22A661] text-white p-3 rounded-lg mr-4 mt-1">
                  <Heart size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Health Initiatives</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Providing essential healthcare services, medical supplies, and health education to improve community wellbeing across rural areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#3B7BBF] text-white p-3 rounded-lg mr-4 mt-1">
                  <Users size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Educational Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Scholarships, ICT training programs, and educational resources empowering students and youth in underserved communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#E85D54] text-white p-3 rounded-lg mr-4 mt-1">
                  <Target size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Community Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Infrastructure development, skills acquisition programs, and support for sustainable livelihoods in rural communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
