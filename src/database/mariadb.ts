import mariadb from 'mariadb';
import { config } from '../config/config';

const pool = mariadb.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    connectionLimit: 5,
});

export const getConnection = async () => {
    try {
        return await pool.getConnection();
    } catch (error) {
        console.error('Error connecting to MariaDB:', error);
        throw error;
    }
};
