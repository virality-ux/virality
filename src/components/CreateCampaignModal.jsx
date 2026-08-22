import React, { useState } from 'react';
import { Briefcase, DollarSign, PlusCircle, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CreateCampaignModal({ onClose, onCreateCampaign, platformFee }) {
  const [title, setTitle] = useState('');
  const [brandName, setBrandName] = useState('');
  const [platform, setPlatform] = useState('TikTok');
  const [category, setCategory] = useState('AI & SaaS');
  const [payoutPer1k, setPayoutPer1k] = useState('2.50');
  const [totalBudget, setTotalBudget] = useState('5000');
  const [maxPayoutPerClip, setMaxPayoutPerClip] = useState('500');
  const [assetsUrl, setAssetsUrl] = useState('https://drive.google.com/drive/folders/brand-clips');
  const [brief, setBrief] = useState('');
  const [requirementsInput, setRequirementsInput] = useState('Must include #hashtag\nMust tag account\nLink in bio mandatory');

  const budgetNumber = parseFloat(totalBudget) || 0;
  const middlemanReserve = budgetNumber * (platformFee / 100);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !brandName || budgetNumber <= 0) return;

    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 }
    });

    const newCampaign = {
      id: `camp-${Date.now()}`,
      title,
      brandName,
      brandAvatar: `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80`,
      platform,
      category,
      payoutPer1k: parseFloat(payoutPer1k) || 2.00,
      totalBudget: budgetNumber,
      spentBudget: 0,
      maxPayoutPerClip: parseFloat(maxPayoutPerClip) || 500,
      minViewsForPayout: 1000,
      totalViews: 0,
      assetsUrl,
      brief: brief || 'Create high-converting short clips using our raw video assets.',
      requirements: requirementsInput.split('\n').filter(r => r.trim() !== ''),
      status: 'Active',
      createdAt: new Date().toISOString().split('T')[0]
    };

    onCreateCampaign(newCampaign);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ padding: '0.6rem', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '12px', color: 'var(--accent-purple)' }}>
              <Briefcase size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: '800' }}>Launch Clipping Campaign</h2>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Deposit funds into automated Whop middleman escrow</p>
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
          
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label>Campaign Title</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g. Apex AI SaaS Product Launch"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Brand / Creator Name</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g. Apex AI"
                value={brandName}
                onChange={e => setBrandName(e.target.value)}
                required
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label>Target Platform</label>
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

            <div className="form-group">
              <label>Category</label>
              <select 
                className="input-field"
                value={category}
                onChange={e => setCategory(e.target.value)}
                style={{ background: '#181e30', color: '#fff' }}
              >
                <option value="AI & SaaS">AI & SaaS</option>
                <option value="Crypto & Finance">Crypto & Finance</option>
                <option value="Gaming & Fitness">Gaming & Fitness</option>
                <option value="Lifestyle & Podcast">Lifestyle & Podcast</option>
              </select>
            </div>

            <div className="form-group">
              <label>Payout Per 1,000 Views ($)</label>
              <input 
                type="number" 
                step="0.10"
                className="input-field" 
                placeholder="2.50"
                value={payoutPer1k}
                onChange={e => setPayoutPer1k(e.target.value)}
                required
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label>Total Campaign Escrow Budget ($)</label>
              <input 
                type="number" 
                className="input-field" 
                placeholder="5000"
                value={totalBudget}
                onChange={e => setTotalBudget(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Max Payout Cap Per Single Clip ($)</label>
              <input 
                type="number" 
                className="input-field" 
                placeholder="500"
                value={maxPayoutPerClip}
                onChange={e => setMaxPayoutPerClip(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Raw Video Assets Link (Google Drive / Dropbox)</label>
            <input 
              type="url" 
              className="input-field" 
              placeholder="https://drive.google.com/drive/folders/..."
              value={assetsUrl}
              onChange={e => setAssetsUrl(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Campaign Brief & Creative Guidelines</label>
            <textarea 
              className="input-field" 
              placeholder="Explain how clippers should edit your footage, hooks to use, background music style..."
              value={brief}
              onChange={e => setBrief(e.target.value)}
              rows={3}
              required
            />
          </div>

          <div className="form-group">
            <label>Requirements (1 per line)</label>
            <textarea 
              className="input-field" 
              value={requirementsInput}
              onChange={e => setRequirementsInput(e.target.value)}
              rows={3}
            />
          </div>

          {/* Middleman Reserve Notice */}
          <div style={{ background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#fff' }}>Whop Escrow Deposit Protection</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Middleman fee ({platformFee}%) reserved on payout execution</div>
            </div>
            <div style={{ textAlign: 'right', fontWeight: '800', color: 'var(--accent-cyan)' }}>
              ${budgetNumber.toLocaleString()} Deposit
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.8rem' }}>
            <button type="button" className="btn-secondary" style={{ flex: 1 }} onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary" style={{ flex: 2, justifyContent: 'center' }}>
              <Sparkles size={16} /> Deposit Escrow & Launch Campaign
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
