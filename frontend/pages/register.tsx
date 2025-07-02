
import { useForm } from 'react-hook-form';
import api from '../lib/api';
import { useRouter } from 'next/router';

type Form = { email: string; password: string; company_name: string };

export default function Register() {
  const { register, handleSubmit } = useForm<Form>();
  const router = useRouter();


  
  const onSubmit = async (data: Form) => {
    try {
      const res = await api.post('/auth/register', data);
      localStorage.setItem('token', res.data.token);
      router.push('/dashboard');
    } catch (err: any) {
      console.error('❌ Backend Error:', err?.response?.data || err.message);
      alert(err?.response?.data?.message || 'Registration failed');
    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <input {...register('company_name')} placeholder="Company Name" />
      <input {...register('email')} placeholder="Email" />
      <input type="password" {...register('password')} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}


