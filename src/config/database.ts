import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://caio_bercheli_user:f949CMoBTckpFHkLtOAT92bhIyh2zrcR@dpg-crgcoddsvqrc73f187ug-a.oregon-postgres.render.com/caio_bercheli';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;