import React from 'react';
import { Trophy, Award, Flame, Zap, Star } from 'lucide-react';
import { topClippers } from '../mockData';

export default function LeaderboardView() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.9rem', borderRadius: '20px', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', color: '#fbbf24', fontSize: '0.8rem', fontWeight: '700', marginBottom: '1rem' }}>
          <Trophy size={15} /> TOP CLIPPERS LEADERBOARD
        </div>
        <h1 style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #ffffff, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Monthly Clipping Hall of Fame
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          The highest-earning clippers on Virality across TikTok, Shorts, and Instagram Reels.
        </p>
      </div>

      {/* Top 3 Podiums */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem', alignItems: 'end' }}>
        
        {/* Rank 2 */}
        <div className="glass-panel" style={{ padding: '2rem 1.5rem', textAlign: 'center', borderColor: 'rgba(192, 132, 252, 0.4)', background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.1) 0%, rgba(18, 22, 34, 0.8) 100%)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#94a3b8', color: '#000', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', fontSize: '1.2rem' }}>
            2
          </div>
          <img src={topClippers[1].avatar} alt="" style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 0.8rem auto', border: '2px solid #c084fc' }} />
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff' }}>{topClippers[1].handle}</h3>
          <div className="badge badge-purple" style={{ margin: '0.4rem 0 0.8rem 0' }}>{topClippers[1].badge}</div>
          <div style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--accent-emerald)' }}>${topClippers[1].totalEarnings.toLocaleString()}</div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{topClippers[1].totalViews} views • {topClippers[1].approvedClips} clips</span>
        </div>

        {/* Rank 1 (Tallest) */}
        <div className="glass-panel" style={{ padding: '2.5rem 1.5rem', textAlign: 'center', borderColor: 'rgba(245, 158, 11, 0.6)', background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.15) 0%, rgba(18, 22, 34, 0.9) 100%)', boxShadow: '0 0 35px rgba(245, 158, 11, 0.25)', transform: 'translateY(-10px)' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #f59e0b, #ec4899)', color: '#fff', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', fontSize: '1.4rem', boxShadow: '0 0 20px rgba(245, 158, 11, 0.5)' }}>
            👑 1
          </div>
          <img src={topClippers[0].avatar} alt="" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 0.8rem auto', border: '3px solid #f59e0b' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff' }}>{topClippers[0].handle}</h3>
          <div className="badge badge-amber" style={{ margin: '0.4rem 0 0.8rem 0', padding: '0.35rem 0.8rem' }}>{topClippers[0].badge}</div>
          <div style={{ fontSize: '1.7rem', fontWeight: '800', color: 'var(--accent-emerald)' }}>${topClippers[0].totalEarnings.toLocaleString()}</div>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{topClippers[0].totalViews} views • {topClippers[0].approvedClips} clips</span>
        </div>

        {/* Rank 3 */}
        <div className="glass-panel" style={{ padding: '2rem 1.5rem', textAlign: 'center', borderColor: 'rgba(6, 182, 212, 0.4)', background: 'linear-gradient(180deg, rgba(6, 182, 212, 0.1) 0%, rgba(18, 22, 34, 0.8) 100%)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#b45309', color: '#fff', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', fontSize: '1.2rem' }}>
            3
          </div>
          <img src={topClippers[2].avatar} alt="" style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 0.8rem auto', border: '2px solid #38bdf8' }} />
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff' }}>{topClippers[2].handle}</h3>
          <div className="badge badge-cyan" style={{ margin: '0.4rem 0 0.8rem 0' }}>{topClippers[2].badge}</div>
          <div style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--accent-emerald)' }}>${topClippers[2].totalEarnings.toLocaleString()}</div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{topClippers[2].totalViews} views • {topClippers[2].approvedClips} clips</span>
        </div>

      </div>

      {/* Full Leaderboard Table */}
      <div className="glass-panel" style={{ padding: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)', fontSize: '0.78rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '1rem' }}>Rank</th>
              <th style={{ padding: '1rem' }}>Clipper</th>
              <th style={{ padding: '1rem' }}>Badge</th>
              <th style={{ padding: '1rem' }}>Clips Approved</th>
              <th style={{ padding: '1rem' }}>Total Views</th>
              <th style={{ padding: '1rem', textAlign: 'right' }}>Total Earnings</th>
            </tr>
          </thead>
          <tbody>
            {topClippers.map(clipper => (
              <tr key={clipper.rank} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <td style={{ padding: '1rem', fontWeight: '800', fontSize: '1rem', color: clipper.rank <= 3 ? '#fbbf24' : 'var(--text-muted)' }}>
                  #{clipper.rank}
                </td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src={clipper.avatar} alt="" style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }} />
                    <span style={{ fontWeight: '700', color: '#fff' }}>{clipper.handle}</span>
                  </div>
                </td>
                <td style={{ padding: '1rem' }}>
                  <span className="badge badge-purple">{clipper.badge}</span>
                </td>
                <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>
                  {clipper.approvedClips} approved clips
                </td>
                <td style={{ padding: '1rem', fontFamily: 'var(--font-mono)', fontWeight: '600', color: 'var(--accent-cyan)' }}>
                  {clipper.totalViews}
                </td>
                <td style={{ padding: '1rem', textAlign: 'right', fontFamily: 'var(--font-mono)', fontWeight: '800', color: 'var(--accent-emerald)', fontSize: '1.05rem' }}>
                  ${clipper.totalEarnings.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
