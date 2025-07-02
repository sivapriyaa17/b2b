import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to the B2B Tender Platform</h1>
      <p>Use the links above to navigate.</p>
      <p><Link href="/tenders">View Tenders</Link></p>
    </div>
  );
}
