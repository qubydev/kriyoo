import React from 'react';
import Link from 'next/link';
import { getSession } from '@/auth';

export default async function Page() {
  const session = await getSession();

  return (
    <div>
      {session ? (
        <Link href="/dashboard">
          <button>Dashboard</button>
        </Link>
      ) : (
        <Link href="/login">
          <button>Login</button>
        </Link>
      )}
      <h1>Hi!</h1>
    </div>
  )
}