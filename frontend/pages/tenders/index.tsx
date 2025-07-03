
  import { useEffect, useState } from 'react';
  import api from '../../lib/api';
  
  
  export default function Tenders() {
    const [list, setList] = useState<any[]>([]);
  
    useEffect(() => {
      const fetchTenders = async () => {
        try {
          const res = await api.get('/tenders');
          setList(res.data);
        } catch (err) {
          console.error('Failed to fetch tenders:', err);
          alert('Error loading tenders');
        }
      };
  
      fetchTenders();
    }, []);
  
    return (
      <div>
        <h1>All Tenders</h1>
        <ul>
          {list.map((tender) => (
            <li key={tender.id}>
              <strong>{tender.title}</strong> - ₹{tender.budget} (Deadline: {tender.deadline})
            </li>
          ))}
        </ul>
      </div>
    );
  }
    