import FlareStatistics from '@/components/FlareStatistics';

export default function Home() {
  return (
    <main style={{ margin: 0, padding: 0, width: '100vw', height: '100vh', maxWidth: '100vw', maxHeight: '100vh', overflow: 'hidden', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <FlareStatistics />
    </main>
  );
}

