import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ReserveSeatForm({ onSubmit }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    country: '',
    designation: '',
    organization: '',
    mobile: '',
    industry: '',
    employees: '',
    state: '',
    city: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid email address';
    }

    if (!formData.country) {
      newErrors.country = 'Country is required';
    }

    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required';
    }

    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization is required';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    }

    if (!formData.industry) {
      newErrors.industry = 'Industry is required';
    }

    if (!formData.employees) {
      newErrors.employees = 'Employee count is required';
    }

    if (!formData.state) {
      newErrors.state = 'State is required';
    }

    if (!formData.city) {
      newErrors.city = 'City is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitToMailchimp = (values) => {
    return new Promise((resolve, reject) => {
      const MAILCHIMP_URL = "https://xbd.us11.list-manage.com/subscribe/post-json";
      const u = "279a02443a57a9821b4e42c23";
      const id = "86fb4e5f29";

      const params = new URLSearchParams({
        u,
        id,
        EMAIL: values.workEmail,
        FNAME: values.firstName,
        LNAME: values.lastName,
        PHONE: values.mobile,
        COUNTRY: values.country,
        DES: values.designation,
        ORG: values.organization,
        IND: values.industry,
        EMPLOYEES: values.employees,
        STATE: values.state,
        CITY: values.city,
        "b_279a02443a57a9821b4e42c23_86fb4e5f29": "",
      });

      const callbackName = "mcReserveSeatCallback_" + Date.now();
      params.append("c", callbackName);

      const script = document.createElement("script");
      script.src = `${MAILCHIMP_URL}?${params.toString()}`;
      script.async = true;

      window[callbackName] = (data) => {
        delete window[callbackName];
        script.remove();

        if (data.result === "success" || (data.msg && data.msg.includes("already subscribed"))) {
          resolve(data);
        } else {
          reject(new Error(data.msg || "Subscription failed"));
        }
      };

      script.onerror = () => {
        delete window[callbackName];
        script.remove();
        reject(new Error("Network error. Please try again."));
      };

      document.body.appendChild(script);

      setTimeout(() => {
        if (window[callbackName]) {
          delete window[callbackName];
          script.remove();
          reject(new Error("Request timed out. Please try again."));
        }
      }, 10000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!validateForm()) {
      return;
    }

    setSubmitting(true);
    try {
      await submitToMailchimp(formData);
      
      // Store submitted data before resetting
      const submittedData = { ...formData };
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        workEmail: '',
        country: '',
        designation: '',
        organization: '',
        mobile: '',
        industry: '',
        employees: '',
        state: '',
        city: ''
      });
      setErrors({});
      
      // Navigate to thank you page
      navigate('/thank-you');
      
      // Call onSubmit callback if provided (for any additional handling)
      if (onSubmit) {
        onSubmit(submittedData);
      }
    } catch (error) {
      console.error('Mailchimp submission error:', error);
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const countries = ['India', 'United States', 'United Kingdom', 'Singapore', 'Australia', 'Canada', 'Other'];
  const industries = ['Professional Services', 'Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education', 'Other'];
  const employeeRanges = ['1 - 25 employees', '26 - 50 employees', '51 - 100 employees', '101 - 500 employees', '501 - 1000 employees', '1000+ employees'];
  const states = ['Uttar Pradesh', 'Maharashtra', 'Karnataka', 'Delhi', 'Tamil Nadu', 'Gujarat', 'Other'];
  const cities = ['Noida', 'Mumbai', 'Bangalore', 'Delhi', 'Chennai', 'Ahmedabad', 'Other'];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Two Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-white/70 mb-2">
            First Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            className={`w-full bg-black/30 border ${
              errors.firstName ? 'border-red-500' : 'border-gray-700'
            } rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c1a35e] transition-colors`}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-white/70 mb-2">
            Last Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            className={`w-full bg-black/30 border ${
              errors.lastName ? 'border-red-500' : 'border-gray-700'
            } rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c1a35e] transition-colors`}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <label htmlFor="workEmail" className="block text-sm font-medium text-white/70 mb-2">
            Work Email ID <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="workEmail"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleChange}
            placeholder="you@company.com"
            className={`w-full bg-black/30 border ${
              errors.workEmail ? 'border-red-500' : 'border-gray-700'
            } rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c1a35e] transition-colors`}
          />
          {errors.workEmail && (
            <p className="mt-1 text-sm text-red-400">{errors.workEmail}</p>
          )}
        </div>

        {/* Designation */}
        <div>
          <label htmlFor="designation" className="block text-sm font-medium text-white/70 mb-2">
            Designation <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Enter designation"
            className={`w-full bg-black/30 border ${
              errors.designation ? 'border-red-500' : 'border-gray-700'
            } rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c1a35e] transition-colors`}
          />
          {errors.designation && (
            <p className="mt-1 text-sm text-red-400">{errors.designation}</p>
          )}
        </div>

        {/* Organization */}
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-white/70 mb-2">
            Organization <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Enter organization"
            className={`w-full bg-black/30 border ${
              errors.organization ? 'border-red-500' : 'border-gray-700'
            } rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c1a35e] transition-colors`}
          />
          {errors.organization && (
            <p className="mt-1 text-sm text-red-400">{errors.organization}</p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-white/70 mb-2">
            Mobile <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number"
            className={`w-full bg-black/30 border ${
              errors.mobile ? 'border-red-500' : 'border-gray-700'
            } rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c1a35e] transition-colors`}
          />
          {errors.mobile && (
            <p className="mt-1 text-sm text-red-400">{errors.mobile}</p>
          )}
        </div>

        {/* Industry */}
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-white/70 mb-2">
            Industry <span className="text-red-400">*</span>
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={`w-full bg-black/30 border ${
              errors.industry ? 'border-red-500' : 'border-gray-700'
            } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c1a35e] transition-colors`}
          >
            <option value="">Select industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry} className="bg-dark-container">
                {industry}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p className="mt-1 text-sm text-red-400">{errors.industry}</p>
          )}
        </div>

        {/* Employees */}
        <div>
          <label htmlFor="employees" className="block text-sm font-medium text-white/70 mb-2">
            Employees <span className="text-red-400">*</span>
          </label>
          <select
            id="employees"
            name="employees"
            value={formData.employees}
            onChange={handleChange}
            className={`w-full bg-black/30 border ${
              errors.employees ? 'border-red-500' : 'border-gray-700'
            } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c1a35e] transition-colors`}
          >
            <option value="">Select range</option>
            {employeeRanges.map((range) => (
              <option key={range} value={range} className="bg-dark-container">
                {range}
              </option>
            ))}
          </select>
          {errors.employees && (
            <p className="mt-1 text-sm text-red-400">{errors.employees}</p>
          )}
        </div>

      </div>

      {/* City - Full Width (First) */}
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-white/70 mb-2">
          City <span className="text-red-400">*</span>
        </label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={`w-full bg-black/30 border ${
            errors.city ? 'border-red-500' : 'border-gray-700'
          } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c1a35e] transition-colors`}
        >
          <option value="">Select city</option>
          {cities.map((city) => (
            <option key={city} value={city} className="bg-dark-container">
              {city}
            </option>
          ))}
        </select>
        {errors.city && (
          <p className="mt-1 text-sm text-red-400">{errors.city}</p>
        )}
      </div>

      {/* State and Country Grid (Second and Third) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* State */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-white/70 mb-2">
            State <span className="text-red-400">*</span>
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={`w-full bg-black/30 border ${
              errors.state ? 'border-red-500' : 'border-gray-700'
            } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c1a35e] transition-colors`}
          >
            <option value="">Select state</option>
            {states.map((state) => (
              <option key={state} value={state} className="bg-dark-container">
                {state}
              </option>
            ))}
          </select>
          {errors.state && (
            <p className="mt-1 text-sm text-red-400">{errors.state}</p>
          )}
        </div>

        {/* Select Country */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-white/70 mb-2">
            Select Country <span className="text-red-400">*</span>
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`w-full bg-black/30 border ${
              errors.country ? 'border-red-500' : 'border-gray-700'
            } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c1a35e] transition-colors`}
          >
            <option value="">Select country</option>
            {countries.map((country) => (
              <option key={country} value={country} className="bg-dark-container">
                {country}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="mt-1 text-sm text-red-400">{errors.country}</p>
          )}
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="rounded-lg bg-red-500/20 border border-red-500/50 p-4 text-sm text-red-300">
          {errorMessage}
        </div>
      )}

      {/* Terms and Conditions */}
      {/* <div className="pt-4 border-t border-gray-800">
        <p className="text-sm text-white/60 leading-relaxed">
          The personal data you provide will be used to register you for an event. By completing this registration form, you accept the{' '}
          <a href="#" className="text-[#c1a35e] hover:text-[#9d7035] underline">T&Cs</a> and the{' '}
          <a href="#" className="text-[#c1a35e] hover:text-[#9d7035] underline">Privacy Policy</a> for VOSMOS Events Platform.
        </p>
      </div> */}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full px-8 py-4 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 shadow-lg shadow-[#9d7035]/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {submitting ? 'Registering...' : 'Register Now'}
      </button>
    </form>
  );
}

