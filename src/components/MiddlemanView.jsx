import React from 'react';
import { 
  ShieldCheck, 
  DollarSign, 
  Percent, 
  Layers, 
  TrendingUp, 
  Eye, 
  Lock, 
  Sparkles, 
  Sliders,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function MiddlemanView({ 
  campaigns, 
  submissions, 
  platformFee, 
  setPlatformFee 
}) {
  // Financial metrics
  const totalVolumeProcessed = submissions.reduce((acc, s) => acc + s.grossPayout, 0);
  const middlemanRevenue = submissions.reduce((acc, s) => acc + s.platformFee, 0);
  const totalClippersPaid = submissions
    .filter(s => s.status === 'Paid' || s.status === 'Approved')
    .reduce((acc, s) => acc + s.netPayout, 0);
  const totalEscrowLocked = campaigns.reduce((acc, c) => acc + (c.totalBudget - c.spentBudget), 0);
  const totalViewsTracked = campaigns.reduce((acc, c) => acc + c.totalViews, 0);

  // Projected Annual Platform Revenue at current fee %
  const projectedMonthlyVolume = totalVolumeProcessed * 3;
  const projectedMonthlyMiddlemanRev = projectedMonthlyVolume * (platformFee / 100);

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      
      {/* Banner */}
      <div className="glass-panel" style={{ 
        padding: '2rem 2.5rem', 
        marginBottom: '2rem', 
        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
        borderColor: 'rgba(6, 182, 212, 0.4)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div className="badge badge-cyan" style={{ marginBottom: '0.8rem' }}>
              <ShieldCheck size={14} /> MIDDLEMAN ENGINE // WHOP PROTOCOL
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.4rem', color: '#fff' }}>
              Platform Escrow & Middleman Fee Hub
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              As the middleman, you take an automated platform fee on every clip payout released between Brands and Clippers.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div className="glass-panel" style={{ padding: '1rem 1.5rem', textAlign: 'center', background: 'rgba(11, 13, 20, 0.8)' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Current Platform Fee</span>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent-cyan)', marginTop: '0.2rem' }}>
                {platformFee}%
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '1rem 1.5rem', textAlign: 'center', background: 'rgba(11, 13, 20, 0.8)' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Middleman Net Take</span>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent-emerald)', marginTop: '0.2rem' }}>
                ${middlemanRevenue.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
        
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Gross Volume Processed</span>
            <DollarSign size={18} color="var(--accent-purple)" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#fff' }}>
            ${totalVolumeProcessed.toFixed(2)}
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Total Payout Value</span>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Escrow Vault Active</span>
            <Lock size={18} color="var(--accent-cyan)" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent-cyan)' }}>
            ${totalEscrowLocked.toLocaleString()}
          </div>
          <span style={{ fontSize: '0.75rem', color: '#38bdf8' }}>Guarded in Smart Escrow</span>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Total Clippers Paid</span>
            <TrendingUp size={18} color="var(--accent-emerald)" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent-emerald)' }}>
            ${totalClippersPaid.toFixed(2)}
          </div>
          <span style={{ fontSize: '0.75rem', color: '#34d399' }}>Net Received by Creators</span>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Global Views Audited</span>
            <Eye size={18} color="#a855f7" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#a855f7' }}>
            {(totalViewsTracked / 1000000).toFixed(2)}M
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Across TikTok, Shorts, Reels</span>
        </div>

      </div>

      {/* Middleman Fee Configurator & Revenue Projection */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        
        {/* Fee Slider */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
            <Sliders size={20} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Middleman Take Rate Configurator</h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Adjust the platform fee charged on completed payout transactions. Whop standard is 10% - 15%.
          </p>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontWeight: '700' }}>
              <span>Platform Take Fee %</span>
              <span style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem' }}>{platformFee}%</span>
            </div>
            <input 
              type="range" 
              min="5" 
              max="25" 
              step="0.5"
              value={platformFee} 
              onChange={e => setPlatformFee(parseFloat(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-cyan)', cursor: 'pointer', height: '8px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
              <span>5% (Low Fee)</span>
              <span>12.5% (Standard)</span>
              <span>25% (Premium)</span>
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Example Transaction ($100 payout):</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem', fontWeight: '600' }}>
              <span>Clipper Receives: ${(100 - platformFee).toFixed(2)}</span>
              <span style={{ color: 'var(--accent-emerald)' }}>Middleman Fee: ${platformFee.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Projected Revenue */}
        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <Sparkles size={20} color="var(--accent-emerald)" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Projected Platform Revenue</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Estimated revenue forecast based on active campaign budget pools & current take rate.
            </p>

            <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '1.2rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.78rem', color: '#34d399', fontWeight: '600', textTransform: 'uppercase' }}>Est. Monthly Middleman Take</span>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#34d399', marginTop: '0.2rem' }}>
                ${projectedMonthlyMiddlemanRev.toFixed(2)} / mo
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Assuming $50k/mo volume</span>
            </div>
          </div>

          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            ⚡ Automatic middleman fee deduction occurs at the precise moment of Brand Escrow Approval.
          </div>
        </div>

      </div>

      {/* Global Submissions Audit Log */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.2rem' }}>Global Clip Audit & Escrow Settlement Log</h3>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                <th style={{ padding: '0.8rem' }}>Sub ID</th>
                <th style={{ padding: '0.8rem' }}>Clipper</th>
                <th style={{ padding: '0.8rem' }}>Campaign</th>
                <th style={{ padding: '0.8rem' }}>Gross Payout</th>
                <th style={{ padding: '0.8rem' }}>Middleman Cut ({platformFee}%)</th>
                <th style={{ padding: '0.8rem' }}>Clipper Net</th>
                <th style={{ padding: '0.8rem' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map(s => (
                <tr key={s.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{s.id}</td>
                  <td style={{ padding: '0.8rem', fontWeight: '600', color: '#fff' }}>{s.clipperHandle}</td>
                  <td style={{ padding: '0.8rem', color: 'var(--text-muted)' }}>{s.campaignTitle}</td>
                  <td style={{ padding: '0.8rem', fontFamily: 'var(--font-mono)' }}>${s.grossPayout.toFixed(2)}</td>
                  <td style={{ padding: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', fontWeight: '700' }}>
                    +${(s.grossPayout * (platformFee / 100)).toFixed(2)}
                  </td>
                  <td style={{ padding: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--accent-cyan)' }}>
                    ${(s.grossPayout * (1 - platformFee / 100)).toFixed(2)}
                  </td>
                  <td style={{ padding: '0.8rem' }}>
                    {s.status === 'Paid' ? (
                      <span className="badge badge-emerald"><CheckCircle2 size={12} /> Settled</span>
                    ) : (
                      <span className="badge badge-amber">Pending Approval</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
