//TODO: replace useState with useContext
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => {
  // hard coded for dev, to delete
  const [loggedIn, setLoggedIn] = useState(false); // change to true to redirect to dashboard
  const [appsList, setAppsList] = useState(['app1']);

  return (
    //TODO: add routing logic to AppsList when loggedIn && !appsList.length
    <>
      {loggedIn && appsList.length ? (
        <Navigate to='dashboard' />
      ) : (
        <div>
          <h1>Home</h1>
        </div>
      )}
    </>
  );
};

export default Home;
