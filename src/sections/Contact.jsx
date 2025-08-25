import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

//Service ID - service_wihjjwh
//Template ID - template_0f9povp

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubimt = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    console.log(formData);

    try {
      console.log("formSubmitted");
      await emailjs.send("service_wihjjwh", "template_0f9povp", {
        from_name: formData.name,
        to_name: "Harsh",
        from_email: formData.email,
        to_email: "harsh.kaushik0305@gmail.com",
        message: formData.message,
      },"aw1OBrjac2BI5nlfW");
      setIsLoading(false);
      alert("Success")
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      alert("Failed");
    }

    setFormData({
    name: "",
    email: "",
    message: "",
  })
  };

  return (
    <section className="relative flex items-center c-space section-spacing">
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Weether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubimt}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              className="field-input field-input-focus"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              className="field-input field-input-focus"
              placeholder="johndoe@gmail.com"
              required
              onChange={handleChange}
              value={formData.email}
              autoComplete="email"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <br />
            <textarea
              type="text"
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts"
              required
              onChange={handleChange}
              value={formData.message}
              autoComplete="message"
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 text-lg text-center rounded-lg cursor-pointer bg-radial from-lavender to-royal hover-animation py-3"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
