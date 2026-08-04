import React, { useState, useEffect } from "react";
import photo from "../assets/Astra.png";
import email from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    idea: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    const data = {
      name: form.name.trim(),
      email: form.email.trim(),
      service: form.service,
      idea: form.idea.trim(),
    };

    email
      .send("service_j6mcyap", "template_k47aqcd", data, "Y9n7fkjHV_6N_kij6")
      .then(() => {
        setSuccess(true);

        setForm({
          name: "",
          email: "",
          service: "",
          idea: "",
        });
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative bg-black text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 md:w-96 md:h-96 rounded-full bg-teal-400/30 blur-3xl animate-pulse"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 md:w-96 md:h-96 rounded-full bg-teal-400/30 blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Astronaut Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={photo}
            alt="Astronaut"
            className="w-96 md:w-[32rem] object-contain"
          />
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Let's Work Together
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Email <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Service Needed <span className="text-red-500">*</span>
              </label>

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-teal-400 transition-colors"
              >
                <option value="" disabled>
                  Something in mind?
                </option>

                <option value="Web Development">Web Development</option>
                <option value="Full Stack Application">
                  Full Stack Application
                </option>
                <option value="API Development">API Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Idea */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Explain Your Idea <span className="text-red-500">*</span>
              </label>

              <textarea
                name="idea"
                value={form.idea}
                onChange={handleChange}
                placeholder="Explain your idea..."
                rows={5}
                required
                className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Success Message */}
          {success && (
            <p className="mt-5 text-center text-green-400 font-medium">
              ✅ Your message has been sent successfully!
            </p>
          )}

          {/* Error Message */}
          {error && (
            <p className="mt-5 text-center text-red-400 font-medium">
              ❌ Failed to send message. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
