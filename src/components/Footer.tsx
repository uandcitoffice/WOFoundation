import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <>
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
                <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => onNavigate('ict-hub')} className="hover:text-white transition-colors">ICT HUB</button></li>
                <li><button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors">Gallery</button></li>
                <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Programs</button></li>
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
    </>
  );
}
