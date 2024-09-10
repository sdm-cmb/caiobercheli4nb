import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://guerra_3ezs_user:OSyOJ3Vh2zM8AhozOHCDdpWD1DmZL8t3@dpg-crbp03bv2p9s73djcb60-a.oregon-postgres.render.com/guerra_3ezs';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;