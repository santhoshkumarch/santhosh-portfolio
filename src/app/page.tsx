import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-gray-900 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Santhosh Kumar</h1>
        <p className="text-lg mt-2">Senior Software Engineer | Freelance Ready</p>
        <nav className="mt-4 space-x-6">
          <Link href="/about" className="hover:underline text-blue-400">About</Link>
          <Link href="/projects" className="hover:underline text-blue-400">Projects</Link>
          <Link href="/contact" className="hover:underline text-blue-400">Contact</Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Welcome!</h2>
        <p className="text-xl">Explore my profile, projects, and contact me for freelance opportunities.</p>
      </main>

      <footer className="text-center py-4 bg-gray-200 text-sm">
        &copy; 2025 Santhosh Kumar. All rights reserved.
      </footer>
    </div>
  );
}