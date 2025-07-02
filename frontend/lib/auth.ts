export function isLoggedIn() {
    return typeof window !== 'undefined' && !!localStorage.getItem('token');
  }
  
  export function logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  }
  