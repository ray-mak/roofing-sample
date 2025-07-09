"use client"

import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <form className="p-12 text-gray-200 bg-zinc-900">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-gray-300">
          <label htmlFor="name" className="flex flex-col">
            Name{"*"}
            <input
              type="text"
              id="name"
              name="name"
              className="p-2 border border-gray-600 bg-zinc-800"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="flex flex-col">
            Email
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 border border-gray-300 border-gray-600 bg-zinc-800"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="phone" className="flex flex-col ">
            Phone{"*"}
            <input
              type="tel"
              id="phone"
              name="phone"
              className="p-2 border border-gray-600 bg-zinc-800"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="subject" className="flex flex-col">
            Subject
            <input
              type="text"
              id="subject"
              name="subject"
              className="p-2 border border-gray-600 bg-zinc-800"
              value={formData.subject}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="message" className="md:col-span-2 flex flex-col">
            Message{"*"}
            <textarea
              id="message"
              name="message"
              className="p-2 border border-gray-600 bg-zinc-800"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-cyan-700 hover:bg-cyan-800 text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

export default ContactForm
