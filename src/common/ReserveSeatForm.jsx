import { useState } from 'react';

export default function ReserveSeatForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(formData);
      } else {
        // Default behavior - you can customize this
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name Field */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-white/70 mb-2">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          className={`w-full bg-dark-container border ${
            errors.fullName ? 'border-red-500' : 'border-gray-700'
          } rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c1a35e] transition-colors`}
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.com"
          className={`w-full bg-dark-container border ${
            errors.email ? 'border-red-500' : 'border-gray-700'
          } rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c1a35e] transition-colors`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
        )}
      </div>

      {/* Company Name Field */}
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-white/70 mb-2">
          Company Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Enter your company name"
          className={`w-full bg-dark-container border ${
            errors.companyName ? 'border-red-500' : 'border-gray-700'
          } rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c1a35e] transition-colors`}
        />
        {errors.companyName && (
          <p className="mt-1 text-sm text-red-400">{errors.companyName}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-8 py-4 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105"
      >
        Submit
      </button>
    </form>
  );
}

