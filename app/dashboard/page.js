import React from 'react';
import { getSession } from '@/auth';

export default async function Page() {
  const session = await getSession();

  if (!session) redirect('/login');

  return (
    <div className='p-2'>
      <h1>Dashboard</h1>
    </div>
  )
}