"use client";
import React, { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Label } from "./label";
import { Input } from "./input";
import { Button } from "./button";
import { Textarea } from "./textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Pesan berhasil dikirim! Saya akan segera menghubungi Anda.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Gagal mengirim pesan. Silakan coba lagi.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Terjadi kesalahan. Silakan coba lagi nanti.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contacts"
      className="dark:bg-navy-stack-bottom bg-lightblue-stack-top w-full min-h-full py-10 lg:px-20 px-6"
    >
      <p className="lg:text-4xl text-2xl font-extrabold text-center text-primary">
        Send Me a Message!
      </p>
      <p className="lg:text-xl text-base text-center text-primary mt-2">
        Got a question or proposal, or want to drink coffee together? Go ahead.
      </p>
      <form onSubmit={handleSubmit} className="flex items-center flex-col">
        {/* Status Message */}
        {submitStatus.type && (
          <div
            className={`lg:w-[60%] w-full mb-4 p-4 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-300 dark:border-green-700"
                : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-300 dark:border-red-700"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <div className="flex flex-row lg:w-[60%] w-full gap-8 mt-10">
          <div className="w-[50%]">
            <Label className="lg:text-2xl text-lg text-primary">Name</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Your Name"
              required
              disabled={isSubmitting}
              className="text-primary focus:text-primary lg:text-lg md:text-base text-sm lg:placeholder:text-lg md:placeholder:text-base placeholder:text-xs"
            />
          </div>
          <div className="w-[50%]">
            <Label className="lg:text-2xl text-lg text-primary">Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Your Email"
              required
              disabled={isSubmitting}
              className="text-primary lg:text-lg focus:text-primary md:text-base text-sm lg:placeholder:text-lg md:placeholder:text-base placeholder:text-xs"
            />
          </div>
        </div>
        <div className="lg:w-[60%] w-full mt-10">
          <Label className="lg:text-2xl text-lg text-primary">Message</Label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
            required
            disabled={isSubmitting}
            className="text-primary lg:text-lg focus:text-primary md:text-base text-sm lg:placeholder:text-lg md:placeholder:text-base placeholder:text-xs"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="group btn-contact border border-lightpurple rounded-none lg:px-10 px-6 mt-10 lg:py-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <p className="z-50 font-extrabold lg:text-sm text-xs text-white">
            {isSubmitting ? "SENDING..." : "SHOOT"}
          </p>
          <HiArrowLongRight className="ml-2 z-10 lg:text-3xl text-2xl text-white" />
        </Button>
      </form>
    </div>
  );
};

export default Contact;
