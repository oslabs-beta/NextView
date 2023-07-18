import db from '../server/models/dataModels';

const getUsername = async (username: string) => {
  // Get user with the given username
  const query = 'SELECT * FROM users WHERE username = $1';
  const values = [username];
  const user = await db.query(query, values);
  return user;
};

export default getUsername;
