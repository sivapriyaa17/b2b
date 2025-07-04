/*
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ReactNode } from 'react';
type Props = {
    children: ReactNode;
  };
  

export default function Layout({children}:  Props) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem('token'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link href="/">Home</Link> |{' '}
        <Link href="/companies">Companies</Link> |{' '}
        <Link href="/companies/new">Create Company</Link> |{' '}
        <Link href="/tenders/new">Create Tenders</Link> |{' '}
        <Link href="/register">Register</Link> |{' '}
        {loggedIn ? (
          <>
            <Link href="/dashboard">Dashboard</Link> |{' '}
            <button onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>
      <div>{children}</div>
    </div>
  );
}*/
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ReactNode } from 'react';
import Link from 'next/link';
type Props = {
  children: ReactNode;
};
export default function Layout({ children }: Props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkLogin = () => {
      setLoggedIn(!!localStorage.getItem('token'));
    };

    checkLogin(); // on mount

    const handleRouteChange = () => {
      checkLogin(); // when route changes
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login'); // Better than window.location.href
  };

  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link href="/">Home</Link> |{' '}
        <Link href="/companies">Companies</Link> |{' '}
        <Link href="/companies/new">Create Company</Link> |{' '}
        <Link href="/tenders/new">Create Tenders</Link> |{' '}
        <Link href="/register">Register</Link> |{' '}
        {loggedIn ? (
          <>
            <Link href="/dashboard">Dashboard</Link> |{' '}
            <button onClick={handleLogout} style={{ cursor: 'pointer' }}>
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>
      <div>{children}</div>
    </div>
  );
}
