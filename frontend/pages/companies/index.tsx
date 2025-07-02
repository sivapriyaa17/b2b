
import { useEffect, useState } from 'react';
import api from '../../lib/api';
import Link from 'next/link';

export default function Companies() {
  const [list, setList] = useState<any[]>([]);
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const search = async () => {
    try {
      setLoading(true);
      const res = await api.get('/companies/search', { params: { name: q } });
      setList(res.data);
      setSearched(true);
    } catch (err) {
      console.error('Search failed:', err);
      alert('Search failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    search(); // Initial load
  }, []);

  return (
    <div>
      <h1>Companies</h1>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search by name"
      />
      <button onClick={search}>Search</button>

      {loading ? (
        <p>Loading companies...</p>
      ) : searched ? (
        list.length > 0 ? (
          <ul>
            {list.map((c) => (
              <li key={c.id}>
                <Link href={`/companies/${c.id}`}>{c.name}</Link> – {c.industry}
              </li>
            ))}
          </ul>
        ) : (
          <p>No companies found{q && ` for "${q}"`}.</p>
        )
      ) : null}
    </div>
  );
}
