import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import Script from 'next/script';

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getVideos() {
      try {
        const { data, error } = await supabase
          .from('videos1')
          .select('*')
          .order('created_at', { ascending: false });
        if (data) setVideos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    getVideos();
  }, []);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <style jsx>{`
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 15px; padding: 20px; }
        .card { background: #111; border-radius: 10px; overflow: hidden; border: 1px solid #222; }
        .thumb { aspect-ratio: 16/9; background: #000; cursor: pointer; }
      `}</style>

      <div style={{ textAlign: 'center', padding: '20px' }}>
        <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
      </div>

      <Script src="https://pl28763278.effectivegatecpm.com/ee/04/09/ee040951564d0118f9c97849ba692abb.js" />

      {loading ? <p style={{ textAlign: 'center' }}>Loading...</p> : (
        <div className="grid">
          {videos.map((vid) => (
            <div key={vid.id} className="card">
              <div className="thumb" onClick={() => window.location.href = `/${vid.videy_id}`}>
                <video width="100%" poster={`https://cdn.videy.co/${vid.videy_id}.mp4#t=0.5`}>
                  <source src={`https://cdn.videy.co/${vid.videy_id}.mp4#t=0.5`} />
                </video>
              </div>
              <div style={{ padding: '10px' }}>
                <p style={{ fontSize: '0.8rem' }}>{vid.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
