import dotenv from 'dotenv';

dotenv.config();

export const DB_CONNECT = process.env.SERVER_ENV === 'production' ? process.env.DB_CONNECT : process.env.DB_CONNECT_DEV;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const PORT = process.env.PORT || 8080;
