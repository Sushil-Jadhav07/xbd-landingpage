import { useEffect, useState } from "react";

export default function PreviewChapterModal({ open, onClose, initialSubject = "" }) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: initialSubject,
    companyName: "",
    designation: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    function handleKey(event) {
      if (event.key === "Escape") onClose?.();
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open && initialSubject) {
      setFormValues((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [open, initialSubject]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (
      !formValues.name ||
      !formValues.email ||
      !formValues.phone ||
      !formValues.companyName ||
      !formValues.designation
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      await submitToMailchimp(formValues);
      setSuccessMessage("Thanks! The preview chapter will arrive in your inbox.");
      setFormValues({
        name: "",
        email: "",
        phone: "",
        subject: initialSubject || "",
        companyName: "",
        designation: "",
      });
      setTimeout(() => {
        setSuccessMessage("");
        onClose?.();
      }, 1500);
    } catch (error) {
      console.error("Mailchimp submission error:", error);
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function submitToMailchimp(values) {
    return new Promise((resolve, reject) => {
      const MAILCHIMP_URL = "https://xbd.us11.list-manage.com/subscribe/post-json";
      const u = "279a02443a57a9821b4e42c23";
      const id = "5ffbdd59b0";

      const params = new URLSearchParams({
        u,
        id,
        FNAME: values.name,
        EMAIL: values.email,
        PHONE: values.phone,
        COMPANY: values.companyName,
        DESIGNATON: values.designation,
        "b_279a02443a57a9821b4e42c23_5ffbdd59b0": "",
      });

      const callbackName = "mcPreviewChapterCallback_" + Date.now();
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
  }

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/90 backdrop-blur-sm overflow-y-auto py-8"
      onClick={onClose}
    >
      <div 
        className="relative bg-gradient-to-br from-dark-container to-dark-gray rounded-2xl border-2 border-gray-800 max-w-md w-full mx-4 my-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 text-white/70 hover:text-white transition-colors text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#9d7035]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c1a35e]/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative p-8 lg:p-10">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Preview a Chapter
            </h2>
            <p className="text-sm text-white/60">
              Drop your details and we&apos;ll email the chapter within minutes.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Name *
              </label>
              <input
                name="name"
                type="text"
                required
                value={formValues.name}
                onChange={handleChange}
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c1a35e] transition-colors"
                placeholder="Full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Email *
              </label>
              <input
                name="email"
                type="email"
                required
                value={formValues.email}
                onChange={handleChange}
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c1a35e] transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Phone *
              </label>
              <input
                name="phone"
                type="tel"
                required
                value={formValues.phone}
                onChange={handleChange}
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c1a35e] transition-colors"
                placeholder="+91 90000 00000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                value={formValues.subject}
                onChange={handleChange}
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c1a35e] transition-colors"
                placeholder="Subject (optional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Company name *
              </label>
              <input
                name="companyName"
                type="text"
                required
                value={formValues.companyName}
                onChange={handleChange}
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c1a35e] transition-colors"
                placeholder="Organisation / startup"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Designation *
              </label>
              <input
                name="designation"
                type="text"
                required
                value={formValues.designation}
                onChange={handleChange}
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c1a35e] transition-colors"
                placeholder="Role / title"
              />
            </div>

            {errorMessage && (
              <div className="rounded-lg bg-red-500/20 border border-red-500/50 p-3 text-sm text-red-300">
                {errorMessage}
              </div>
            )}

            {successMessage && (
              <div className="rounded-lg bg-green-500/20 border border-green-500/50 p-3 text-sm text-green-300">
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-gradient-to-br from-[#9d7035] to-[#c1a35e] hover:opacity-90 text-white py-3 font-semibold transition-all duration-300 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#9d7035]/20"
            >
              {submitting ? "Submitting..." : "Download The Chapter"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

