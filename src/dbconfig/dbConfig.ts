import mongoose from 'mongoose';

const connectMongo = async () => {
    try {
        const url = process.env.MONGO_URL;
        const { connection } = await mongoose.connect(url!);
        if (connection.readyState === 1) {
            console.log("Database Connected");
        }
    } catch (errors) {
        return Promise.reject(errors);
    }
};

export default connectMongo;