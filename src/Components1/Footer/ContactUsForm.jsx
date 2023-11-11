import React, { useState } from "react";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    console.log(name);
    event.preventDefault();
  };
  return (
    <form
      className="flex flex-col justify-evenly space-y-3"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={name}
        required
        autoComplete="off"
        placeholder="Enter Your Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="outline-none bg-transparent border-b-2"
      />
      <input
        type="email"
        required
        value={email}
        autoComplete="off"
        placeholder="Enter Your Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="outline-none bg-transparent border-b-2"
      />
      <textarea
        type="text"
        value={message}
        autoComplete="off"
        placeholder="Enter Your Message"
        required
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        className="outline-none bg-transparent border-b-2"
      />
      <input
        className="inline-block rounded bg-transparent border-solid border-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-sky-600 active:scale-95 active:bg-sky-700"
        type="submit"
        value="submit"
      />
    </form>
  );
};

export default ContactUsForm;
