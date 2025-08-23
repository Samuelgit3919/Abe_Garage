import mysql from 'mysql2';



const dbconfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,  
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}

const db = mysql.createPool(dbconfig);

async function query(sql, params) {
    const [rows, fields] = await db.execute(sql, params);
    return rows;
}

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

export default db;