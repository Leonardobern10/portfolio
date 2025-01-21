import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    if (formData.file) {
      formDataToSend.append("file", formData.file);
    }

    emailjs
      .sendForm(
        "service_67n1wgl", // Substitua pelo seu Service ID
        "template_kyyr4no", // Substitua pelo seu Template ID
        e.target,
        "kH5RzWzUGmUIqWipa" // Substitua pelo seu User ID
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          console.error(error.text);
          alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
      file: null,
    });
  };

  return (
    <div className="border-b border-neutral-900 pb-20 flex-col justify-center items-center px-4">
      <h2 className="my-10 text-center text-4xl ">Entre em contato</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-neutral-800 p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-2 mt-1 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-2 mt-1 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full p-2 mt-1 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            rows="5"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="file"
            className="block text-sm font-medium text-white"
          >
            Anexar arquivo
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            className="w-full mt-1 text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-neutral-700 text-white py-2 px-4 rounded hover:bg-neutral-600 transition duration-300"
        >
          Enviar
        </button>
      </form>
      <p className="text-1xl mt-28"> Made With 🧠 By Leonardo Bernardo 🤯</p>
    </div>
  );
}

export default ContactForm;
