

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  // TODO : Remove this  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }