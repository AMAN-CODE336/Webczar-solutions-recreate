import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const ContactForm = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    role: "",
    address: "",
    city: "",
    country: "",
    message: "",
    agree: false,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to the terms and privacy policy.");
      return;
    }

    setSubmitting(true);
    emailjs
      .sendForm(
        "service_d8q2yal",
        "template_4s4co86",
        form.current,
        "aZe6_Lwyw97PawMgp"
      )

      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          window.location.reload();
        },
        (error) => {
          console.log("Email send failed:", error.text);
          alert("There was an error sending your message.");
        }
      );
  };

  return (
    <>
      {/* ... existing UI content remains unchanged ... */}

      <section className="bg-black text-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-blue-500">
            Get in Touch
          </h2>
          <p className="mb-8 text-gray-300">
            Have a question or need a custom solution? Fill out the form, and
            we’ll get back to you as soon as possible.
          </p>

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="bg-gray-800 text-white p-3 rounded-md w-full"
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="bg-gray-800 text-white p-3 rounded-md w-full"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-gray-800 text-white p-3 rounded-md w-full"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="role"
                placeholder="Role/Position"
                className="bg-gray-800 text-white p-3 rounded-md w-full"
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="bg-gray-800 text-white p-3 rounded-md w-full"
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="bg-gray-800 text-white p-3 rounded-md w-full"
                onChange={handleChange}
              />
            </div>

            <select
              name="country"
              className="bg-gray-800 text-white p-3 rounded-md w-full"
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Singapore">Singapore</option>
              <option value="South Africa">South Africa</option>
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Type your message here..."
              className="bg-gray-800 text-white p-3 rounded-md w-full"
              onChange={handleChange}
              required
            ></textarea>

            <label className="flex items-center text-sm text-gray-300">
              <input
                type="checkbox"
                name="agree"
                className="mr-2"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
              I agree to the terms & privacy policy.
            </label>

            <button
              type="submit"
              className={`${
                submitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700"
              } text-white font-semibold py-3 px-6 rounded-md w-full`}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
