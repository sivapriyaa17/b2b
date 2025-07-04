
import { useForm } from 'react-hook-form';
import api from '../../lib/api';
import { useRouter } from 'next/router';
import { useState } from 'react';

type Form = {
  title: string;
  description: string;
  deadline: string;
  budget: number;
  companyid: number;
};

export default function NewTender() {
  const { register, handleSubmit, reset } = useForm<Form>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: Form) => {
    setLoading(true);
    try {
      await api.post('/tenders/new', data);
      alert('Tender created successfully!');
      reset(); 
      router.push('/tenders');
    } catch (err) {
      console.error('Tender creation failed:', err);
      alert('Failed to create tender. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Create Tender</h1>
      
      <input
        {...register('title', { required: true })}
        placeholder="Title"
        disabled={loading}
      />
      
      <textarea
        {...register('description', { required: true })}
        placeholder="Description"
        disabled={loading}
      />
      
      <input
        type="date"
        {...register('deadline', { required: true })}
        disabled={loading}
      />
      
      <input
        type="number"
        step="0.01"
        {...register('budget', { required: true, min: 0 })}
        placeholder="Budget"
        disabled={loading}
      />

      <input      
      type="number"
      step="0.01"
      {...register('companyid', { required: true, min: 0 })}
        placeholder="companyid"
        disabled={loading}
      />
      <button type="submit">
        {loading ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
}
