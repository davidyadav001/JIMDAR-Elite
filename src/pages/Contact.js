import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-jimdar-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-jimdar-light max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-jimdar-light mb-8">
                Have questions about our products or need assistance with your order? 
                Our elite customer service team is here to help you 24/7.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-jimdar-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-jimdar-light">support@jimdarelite.com</p>
                  <p className="text-jimdar-light">davidyadav9818@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-jimdar-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <p className="text-jimdar-light">+977 9818722214</p>
                  <p className="text-jimdar-light">+977 9818338750</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-jimdar-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                  <p className="text-jimdar-light">
                    Siraha, Nepal<br />
                    Fashion Street<br />
                    Siraha, 02 Pradesh 56000
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-jimdar-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                  <p className="text-jimdar-light">Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p className="text-jimdar-light">Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-jimdar-darker rounded-lg flex items-center justify-center hover:bg-jimdar-blue transition-colors duration-200">
                  <span className="text-white font-bold">f</span>
                </button>
                <button className="w-10 h-10 bg-jimdar-darker rounded-lg flex items-center justify-center hover:bg-jimdar-blue transition-colors duration-200">
                  <span className="text-white font-bold">t</span>
                </button>
                <button className="w-10 h-10 bg-jimdar-darker rounded-lg flex items-center justify-center hover:bg-jimdar-blue transition-colors duration-200">
                  <span className="text-white font-bold">i</span>
                </button>
                <button className="w-10 h-10 bg-jimdar-darker rounded-lg flex items-center justify-center hover:bg-jimdar-blue transition-colors duration-200">
                  <span className="text-white font-bold">y</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-jimdar-darker rounded-lg p-8">
            <h2 className="text-2xl font-serif font-semibold text-white mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-jimdar-light mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-jimdar-dark border border-jimdar-blue rounded-lg text-white placeholder-jimdar-light focus:outline-none focus:ring-2 focus:ring-jimdar-light"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-jimdar-light mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-jimdar-dark border border-jimdar-blue rounded-lg text-white placeholder-jimdar-light focus:outline-none focus:ring-2 focus:ring-jimdar-light"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-jimdar-light mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-jimdar-dark border border-jimdar-blue rounded-lg text-white placeholder-jimdar-light focus:outline-none focus:ring-2 focus:ring-jimdar-light"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-jimdar-light mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-jimdar-dark border border-jimdar-blue rounded-lg text-white placeholder-jimdar-light focus:outline-none focus:ring-2 focus:ring-jimdar-light resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-jimdar-light text-jimdar-darker font-semibold py-4 px-6 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
