import React, { FormEvent, useState } from "react";
import Header from "../UI/Header";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      setSubmitted(true);
      form.reset();
    } catch (error) {
      alert('There was a problem submitting the form');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-evenly items-center w-full mt-10 md:mt-0 md:w-1/2">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="p-6 mx-auto rounded-lg shadow-md text-black bg-[#a9f6f1]"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
          </label>
        </p>

        <Header subTitle="Leave a message!" />
        <p className="mb-6 text-center">
          Whether you have a question, need help with your project, or just want
          to say hello — I&apos;d love to hear from you! Fill out the form below and
          I&apos;ll get back to you soon.
        </p>
        {/* Name */}
        <label className="block mb-4">
          <span className="">Name</span>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:ring focus:ring-indigo-600"
          />
        </label>

        {/* Email */}
        <label className="block mb-4">
          <span className="">Email</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:ring focus:ring-indigo-600"
          />
        </label>

        {/* Message */}
        <label className="block mb-4 ">
          <span className="">Message</span>
          <textarea
            name="message"
            rows={5}
            required
            className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:ring focus:ring-indigo-600"
          />
        </label>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>

        {/* Confirmation Message */}
        {submitted && (
          <p className="mt-4 text-green-600 text-center">
            Thank you! I&apos;ll be in touch soon.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
