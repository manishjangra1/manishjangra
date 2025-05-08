import React, { useState } from "react";

const AddProjectPage = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    techStack: "",
    image: "",
    github: "",
    live: "",
  });

  const [status, setStatus] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const uploadImageToCloudinary = async () => {
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);
    data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/" +
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME +
        "/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    return result.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      let imageUrl = "";
      if (imageFile) {
        imageUrl = await uploadImageToCloudinary();
      }
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          image: imageUrl,
          techStack: form.techStack.split(",").map((t) => t.trim()),
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus(data.message);
        setForm({
          title: "",
          description: "",
          techStack: "",
          image: "",
          github: "",
          live: "",
        });
      } else {
        setStatus(data.error || "Failed to add project.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error.");
    }
  };
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
          placeholder="Project Title"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          placeholder="Project Description"
        />
        <input
          name="techStack"
          value={form.techStack}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          placeholder="Tech Stack (comma separated)"
        />
        <input
          // name="image"
          type="file"
          accept="image/*"
          // value={form.image}
          onChange={handleImageChange}
          className="w-full px-4 py-2 border rounded"
          placeholder="Image URL"
        />
        <input
          name="github"
          value={form.github}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          placeholder="GitHub URL"
        />
        <input
          name="live"
          value={form.live}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          placeholder="Live Demo URL"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add Project
        </button>
        {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
      </form>
    </section>
  );
};

export default AddProjectPage;
