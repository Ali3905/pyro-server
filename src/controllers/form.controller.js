import { Form } from '../models/form.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import fs from 'fs';

export const createForm = async (req, res) => {
    try {
        const formData = req.body;
        const files = req.files;

        // Process file uploads
        if (files) {
            const imageFields = ['followersRatioImage', 'topCitiesImage', 'ageRangeImage'];
            for (const field of imageFields) {
                if (files[field]) {
                    try {
                        const uploadedImage = await uploadOnCloudinary(files[field][0].path);
                        formData[field] = uploadedImage.secure_url;
                        // Clean up local file after upload
                        fs.unlinkSync(files[field][0].path);
                    } catch (uploadError) {
                        // console.error(Error uploading ${field}:, uploadError);
                        // Continue with form creation even if image upload fails
                    }
                }
            }
        }

        // Create and save the new form
        const newForm = new Form(formData);
        const savedForm = await newForm.save();

        res.status(201).json({ message: "Form created successfully", form: savedForm });
    } catch (error) {
        console.error("Error creating form:", error);

        // Check for specific MongoDB errors
        if (error.name === 'MongoServerError') {
            switch (error.code) {
                case 73:
                    return res.status(500).json({ message: "Database configuration error. Invalid namespace or collection name." });
                case 121:
                    return res.status(400).json({ message: "Document failed validation." });
                default:
                    return res.status(500).json({ message: "Database error occurred.", errorCode: error.code });
            }
        }

        // Generic error response
        res.status(500).json({ message: "Error creating form", error: error.message });
    }
};