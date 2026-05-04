"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {Form , Input,Button,Select,TextArea  } from "@heroui/react";

const notify = () => toast.success("Successfully booked!");

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    animal: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-100 to-green-200 px-4 py-10">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          🐄 Book Your Qurbani Animal
        </h1>

        <Form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <Input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>
          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <Input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="01XXXXXXXXX"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>
          {/* Address */}
          <div>
            <label className="text-sm font-medium text-gray-700">Address</label>
            <TextArea 
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Your address"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>
          
          {/* Date */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Delivery Date
            </label>
            <Input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>
          {/* Button */}
          <Button
            onClick={notify}
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Confirm Booking
          </Button>
          <Toaster position="top-right" reverseOrder={false} />;
        </Form>
      </div>
    </div>
  );
}
