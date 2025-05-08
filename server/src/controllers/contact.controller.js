import Contact from "../models/contact.model.js";
import ApiError from "../utils/ApiError.js";

export const submitContact = async (req, res, next) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({ name, email, messages: [{ message }] });
  if (!name || !email || !message)
    throw new ApiError(400, "Details are missing");
  const existingContact = await Contact.findOne({ email });
  if (existingContact) {
    existingContact.messages.push({ message });
    await existingContact.save();
    return res.status(200).json({
      success: true,
      message: "Message added to the existing contact",
      data: { existingContact },
    });
  }

  await newContact.save();
  res.status(200).json({
    status: true,
    message: "New Contact Message Saved",
    data: { newContact },
  });
};
