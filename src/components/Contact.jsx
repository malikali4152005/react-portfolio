import { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      `Thank you ${formData.name}! Your message has been submitted successfully.`
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  };

  return (
    <section
      id="contact"
      className="py-20 bg-white"
    >

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Contact Me
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Have a project or want to connect? Feel free to send me a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 shadow-xl rounded-xl p-8"
        >

          <div className="mb-6">

            <label className="block mb-2 font-semibold">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

          </div>

          <div className="mb-6">

            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

          </div>

          <div className="mb-6">

            <label className="block mb-2 font-semibold">
              Message
            </label>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>

          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;