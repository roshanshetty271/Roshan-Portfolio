"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { contact, personalInfo } from "@/data/portfolio";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email.primary,
      href: `mailto:${contact.email.primary}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: contact.github },
    { icon: Linkedin, label: "LinkedIn", href: contact.linkedin },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contact.email.primary}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.name}`,
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset to idle after 5 seconds
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-cream-100/50 dark:bg-charcoal-900/50">
      <div className="container-custom">
        <SectionHeading
          title="Get in Touch"
          subtitle="Open to full-time software development roles. Let's build something impactful together."
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-display text-2xl font-semibold text-charcoal-900 dark:text-cream-100 mb-4">
                  Let&apos;s Connect
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300">
                  I&apos;m actively looking for full-time software engineering opportunities.
                  Whether you have a role in mind or just want to chat about technology,
                  I&apos;d love to hear from you.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <div key={method.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-copper-100 dark:bg-copper-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5 text-copper-600 dark:text-copper-400" />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal-500 dark:text-cream-400">
                        {method.label}
                      </p>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="font-medium text-charcoal-900 dark:text-cream-100 hover:text-copper-500 transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="font-medium text-charcoal-900 dark:text-cream-100">
                          {method.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="pt-4">
                <p className="text-sm text-charcoal-500 dark:text-cream-400 mb-3">
                  Find me on
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-cream-200 dark:bg-charcoal-700 rounded-lg text-charcoal-700 dark:text-cream-200 hover:bg-copper-500 hover:text-white transition-colors"
                      aria-label={link.label}
                    >
                      <link.icon size={22} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-cream-50 dark:bg-charcoal-800 rounded-2xl p-6 md:p-8 space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-charcoal-700 dark:text-cream-200 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={formStatus === "submitting"}
                    className="w-full px-4 py-3 bg-cream-100 dark:bg-charcoal-700 border border-cream-300 dark:border-charcoal-600 rounded-lg text-charcoal-900 dark:text-cream-100 focus:outline-none focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-colors disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal-700 dark:text-cream-200 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={formStatus === "submitting"}
                    className="w-full px-4 py-3 bg-cream-100 dark:bg-charcoal-700 border border-cream-300 dark:border-charcoal-600 rounded-lg text-charcoal-900 dark:text-cream-100 focus:outline-none focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-colors disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-charcoal-700 dark:text-cream-200 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={formStatus === "submitting"}
                    className="w-full px-4 py-3 bg-cream-100 dark:bg-charcoal-700 border border-cream-300 dark:border-charcoal-600 rounded-lg text-charcoal-900 dark:text-cream-100 focus:outline-none focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-colors resize-none disabled:opacity-50"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit button with states */}
                <button
                  type="submit"
                  disabled={formStatus === "submitting" || formStatus === "success"}
                  className={`w-full px-6 py-3 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${formStatus === "success"
                    ? "bg-green-500 text-white"
                    : formStatus === "error"
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-copper-500 hover:bg-copper-600 text-white hover:shadow-lg hover:shadow-copper-500/25"
                    } disabled:cursor-not-allowed`}
                >
                  {formStatus === "submitting" && (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  )}
                  {formStatus === "success" && (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  )}
                  {formStatus === "error" && (
                    <>
                      <AlertCircle size={18} />
                      Try Again
                    </>
                  )}
                  {formStatus === "idle" && (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-charcoal-500 dark:text-cream-400">
                  Or email me directly at{" "}
                  <a
                    href={`mailto:${contact.email.primary}`}
                    className="text-copper-600 dark:text-copper-400 hover:underline"
                  >
                    {contact.email.primary}
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
