import React from 'react';
import { Monitor, Code, Smartphone, Database, Users, FileText, Award, CheckCircle } from 'lucide-react';

export default function ICTHubPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative bg-gradient-to-br from-[#22A661] via-[#3B7BBF] to-[#2E6DA4] py-20 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">ICT INNOVATION HUB</h1>
            <div className="flex items-center justify-center space-x-2 text-lg">
              <span>HOME</span>
              <span>/</span>
              <span>ICT HUB</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/video-capture-0.00seg-3481-1-770x532.png"
                alt="ICT Hub Training Session"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-[#22A661] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                WHOBA OGO FOUNDATION
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                ICT INNOVATION HUB
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The ICT Hub was pioneered by the Whoba Ogo Foundation with a vision to empower IT enthusiasts who have developed passion for technology. The training is available for over five hundred (500) students, undergraduates and youths across Nigeria.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This pioneer ICT Hub will in fact be open for all but with capacity of 500 at a time, in Ikere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#3B7BBF]/10 text-[#3B7BBF] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              PROGRAM GOAL
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              ICT HUB GOAL:
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#22A661] mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-gray-600 leading-relaxed">
                  To train hundreds in an ICT center where participants who are financially constrained can also have equal opportunities to pursue and fulfill their ambitions through acquisition of relevant ICT skills.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#22A661] mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-gray-600 leading-relaxed">
                  The goal of the program among others is to support and launch individuals in the tech industry by providing vocational training and workshop in emerging technical courses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E85D54]/10 text-[#E85D54] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              TRAINING PROGRAMS
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              COURSES
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The ICT Hub will provide essential and high demand ICT skills in:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#3B7BBF]/10 to-[#2E6DA4]/5 border-2 border-[#3B7BBF] rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-[#3B7BBF] text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Monitor size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Graphics Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Participants will equip themselves with essential graphics knowledge. This will enable participants to create stunning visual designs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#22A661]/10 to-[#1d8f52]/5 border-2 border-[#22A661] rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-[#22A661] text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Code size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Web Design</h3>
              <p className="text-gray-600 leading-relaxed">
                The 2-3 Month course is intended to introduce courses such as Digital Marketing/Content Creation, Web Design, Graphics Design.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#E85D54]/10 to-[#d54a41]/5 border-2 border-[#E85D54] rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-[#E85D54] text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Smartphone size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Graphics Design</h3>
              <p className="text-gray-600 leading-relaxed">
                This includes courses such as Digital Marketing/Content Creation. Allows students to gain practical knowledge.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#3B7BBF]/10 to-[#2E6DA4]/5 border-2 border-[#3B7BBF] rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-[#3B7BBF] text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Database size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Desktop Publishing</h3>
              <p className="text-gray-600 leading-relaxed">
                This includes a wide range of innovative desktop designing techniques and form Microsoft Office. Word, Excel, PowerPoint.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#22A661]/10 to-[#1d8f52]/5 border-2 border-[#22A661] rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-[#22A661] text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Code size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Digital Marketing & Content Creation</h3>
              <p className="text-gray-600 leading-relaxed">
                Participants learn to create impactful digital marketing campaigns and professional content for social media platforms.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#E85D54]/10 to-[#d54a41]/5 border-2 border-[#E85D54] rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-[#E85D54] text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FileText size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">FullStack Development</h3>
              <p className="text-gray-600 leading-relaxed">
                This module covers both Mobile/Android/IOS Operating System Development, Development, FullStack Development.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#3B7BBF]/5 to-[#22A661]/5 border-2 border-[#3B7BBF] rounded-2xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              These courses are divided into two (2) parts:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-[#22A661] font-bold text-xl">1.</span>
                <div>
                  <span className="font-bold text-gray-900">2-3 Month Duration:</span>
                  <span className="text-gray-700"> This includes courses such as Digital Marketing/Content Creation, Web Design, Graphics Design. The 2-3 Month course is intended to introduce participants to relevant skills within a relatively short time frame which will give students exposure, basic and practical knowledge with the ability and skills to scale through the various software platforms.</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#22A661] font-bold text-xl">2.</span>
                <div>
                  <span className="font-bold text-gray-900">6-Month Duration:</span>
                  <span className="text-gray-700"> This includes courses such as Mobile/Android/IOS Operating System Development, Development, FullStack Development. The 6-month course offers a deeper education in each topics, placing students on a path towards becoming specialists and professionals, depending on the visions and depth of the courses.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#22A661]/10 text-[#22A661] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              COURSE SUMMARY
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              COURSE SUMMARY:
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#3B7BBF]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Graphics Design:</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Participants of this course will equip themselves with essential graphics knowledge. This will enable participants to create stunning visual graphics, participate in the development of creative ads and contents for potential clients. These will all be mastered with the knowledge of various Design Applications, App development, 3D modeling & Photography.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#22A661]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Design:</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                This course helps participants to create versatile and professional websites in various CT areas. These will all be made possible via training of various website building applications like Schools, Companies, Churches, NGO's, e-Commerce and many more.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#E85D54]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">FullStack Development:</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                This module offers a suite of wide-range innovative including courses on the Mobile Apps Operating System, covering Frontend & Backend development. Have the skills to design, create, update, and manage mobile applications using Programming languages such as JavaScript(React, Node.js, Express), Python, MongoDB/Postgres, HTML, CSS, Bootstrap.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#3B7BBF]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Desktop Publishing:</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                This course takes participants to create personal and professional websites in schools. Companies, Churches, e-Commerce sites using (Wordpress, Express, Firebase, React, Node.js, HTML, CSS, Bootstrap, Graphic Designs, Typography & Audio Editing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E85D54]/10 text-[#E85D54] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              PROGRAM OBJECTIVES
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              OBJECTIVES OF THIS PROGRAM
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
              <div className="bg-[#22A661] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">1</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold">Career Advancement:</span> Participating in the program will enhance a participant learner's CV and open doors for exciting job opportunities in the tech industry.
              </p>
            </div>

            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
              <div className="bg-[#3B7BBF] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">2</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold">Exposure To Real-World Challenges:</span> The program will help participant exposure to real-world challenges and experience within a globally competitive, students will gain practical experience.
              </p>
            </div>

            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
              <div className="bg-[#E85D54] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">3</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold">Networking:</span> This will create students to build a professional network within the ICT industry.
              </p>
            </div>

            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
              <div className="bg-[#22A661] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">4</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold">Self-Development:</span> This program will provide students opportunities to acquire new skills or build upon existing skills in various ICT areas. These skills will serve as the basics for startups and new businesses that will give participants a springboard into entrepreneurship and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#3B7BBF] to-[#22A661]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              APPLICATION GUIDE INFO
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              WHO CAN APPLY?
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                <span className="font-bold">Within the age range of 15-35years, who are 0 level</span> (SSSes) and above (0 level) and are or have interest adequately or knowledge in IT (0 level/SSSes) required.
              </p>

              <div className="bg-[#22A661]/10 p-6 rounded-xl border-l-4 border-[#22A661]">
                <p className="text-lg font-bold mb-2">TO APPLY:</p>
                <p className="text-lg leading-relaxed">
                  Click on the link below to join the QR Code provided to be an application from. After successful submission of the application, a confirmation email will be sent to the email provided. Before the instruction on the tool and submit on the QR. Time provided.
                </p>
              </div>

              <div className="bg-[#3B7BBF]/10 p-6 rounded-xl border-l-4 border-[#3B7BBF]">
                <p className="text-lg leading-relaxed">
                  Please note that <span className="font-bold">ONLY</span> applicants who have submitted their printed confirmation email and other required documentations at the above address will be shortlisted.
                </p>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://cohort.whobaogofoundation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="/apply_now-768x224.jpg"
                    alt="ICT Hub Application - Apply Now"
                    className="max-w-md mx-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
