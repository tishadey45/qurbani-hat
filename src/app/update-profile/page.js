"use client";

import { authClient } from "@/lib/auth-client";
import { Form,Button, Card, Input } from "@heroui/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function UpdateProfile() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await authClient.updateUser({
        name: form.name,
        image: form.image,
      });

      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <Card className="shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Update Profile</h1>

        <Form onSubmit={handleUpdate} className="space-y-5">
          {/* Name */}
          <Input
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            fullWidth
          />
          {/* Email */}
          <Input
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            fullWidth
          />
          {/* Image URL */}
          <Input
            label="Profile Image URL"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            fullWidth
          />
          {/* Preview */}
          {form.image && (
            <div className="flex justify-center">
              <img
                src={form.image}
                alt="preview"
                className="w-24 h-24 rounded-full object-cover border"
              />
            </div>
          )}
          {/* Button */}
          <Button
            type="submit"
            color="success"
            className="w-full"
            isLoading={loading}
          >
            Update Profile
          </Button>
          <Toaster position="top-right" reverseOrder={false} />;
        </Form>
      </Card>
    </div>
  );
}
