import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Pokemon App</h1>
      <p>Choose your path:</p>
      <div>
        <Link href="/server">
          <a>Server Page</a>
        </Link>
      </div>
      <div>
        <Link href="/client">
          <a>Client Page</a>
        </Link>
      </div>
    </div>
  );
}

