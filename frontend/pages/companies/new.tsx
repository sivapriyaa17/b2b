import { useForm } from 'react-hook-form';
import api from '../../lib/api';
import { useRouter } from 'next/router';

type Form = {
  name: string;
  industry: string;
  services: string;
  logoUrl: string;
};

export default function NewCompany() {
  const { register, handleSubmit } = useForm<Form>();
  const router = useRouter();

  const onSubmit = async (data: Form) => {
    try {
      await api.post('/companies', data);
      router.push('/companies');
    } catch (err) {
      console.error('Company creation failed:', err);
      alert('Failed to create company');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Create Company</h1>
      <input {...register('name')} placeholder="Company Name" required />
      <input {...register('industry')} placeholder="Industry" required />
      <input {...register('services')} placeholder="Services/Products" required />
      <input {...register('logoUrl')} placeholder="Logo URL (optional)" />
      <button type="submit">Create</button>
    </form>
  );
}
