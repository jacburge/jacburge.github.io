import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // hidden field for bot detection
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validate form before submit
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    // Honeypot check
    if (formData.honeypot) newErrors.honeypot = "Bot detected.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSds7pHa_Kgiue0SpkYvvN0nXb6L6S5lcVDuamz1SF6gEaMSfA/formResponse";

  const GOOGLE_FORM_FIELDS = {
    name: "entry.394206360",     
    email: "entry.388401812",
    subject: "entry.889504005",
    message: "entry.1130901553"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const params = new URLSearchParams();
    params.append(GOOGLE_FORM_FIELDS.name, formData.name);
    params.append(GOOGLE_FORM_FIELDS.email, formData.email);
    params.append(GOOGLE_FORM_FIELDS.subject, formData.subject);
    params.append(GOOGLE_FORM_FIELDS.message, formData.message);

    fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params.toString()
    })
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
          setErrors({});
        }, 3000);
      })
      .catch(() => {
        setErrors({ submit: "Sorry, there was a problem sending your message. Please try again later." });
      });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
            <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to discuss new opportunities, collaborations, or just chat about the intersection of data, art, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col h-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col" autoComplete="off">
              {/* Honeypot field (hidden from users, visible to bots) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors`}
                  placeholder="Project collaboration opportunity"
                />
                {errors.subject && <div className="text-red-500 text-xs mt-1">{errors.subject}</div>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors resize-vertical`}
                  placeholder="Tell me about your project or idea..."
                />
                {errors.message && <div className="text-red-500 text-xs mt-1">{errors.message}</div>}
              </div>
              {errors.honeypot && <div className="text-red-500 text-xs mt-1">{errors.honeypot}</div>}
              {errors.submit && <div className="text-red-500 text-xs mt-1">{errors.submit}</div>}
              <button
                type="submit"
                className="w-full bg-accent-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-accent-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Send Your Note
              </button>
            </form>
          </div>

          {/* Right column: Quotes carousel above "Let's Collaborate On" */}
          <div className="flex flex-col h-full">
            <CreativityCarousel />
            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8 flex-1 flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Let's Collaborate On</h2>
              <div className="space-y-3">
                {[
                  "Product strategy & development",
                  "Data & AI consulting",
                  "Educational technology initiatives",
                  "Speaking opportunities",
                  "Art projects",
                  "Creative collaborations"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="w-full flex flex-col sm:flex-row gap-4 items-center mt-4">
                <a href="https://linkedin.com/in/jacburge" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent-100 text-accent-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-accent-200 transition"><FaLinkedin /> LinkedIn</a>
                <a href="https://github.com/jacburge" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent-100 text-accent-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-accent-200 transition"><FaGithub /> GitHub</a>
                <a href="https://instagram.com/sumi_field" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent-100 text-accent-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-accent-200 transition"><FaInstagram /> Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const creativityQuotes = [
  {
    text: "Don’t get set into one form, adapt it and build your own, and let it grow. Be like water, my friend.",
    author: "Bruce Lee"
  },
  {
    text: "Absorb what is useful, discard what is not, add what is uniquely your own.",
    author: "Bruce Lee"
  },
  {
    text: "Art reaches its greatest point when it is devoid of self-consciousness. Freedom discovers man the moment he loses concern over what impression he is making or about to make.",
    author: "Bruce Lee"
  },
  {
    text: "If you spend too much time thinking about a thing, you’ll never get it done.",
    author: "Bruce Lee"
  },
  {
    text: "Knowing is not enough, we must apply. Willing is not enough, we must do.",
    author: "Bruce Lee"
  },
  {
    text: "The key to immortality is first living a life worth remembering.",
    author: "Bruce Lee"
  },
  {
    text: "Life itself is your teacher, and you are in a state of constant learning.",
    author: "Bruce Lee"
  },
  {
    text: "The doubters said, 'Man can not fly, The doers said, 'Maybe, but we'll try,' And finally soared // In the morning glow // While non-believers // Watched from below.",
    author: "Bruce Lee"
  },
  {
    text: "If you love life, don't waste time, for time is what life is made up of.",
    author: "Bruce Lee"
  },
  {
    text: "The meaning of life is that it is to be lived, and it is not to be traded and conceptualized and squeezed into a pattern of systems.",
    author: "Bruce Lee"
  },
  {
    text: "The most dangerous person is the one who listens, thinks and observes.",
    author: "Bruce Lee"
  },
  {
    text: "If you always put limits on everything you do, physical or anything else, it will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.",
    author: "Bruce Lee"
  },
  {
    text: "Masters in all branches of art must first be masters in living, for the soul creates everything.",
    author: "Bruce Lee"
  },
];

const CreativityCarousel = () => {
  const [index, setIndex] = useState(0);
  const [paused] = useState(false);
  const [animating] = useState(false);
  const timeoutRef = useRef(null);

  // Auto-rotate
  useEffect(() => {
    if (paused) return;
    timeoutRef.current = setTimeout(() => {
      handleNextRandom();
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line
  }, [index, paused]);

  // Show a new random quote (not the current one)
  const handleNextRandom = () => {
    setTimeout(() => {
      let next;
      do {
        next = Math.floor(Math.random() * creativityQuotes.length);
      } while (next === index && creativityQuotes.length > 1);
      setIndex(next);
    }, 350);
  };

  return (
    <div
      className={`bg-accent-50 rounded-2xl shadow-lg p-8 flex flex-col items-center transition-all duration-500 min-h-[260px] relative
        ${animating ? 'animate-fade-slide' : ''}
      `}
    >
      <FaQuoteLeft className="text-accent-300 text-3xl mb-4" />
      <div className="text-xl font-semibold text-accent-700 text-center min-h-[72px] whitespace-pre-line transition-all duration-300">
        {creativityQuotes[index].text}
      </div>
      <div className="mt-4 text-accent-400 font-bold text-lg text-center italic">— {creativityQuotes[index].author}</div>
      <button
        className="mt-6 px-6 py-3 bg-accent-600 text-white rounded-full font-semibold shadow hover:bg-accent-700 transition-all duration-200 active:scale-95"
        onClick={handleNextRandom}
        aria-label="Inspire Me!"
      >
        Inspire Me!
      </button>
      <style>
        {`
        .animate-fade-slide {
          animation: fadeSlide 0.35s cubic-bezier(.4,2,.3,1) both;
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(24px) scale(0.98);}
          to { opacity: 1; transform: none;}
        }
        `}
      </style>
    </div>
  );
};

export default Contact;