import { useEffect, useState } from 'react';
import api from '../lib/api';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [company, setCompany] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    api.get('/companies').then(res => {
      const my = res.data.find((c: any) => true); // company based on token
      setCompany(my);
    }).catch(() => router.push('/login'));
  }, []);

  if (!company) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {company.name}</h1>
      <p>Industry: {company.industry}</p>
      <p>Description: {company.description}</p>
      <img src={company.logo_url} alt="logo" width={100} />
    </div>
  );
}
