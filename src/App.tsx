import './index.css';

import { Navbar } from './components/navbar/navbar';

export function App() {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <main className="pt-16 w-[640px] mx-auto px-4">
        place card here
      </main>
    </div>
  );
}
