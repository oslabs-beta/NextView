import db from '../server/models/dataModels';
import { QueryResult } from 'pg';

interface User {
  _id: number;
  username: string;
  password: string;
  created_on: Date;
}
const getUser = async (username: string): Promise<QueryResult<User>> => {
  // Get user with the given username
  const query = 'SELECT * FROM users WHERE username = $1';
  const values = [username];
  const user: QueryResult<User> = await db.query(query, values);
  return user;
};

export default getUser;
