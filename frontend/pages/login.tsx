
import { useForm } from 'react-hook-form';
import api from '../lib/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Form = { email: string; password: string };

export default function Login() {
  const { register, handleSubmit } = useForm<Form>();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Prevent hydration errors
  }, []);

  const onSubmit = async (data: Form) => {
    try {
      const res = await api.post('/auth/login', data);
      localStorage.setItem('token', res.data.token);
      router.push('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed. Please check credentials or server.');
    }
  };

  if (!isMounted) return null; // Prevent hydration mismatch

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <input {...register('email')} placeholder="Email" required />
      <input type="password" {...register('password')} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

