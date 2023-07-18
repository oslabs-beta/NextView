import db from '../server/models/dataModels';

const getUsername = async (username: string) => {
  // Get user with the given username
  const text = 'SELECT * FROM users WHERE username = $1';
  const values = [username];
  const user = await db.query(text, values);
  return user;
};

export default getUsername;
