import db from '../server/models/dataModels';
import { QueryResult } from 'pg';

interface User {
  id: number;
  username: string;
}
const getUsername = async (username: string): Promise<QueryResult<User>> => {
  // Get user with the given username
  const query = 'SELECT * FROM users WHERE username = $1';
  const values = [username];
  const user: QueryResult<User> = await db.query(query, values);
  return user;
};

export default getUsername;
