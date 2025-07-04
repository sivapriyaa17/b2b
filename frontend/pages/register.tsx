import { useForm } from 'react-hook-form';
import api from '../lib/api'; 
import { useRouter } from 'next/router';

type FormData = {
  name: string;
  industry: string;
  services: string;
  location: string;
  email: string;
  password: string;
};

export default function Register() {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await api.post('/auth/register', data);
      localStorage.setItem('token', res.data.token);
      alert('✅ Registered successfully!');
      router.push('/dashboard'); // Redirect after success
    } catch (err: any) {
      console.error('❌ Backend Error:', err?.response?.data || err.message);
      alert(err?.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Company Registration</h2>

      <input {...register('name')} placeholder="Company Name" required />
      <input {...register('industry')} placeholder="Industry" required />
      <input {...register('services')} placeholder="Services Offered" required />
      <input {...register('location')} placeholder="Location" required />
      <input type="email" {...register('email')} placeholder="Email" required />
      <input type="password" {...register('password')} placeholder="Password" required />

      <button type="submit">Register</button>
    </form>
  );
}



