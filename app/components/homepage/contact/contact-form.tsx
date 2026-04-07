"use client";

import { isValidEmail } from "@/utils/check-email";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError((current) => ({ ...current, required: false }));
    }
  };

  const handleSendMail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError((current) => ({ ...current, required: true }));
      return;
    }

    if (!isValidEmail(userInput.email)) {
      setError((current) => ({ ...current, email: true }));
      return;
    }

    setError({ email: false, required: false });

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Contact form is not configured. Please set EmailJS env values.");
      return;
    }

    try {
      setIsLoading(true);

      await emailjs.send(
        serviceId,
        templateId,
        {
          title: "Contact Us",
          name: userInput.name,
          email: userInput.email,
          message: userInput.message,
        },
        {
          publicKey,
        }
      );

      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch (sendError) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="mb-5 text-xl font-medium uppercase text-[#16f2b3]">Contact with me</p>
      <form className="max-w-3xl rounded-lg border border-[#464c6a] p-3 text-white lg:p-5" onSubmit={handleSendMail}>
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions or concerns, please don&apos;t hesitate to contact me. I am open to any work
          opportunities that align with my skills and interests.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name:</label>
            <input
              className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 outline-0 ring-0 transition-all duration-300 focus:border-[#16f2b3]"
              type="text"
              maxLength={100}
              required
              onChange={(event) => setUserInput({ ...userInput, name: event.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email:</label>
            <input
              className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 outline-0 ring-0 transition-all duration-300 focus:border-[#16f2b3]"
              type="email"
              maxLength={100}
              required
              value={userInput.email}
              onChange={(event) => {
                setUserInput({ ...userInput, email: event.target.value });
                setError((current) => ({ ...current, email: false }));
              }}
              onBlur={() => {
                checkRequired();
                setError((current) => ({ ...current, email: !isValidEmail(userInput.email) }));
              }}
            />
            {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message:</label>
            <textarea
              className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 outline-0 ring-0 transition-all duration-300 focus:border-[#16f2b3]"
              maxLength={500}
              name="message"
              required
              onChange={(event) => setUserInput({ ...userInput, message: event.target.value })}
              onBlur={checkRequired}
              rows={4}
              value={userInput.message}
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            {error.required && <p className="text-sm text-red-400">All fields are required!</p>}
            <button
              className="flex items-center gap-1 rounded-full bg-linear-to-r from-pink-500 to-violet-600 px-5 py-2.5 text-center text-xs font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline disabled:cursor-not-allowed disabled:opacity-70 md:px-12 md:py-3 md:text-sm md:font-semibold"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Sending Message...</span>
              ) : (
                <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
