import { Pool } from 'pg';
import 'dotenv/config';

const PG_URI = process.env.PG_URI || undefined;

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
export default {
  query: (text: QueryParams[0], params: QueryParams[1]) => {
    console.log('executed query', text);
    return pool.query(text, params);
  },
};

type QueryParams = Parameters<typeof pool.query>;
