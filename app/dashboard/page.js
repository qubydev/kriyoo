import React from 'react';
import SignoutButton from '@/components/auth/signout-button';
import { getSession } from '@/auth';

export default async function Page() {
  const session = await getSession();

  // if (!session) redirect('/login');

  return (
    <div>
      <h1>Dashboard</h1>
      <SignoutButton />
    </div>
  )
}