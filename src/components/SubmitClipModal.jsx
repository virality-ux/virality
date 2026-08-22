import React, { useState } from 'react';
import { Zap, Video, Eye, DollarSign, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SubmitClipModal({ 
  campaigns, 
  initialCampaign, 
  onClose, 
  onSubmitClip, 
  platformFee 
}) {
  const [selectedCampaignId, setSelectedCampaignId] = useState(
    initialCampaign ? initialCampaign.id : (campaigns[0]?.id || '')
  );
  const [videoUrl, setVideoUrl] = useState('');
  const [platform, setPlatform] = useState('TikTok');
  const [viewsInput, setViewsInput] = useState('45000');
  const [clipperHandle, setClipperHandle] = useState('@viral_clipper_pro');
  const [isSimulatingFetch, setIsSimulatingFetch] = useState(false);

  const selectedCampaign = campaigns.find(c => c.id === selectedCampaignId) || campaigns[0];

  // Calculation formulas
  const numericViews = parseInt(viewsInput, 10) || 0;
  const payoutRate = selectedCampaign ? selectedCampaign.payoutPer1k : 2.50;
  
  // Calculate gross before cap
  const calculatedGross = (numericViews / 1000) * payoutRate;
  const maxCap = selectedCampaign ? selectedCampaign.maxPayoutPerClip : 500;
  const grossPayout = Math.min(calculatedGross, maxCap);

  // Platform Middleman Fee
  const feeAmount = grossPayout * (platformFee / 100);
  const netPayout = Math.max(0, grossPayout - feeAmount);

  // Simulate automated TikTok/YouTube API view count verification
  const handleSimulateLiveFetch = () => {
    setIsSimulatingFetch(true);
    setTimeout(() => {
      const randomViews = Math.floor(Math.random() * 180000) + 12000;
      setViewsInput(randomViews.toString());
      setIsSimulatingFetch(false);
    }, 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!videoUrl || numericViews <= 0) return;

    // Trigger celebratory confetti animation!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    onSubmitClip({
      campaignId: selectedCampaign.id,
      campaignTitle: selectedCampaign.title,
      clipperHandle: clipperHandle.startsWith('@') ? clipperHandle : `@${clipperHandle}`,
      clipperAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      videoUrl,
      platform,
      views: numericViews,
      payoutRate,
      grossPayout,
      platformFee: feeAmount,
      netPayout,
      status: 'Pending',
      submittedAt: new Date().toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
      proofScreenshot: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&auto=format&fit=crop&q=80'
    });

    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ padding: '0.6rem', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '12px', color: 'var(--accent-purple)' }}>
              <Zap size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: '800' }}>Submit Clip for Payout</h2>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Automated view count verification & middleman escrow calculation</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', fontSize: '1.4rem', cursor: 'pointer' }}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          
          {/* Campaign Selector */}
          <div className="form-group">
            <label>Select Target Campaign</label>
            <select 
              className="input-field"
              value={selectedCampaignId}
              onChange={e => setSelectedCampaignId(e.target.value)}
              style={{ background: '#181e30', color: '#fff' }}
            >
              {campaigns.map(c => (
                <option key={c.id} value={c.id}>
                  {c.title} (${c.payoutPer1k.toFixed(2)}/1k views)
                </option>
              ))}
            </select>
          </div>

          {/* Social Handle & Platform */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label>Your Handle / Username</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="@yourusername" 
                value={clipperHandle}
                onChange={e => setClipperHandle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Platform Posted</label>
              <select 
                className="input-field"
                value={platform}
                onChange={e => setPlatform(e.target.value)}
                style={{ background: '#181e30', color: '#fff' }}
              >
                <option value="TikTok">TikTok</option>
                <option value="YouTube Shorts">YouTube Shorts</option>
                <option value="Instagram Reels">Instagram Reels</option>
                <option value="Kick">Kick Clips</option>
              </select>
            </div>
          </div>

          {/* Video URL Input */}
          <div className="form-group">
            <label>Video URL / Clip Link</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="url" 
                className="input-field" 
                placeholder="https://www.tiktok.com/@username/video/123456789"
                value={videoUrl}
                onChange={e => setVideoUrl(e.target.value)}
                style={{ width: '100%' }}
                required
              />
            </div>
          </div>

          {/* View Count Input + Live Simulation Button */}
          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <label style={{ margin: 0 }}>Current View Count</label>
              <button 
                type="button" 
                onClick={handleSimulateLiveFetch}
                style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', fontSize: '0.78rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: '600' }}
              >
                <RefreshCw size={13} className={isSimulatingFetch ? 'animate-spin' : ''} />
                <span>Simulate Live Fetch</span>
              </button>
            </div>
            <input 
              type="number" 
              className="input-field" 
              placeholder="e.g. 50000"
              value={viewsInput}
              onChange={e => setViewsInput(e.target.value)}
              min="0"
              required
            />
          </div>

          {/* Real-time Middleman Escrow Payout Breakdown Card */}
          <div style={{ background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: 'var(--radius-md)', padding: '1.2rem', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#a5b4fc', textTransform: 'uppercase', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={16} /> Escrow Payout Calculation
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.8rem', textAlign: 'center' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Gross Earnings</span>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', marginTop: '0.2rem' }}>
                  ${grossPayout.toFixed(2)}
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Platform Fee ({platformFee}%)</span>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fb7185', marginTop: '0.2rem' }}>
                  -${feeAmount.toFixed(2)}
                </div>
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.75rem', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.7rem', color: '#34d399', fontWeight: '700' }}>Your Net Payout</span>
                <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#34d399', marginTop: '0.2rem' }}>
                  ${netPayout.toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div style={{ display: 'flex', gap: '0.8rem' }}>
            <button type="button" className="btn-secondary" style={{ flex: 1 }} onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-emerald" style={{ flex: 2, justifyContent: 'center', padding: '0.75rem' }}>
              <Sparkles size={16} /> Confirm Clip Submission
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
