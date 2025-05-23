import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Linkedin, Twitter, Github } from 'lucide-react';
import { profileData } from '../constants/portfolioData';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    text: profileData.contact.phone,
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    text: profileData.contact.email,
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Address",
    text: profileData.contact.address,
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Research IDs",
    text: `Scopus ID: ${profileData.contact.scopusID}\nResearcher ID: ${profileData.contact.researcherID}`,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch for research collaborations, consulting opportunities, or academic inquiries
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map(({ icon, title, text }) => (
                <div 
                  key={title}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
                    <p className="text-gray-600 whitespace-pre-line">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div 
              variants={fadeInUp}
              className="flex gap-4"
            >
              {[
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                { icon: <Github className="w-5 h-5" />, label: "Github" },
                { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-gray-700 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
