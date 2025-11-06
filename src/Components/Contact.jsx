import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    console.log(formData);
  };

  return (
    <div className="bg-white text-black py-10 px-6 md:px-20 ">
      <h1 className="text-4xl font-bold text-center pb-5" style={{padding: "3rem"}}>Contact Me</h1>

      <div className="grid md:grid-cols-2 gap-30"> 
        {/* Left: Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border-b border-gray-400 focus:border-green-500 outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border-b border-gray-400 focus:border-green-500 outline-none py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:border-green-500 outline-none py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border-b border-gray-400 focus:border-green-500 outline-none py-2 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
          >
            SEND MESSAGE
          </button>
        </form>

        {/* Right: Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Info</h2> <br />
          <ul className="space-y-4 text-gray-700">
            <li>📍 43 Raymouth Rd. Baltimoer, London 3910</li> <br />
            <li>📞 +1 (123) 456-7890</li> <br />
            <li>📞 +1 (123) 456-7890</li> <br />
            <li>📧 info@mydomain.com</li> <br />
            <li>🌐 https://Colorlib/</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
