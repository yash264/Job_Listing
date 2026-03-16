import mongoose from 'mongoose';
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });
const db = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log("Database Connected Successfully");
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};

export default connectDB;