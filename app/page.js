import React from 'react';
import { getSession } from '@/auth';

export default async function Page() {
  const session = await getSession();

  return (
    <div className='p-2'>
      <h1>Landing page</h1>
    </div>
  )
}