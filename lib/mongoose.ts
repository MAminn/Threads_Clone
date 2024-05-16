import mongoose from 'mongoose';

let isConnected = false; // variable to check if mongoose is conncted

export const connctedToDb = async () => {
    mongoose.set('strictQuery', true);
    if (!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
    if (isConnected) return console.log('Already connected to MongoDB');

    try {
        
    } catch (error) {
        
    }
}