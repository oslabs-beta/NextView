const handleLogOutHelper = (setLoggedIn, navigate) => {
  fetch('/user/logout', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'Application/JSON',
    },
  })
    .then((res) => {
      if (res.status === 204) {
        localStorage.removeItem('user');
        setLoggedIn(false);
        navigate('/');
        window.location.reload();
      } else {
        alert('Logout unsuccessful. Please retry.');
      }
    })
    .catch((err) => console.log('Logout ERROR: ', err));
};

export default handleLogOutHelper;
