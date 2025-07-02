import { useEffect, useState } from 'react';
import api from '../../lib/api';
import { useRouter } from 'next/router';

export default function CompanyDetail() {
  const [company, setCompany] = useState<any>(null);
  const router = useRouter();
  const id = router.query.id as string;

  useEffect(() => {
    if (id) {
      api.get(`/companies/${id}`).then(res => setCompany(res.data));
    }
  }, [id]);

  if (!company) return <p>Loading...</p>;

  return (
    <div>
      <h1>{company.name}</h1>
      <img src={company.logo_url} alt="Logo" width={100} />
      <p>{company.industry}</p>
      <p>{company.description}</p>
    </div>
  );
}
