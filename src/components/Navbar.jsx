import React from 'react';
import { 
  Zap, 
  Briefcase, 
  ShieldCheck, 
  Trophy, 
  PlusCircle, 
  DollarSign, 
  Eye, 
  Layers,
  Sparkles
} from 'lucide-react';

export default function Navbar({ activeRole, setActiveRole, openCreateModal, stats, platformFee }) {
  return (
    <header className="glass-panel" style={{ borderRadius: '0', borderLeft: 'none', borderRight: 'none', borderTop: 'none', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(20px)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0.85rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
            animation: 'pulseGlow 3s infinite ease-in-out'
          }}>
            <Zap size={24} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.3rem', fontWeight: '800', letterSpacing: '-0.02em', background: 'linear-gradient(90deg, #ffffff, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                VIRALITY
              </span>
              <span className="badge badge-purple" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>
                MIDDLEMAN V2.4
              </span>
            </div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '500' }}>
              Clipping Marketplace & Automated Escrow Engine
            </p>
          </div>
        </div>

        {/* Role Switcher Nav */}
        <nav style={{ display: 'flex', background: 'rgba(255, 255, 255, 0.04)', padding: '0.3rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)', gap: '0.2rem' }}>
          <button 
            onClick={() => setActiveRole('clipper')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.85rem',
              transition: 'all 0.2s ease',
              background: activeRole === 'clipper' ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'transparent',
              color: activeRole === 'clipper' ? '#fff' : 'var(--text-muted)'
            }}
          >
            <Zap size={16} />
            <span>Clipper Feed</span>
          </button>

          <button 
            onClick={() => setActiveRole('brand')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.85rem',
              transition: 'all 0.2s ease',
              background: activeRole === 'brand' ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'transparent',
              color: activeRole === 'brand' ? '#fff' : 'var(--text-muted)'
            }}
          >
            <Briefcase size={16} />
            <span>Brand Manager</span>
          </button>

          <button 
            onClick={() => setActiveRole('middleman')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.85rem',
              transition: 'all 0.2s ease',
              background: activeRole === 'middleman' ? 'linear-gradient(135deg, #059669, #10b981)' : 'transparent',
              color: activeRole === 'middleman' ? '#fff' : 'var(--text-muted)'
            }}
          >
            <ShieldCheck size={16} />
            <span>Middleman Desk</span>
            <span className="badge badge-emerald" style={{ fontSize: '0.65rem', padding: '0.1rem 0.35rem' }}>{platformFee}% Fee</span>
          </button>

          <button 
            onClick={() => setActiveRole('leaderboard')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.85rem',
              transition: 'all 0.2s ease',
              background: activeRole === 'leaderboard' ? 'linear-gradient(135deg, #f59e0b, #ec4899)' : 'transparent',
              color: activeRole === 'leaderboard' ? '#fff' : 'var(--text-muted)'
            }}
          >
            <Trophy size={16} />
            <span>Rankings</span>
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button className="btn-primary" onClick={openCreateModal}>
            <PlusCircle size={17} />
            <span>Launch Campaign</span>
          </button>
        </div>

      </div>
    </header>
  );
}
