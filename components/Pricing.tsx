
import React from 'react';
import { CheckCircle, Star, X, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onClose: () => void;
  onUpgrade: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onClose, onUpgrade }) => {
  return (
    <div className="fixed inset-0 bg-deep-brown/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in">
       <div className="bg-white rounded-[40px] max-w-lg w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="bg-deep-brown p-8 relative overflow-hidden text-center">
             <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
               <X className="w-6 h-6" />
             </button>
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-apricot/20 to-transparent opacity-50"></div>
             
             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-apricot text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
               <Star className="w-3 h-3 fill-current" /> Premium Plan
             </div>
             <h2 className="text-3xl font-display font-bold text-white mb-2">Unlock Full Potential</h2>
             <p className="text-white/70 text-sm">Master communication with unlimited access.</p>
          </div>

          <div className="p-8">
            <div className="flex justify-center items-baseline gap-1 mb-8">
               <span className="text-5xl font-display font-bold text-deep-brown">₹499</span>
               <span className="text-warm-gray font-medium">/ month</span>
            </div>

            <div className="space-y-4 mb-8">
               <FeatureRow text="Access to all 42 lessons & scenarios" />
               <FeatureRow text="Advanced Conflict & Negotiation modules" />
               <FeatureRow text="Unlimited AI practice sessions" />
               <FeatureRow text="Detailed long-term analytics" />
               <FeatureRow text="Priority support" />
            </div>

            <button 
              onClick={onUpgrade}
              className="w-full bg-apricot hover:bg-apricot-hover text-deep-brown py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-apricot/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
               <ShieldCheck className="w-5 h-5" /> Upgrade Now
            </button>
            
            <p className="text-center text-xs text-warm-gray mt-4">
               Secure payment. Cancel anytime.
            </p>
          </div>
       </div>
    </div>
  );
};

const FeatureRow = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
     <CheckCircle className="w-5 h-5 text-eucalyptus shrink-0 mt-0.5" />
     <span className="text-deep-brown font-medium text-sm">{text}</span>
  </div>
);

export default Pricing;
