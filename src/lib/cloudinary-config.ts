import { v2 as cloudinary } from 'cloudinary'

export const cloudinarySDK = cloudinary.config({
  cloud_name: import.meta.env.DEV_COULDINARY_NAME,
  api_key: import.meta.env.DEV_COULDINARY_API_KEY,
  api_secret: import.meta.env.DEV_COULDINARY_API_SECRET,
})
