import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ClipperMarketplace from './components/ClipperMarketplace';
import BrandView from './components/BrandView';
import MiddlemanView from './components/MiddlemanView';
import LeaderboardView from './components/LeaderboardView';
import SubmitClipModal from './components/SubmitClipModal';
import CreateCampaignModal from './components/CreateCampaignModal';
import { initialCampaigns, initialSubmissions } from './mockData';

export default function App() {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [platformFee, setPlatformFee] = useState(12.5); // Default Whop-style Middleman Fee %
  const [activeRole, setActiveRole] = useState('clipper'); // 'clipper' | 'brand' | 'middleman' | 'leaderboard'
  
  // Modals
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedCampaignForSubmit, setSelectedCampaignForSubmit] = useState(null);

  // Toast notifications state
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Handlers
  const handleOpenSubmitModal = (campaign = null) => {
    setSelectedCampaignForSubmit(campaign);
    setIsSubmitModalOpen(true);
  };

  const handleCloseSubmitModal = () => {
    setIsSubmitModalOpen(false);
    setSelectedCampaignForSubmit(null);
  };

  const handleSubmitClip = (newSubmission) => {
    const updated = [newSubmission, ...submissions];
    setSubmissions(updated);
    showToast(`🚀 Clip submitted for "${newSubmission.campaignTitle}"! Sent to approval queue.`);
  };

  const handleCreateCampaign = (newCampaign) => {
    setCampaigns([newCampaign, ...campaigns]);
    showToast(`✨ Campaign "${newCampaign.title}" created with $${newCampaign.totalBudget} escrow!`);
  };

  const handleApproveSubmission = (submissionId) => {
    setSubmissions(prev => prev.map(s => {
      if (s.id === submissionId) {
        // Update campaign spent budget and views
        setCampaigns(cPrev => cPrev.map(c => {
          if (c.id === s.campaignId) {
            return {
              ...c,
              spentBudget: c.spentBudget + s.grossPayout,
              totalViews: c.totalViews + s.views
            };
          }
          return c;
        }));
        return { ...s, status: 'Paid' };
      }
      return s;
    }));

    showToast(`💰 Escrow released! Net payout sent to clipper.`);
  };

  const handleRejectSubmission = (submissionId) => {
    setSubmissions(prev => prev.map(s => {
      if (s.id === submissionId) return { ...s, status: 'Rejected' };
      return s;
    }));
    showToast(`⚠️ Clip submission flagged as rejected.`);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: 'linear-gradient(135deg, #181e30, #0f131f)',
          border: '1px solid var(--accent-purple)',
          color: '#fff',
          padding: '1rem 1.4rem',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.7), 0 0 20px rgba(139, 92, 246, 0.3)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          fontSize: '0.9rem',
          fontWeight: '600',
          animation: 'fadeIn 0.25s ease-out'
        }}>
          {toastMessage}
        </div>
      )}

      {/* Main Navbar */}
      <Navbar 
        activeRole={activeRole} 
        setActiveRole={setActiveRole} 
        openCreateModal={() => setIsCreateModalOpen(true)}
        platformFee={platformFee}
      />

      {/* Main Active View */}
      <main style={{ flex: 1 }}>
        {activeRole === 'clipper' && (
          <ClipperMarketplace 
            campaigns={campaigns} 
            submissions={submissions}
            openSubmitModal={handleOpenSubmitModal}
            platformFee={platformFee}
          />
        )}

        {activeRole === 'brand' && (
          <BrandView 
            campaigns={campaigns}
            submissions={submissions}
            onApproveSubmission={handleApproveSubmission}
            onRejectSubmission={handleRejectSubmission}
            openCreateModal={() => setIsCreateModalOpen(true)}
            platformFee={platformFee}
          />
        )}

        {activeRole === 'middleman' && (
          <MiddlemanView 
            campaigns={campaigns}
            submissions={submissions}
            platformFee={platformFee}
            setPlatformFee={setPlatformFee}
          />
        )}

        {activeRole === 'leaderboard' && (
          <LeaderboardView />
        )}
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border-subtle)', padding: '2rem 1.5rem', marginTop: '4rem', background: 'rgba(7, 9, 14, 0.95)', textAlign: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          <div>
            <strong style={{ color: '#fff' }}>VIRALITY</strong> — Whop-Style Clipping Middleman Infrastructure Engine
          </div>
          <div>
            Smart Escrow Contracts • Live TikTok/Shorts View Audits • Automated Middleman Fee Settlement ({platformFee}%)
          </div>
        </div>
      </footer>

      {/* Modals */}
      {isSubmitModalOpen && (
        <SubmitClipModal 
          campaigns={campaigns}
          initialCampaign={selectedCampaignForSubmit}
          onClose={handleCloseSubmitModal}
          onSubmitClip={handleSubmitClip}
          platformFee={platformFee}
        />
      )}

      {isCreateModalOpen && (
        <CreateCampaignModal 
          onClose={() => setIsCreateModalOpen(false)}
          onCreateCampaign={handleCreateCampaign}
          platformFee={platformFee}
        />
      )}

    </div>
  );
}
