import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "/pexels-photo-8364026.jpeg",
      title: "ICT Training Lab",
      description: "Students actively participating in computer training"
    },
    {
      url: "/WhatsApp-Image-2024-09-23-at-5.05.16-PM-770x532.jpeg",
      title: "Community Outreach",
      description: "Foundation team engaging with local community members"
    },
    {
      url: "/wof3.jpg",
      title: "Training Session",
      description: "ICT Hub training session in progress"
    },
    {
      url: "/wof3-4-1.jpg",
      title: "Foundation Activities",
      description: "Team members working together on community projects"
    },
    {
      url: "https://images.pexels.com/photos/5905918/pexels-photo-5905918.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Infrastructure Development",
      description: "Construction work at beneficiary school"
    },
    {
      url: "https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "ICT Training Program",
      description: "Students learning computer skills in modern lab"
    },
    {
      url: "https://images.pexels.com/photos/8197526/pexels-photo-8197526.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Graduation Ceremony",
      description: "Proud graduates from WOF education program"
    },
    {
      url: "https://images.pexels.com/photos/5427868/pexels-photo-5427868.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Health Support",
      description: "Medical team providing health services to community"
    },
    {
      url: "https://images.pexels.com/photos/8363119/pexels-photo-8363119.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Skills Acquisition",
      description: "Vocational training session for community members"
    },
    {
      url: "https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Youth Empowerment",
      description: "Young leaders at WOF empowerment workshop"
    },
    {
      url: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Community Engagement",
      description: "Foundation team engaging with local community"
    },
    {
      url: "/image3.jpg",
      title: "Education Program",
      description: "Students in a classroom - Education program participants"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative bg-gradient-to-br from-[#E85D54] via-[#22A661] to-[#3B7BBF] py-20 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">PHOTO GALLERY</h1>
            <div className="flex items-center justify-center space-x-2 text-lg">
              <span>HOME</span>
              <span>/</span>
              <span>GALLERY</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#22A661]/10 text-[#22A661] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR MOMENTS
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Moments That <span className="text-[#E85D54]">Matter</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Capturing the journey of transformation, empowerment, and community impact through our programs and initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#3B7BBF]/10 text-[#3B7BBF] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR IMPACT
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Making a Real <span className="text-[#E85D54]">Difference</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-[#22A661] mb-3">5000+</div>
              <h3 className="text-xl font-semibold mb-2">Lives Transformed</h3>
              <p className="text-gray-600">Through education, healthcare, and empowerment programs</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-[#3B7BBF] mb-3">150+</div>
              <h3 className="text-xl font-semibold mb-2">Scholarships Awarded</h3>
              <p className="text-gray-600">Supporting students to achieve their educational dreams</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-[#E85D54] mb-3">30+</div>
              <h3 className="text-xl font-semibold mb-2">Communities Served</h3>
              <p className="text-gray-600">Across Nigeria and beyond, touching lives daily</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#3B7BBF] to-[#22A661] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl mb-8 text-blue-50 max-w-3xl mx-auto">
            Join us in creating more moments that matter. Your support can help us expand our reach and transform more lives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#3B7BBF] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg">
              Support Our Work
            </button>
            <a
              href="https://cohort.whobaogofoundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E85D54] text-white px-8 py-4 rounded-lg hover:bg-[#d54a41] transition-colors font-bold text-lg shadow-lg"
            >
              Join Our Cohort
            </a>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
