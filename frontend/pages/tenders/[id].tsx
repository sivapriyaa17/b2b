import { useEffect, useState } from 'react';
import api from '../../lib/api';
import { useRouter } from 'next/router';

export default function TenderDetail() {
  const [tender, setTender] = useState<any>(null);
  const [proposal, setProposal] = useState('');
  const router = useRouter();
  const id = router.query.id as string;

  useEffect(() => {
    if (id) {
      api.get(`/tenders/${id}`).then(res => setTender(res.data));
    }
  }, [id]);

  const apply = async () => {
    await api.post(`/tenders/${id}/apply`, { proposal_text: proposal });
    alert('Applied!');
  };

  if (!tender) return <p>Loading...</p>;

  return (
    <div>
      <h1>{tender.title}</h1>
      <p>{tender.description}</p>
      <p>Budget: {tender.budget}</p>
      <p>Deadline: {new Date(tender.deadline).toLocaleDateString()}</p>

      <textarea
        placeholder="Your proposal" value={proposal} onChange={e => setProposal(e.target.value)} />
      <button onClick={apply}>Apply</button>
    </div>
  );
}
