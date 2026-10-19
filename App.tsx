
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { UserState, SessionResult, Lesson, WeekPlan, User, UserRole, AdaptiveDrill } from './types';
import { WEEKLY_PLANS, MOCK_RECENT_SESSIONS, MOCK_LONG_TERM_HISTORY } from './constants';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import { Mic2, LayoutDashboard, BookOpen, Award, ChevronRight, Play, Lock, X, Target, CheckCircle, Info, Sparkles, ChevronDown, ChevronUp, Palette, LogOut, Star, Dumbbell } from 'lucide-react';
import LivePractice from './components/LivePractice';
import SessionFeedback from './components/SessionFeedback';
import ProgressAnalytics from './components/ProgressAnalytics';
import DesignSystem from './components/DesignSystem';
import Login from './components/Login';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import AdaptivePractice from './components/AdaptivePractice';
import RestrictedAccess from './components/RestrictedAccess';

// --- Logic Helpers ---

const isContentLocked = (user: User, weekId: number, lessonDay: number): boolean => {
  if (user.role === 'admin' || user.role === 'premium') return false;
  
  // Freemium Logic: Free users only get Week 1, Lessons 1-3
  if (weekId === 1 && lessonDay <= 3) return false;
  
  return true;
};

// --- Components ---

export const Navigation = ({ user, onLogout, onShowPricing }: { user: User, onLogout: () => void, onShowPricing: () => void }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Dumbbell, label: 'Daily Mix', path: '/adaptive' },
    { icon: BookOpen, label: 'Curriculum', path: '/curriculum' },
    { icon: Award, label: 'Progress', path: '/progress' },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-mist border-t border-warm-gray/10 md:relative md:w-64 md:h-screen md:flex-col md:border-r md:border-t-0 md:justify-start pt-8 z-50">
      <div className="hidden md:flex flex-col items-center mb-8 px-6">
        <div className="w-12 h-12 bg-apricot rounded-2xl flex items-center justify-center shadow-sm mb-3">
          <Mic2 className="text-deep-brown w-6 h-6" />
        </div>
        <h1 className="font-display font-bold text-xl text-deep-brown tracking-tight">Nuance AI</h1>
        <div className="mt-2 px-3 py-1 bg-white border border-warm-beige rounded-full text-[10px] font-bold uppercase tracking-wider text-deep-brown flex items-center gap-1">
           {user.role === 'free' ? <span className="w-2 h-2 rounded-full bg-warm-gray"></span> : <Star className="w-3 h-3 text-apricot fill-current"/>}
           {user.role === 'admin' ? 'Admin Access' : user.role === 'premium' ? 'Premium' : 'Free Plan'}
        </div>
      </div>

      <div className="flex justify-around md:flex-col md:space-y-2 md:px-4">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            className={`flex md:flex-row flex-col items-center md:px-4 md:py-3 p-3 rounded-xl transition-all duration-200 group ${isActive(item.path) ? 'bg-white shadow-sm' : 'hover:bg-warm-beige'}`}
          >
            <item.icon className={`w-5 h-5 mb-1 md:mb-0 md:mr-3 transition-colors ${isActive(item.path) ? 'text-deep-brown' : 'text-warm-gray group-hover:text-deep-brown'}`} />
            <span className={`text-[10px] md:text-sm font-label font-bold tracking-wide transition-colors ${isActive(item.path) ? 'text-deep-brown' : 'text-warm-gray group-hover:text-deep-brown'}`}>{item.label}</span>
          </Link>
        ))}

        {user.role === 'free' && (
           <button 
             onClick={onShowPricing}
             className="hidden md:flex flex-row items-center px-4 py-3 rounded-xl bg-deep-brown text-white mt-4 mx-2 shadow-lg hover:bg-black transition-all"
           >
              <Star className="w-4 h-4 mr-3 text-apricot" />
              <span className="text-sm font-label font-bold tracking-wide">Upgrade</span>
           </button>
        )}
        
        <button 
            onClick={onLogout}
            className={`hidden md:flex flex-row items-center px-4 py-3 rounded-xl transition-all duration-200 group mt-auto hover:bg-coral/10`}
          >
            <LogOut className="w-5 h-5 mr-3 text-warm-gray group-hover:text-coral" />
            <span className="text-sm font-label font-bold tracking-wide text-warm-gray group-hover:text-coral">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export const Dashboard = ({ userState, user, onPreview, onShowPricing }: { userState: UserState, user: User, onPreview: (week: WeekPlan, lesson: Lesson) => void, onShowPricing: () => void }) => {
  const currentWeekPlan = WEEKLY_PLANS.find(w => w.id === userState.currentWeek) || WEEKLY_PLANS[0];
  const nextLesson = currentWeekPlan.lessons.find(l => l.day === userState.currentDay) || currentWeekPlan.lessons[0];
  const locked = isContentLocked(user, currentWeekPlan.id, nextLesson.day);

  return (
    <div className="p-6 md:p-12 space-y-8 pb-24 md:pb-12 max-w-5xl mx-auto font-sans">
      <header className="flex justify-between items-end">
        <div>
           <h1 className="font-display text-3xl font-bold text-deep-brown mb-2">Welcome back, {user.username}</h1>
           <p className="text-warm-gray">Ready to master your communication skills?</p>
        </div>
      </header>
      
      {/* Current Lesson Card */}
      <div className="bg-white border border-warm-beige rounded-[32px] p-8 relative overflow-hidden shadow-xl">
         <div className="relative z-10">
           <div className="inline-flex items-center gap-2 bg-mist px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-warm-beige text-warm-gray">
             <Target className="w-3 h-3 text-coral" /> Up Next
           </div>
           <h2 className="text-3xl font-display font-bold mb-2 text-deep-brown">{nextLesson.focus}</h2>
           <p className="text-warm-gray mb-8 max-w-xl leading-relaxed">{nextLesson.description}</p>
           
           {locked ? (
              <button 
                onClick={onShowPricing}
                className="bg-deep-brown hover:bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-transform transform hover:scale-105 shadow-lg"
              >
                <Lock className="w-5 h-5" /> Unlock Premium to Start
              </button>
           ) : (
              <button 
                onClick={() => onPreview(currentWeekPlan, nextLesson)}
                className="bg-apricot hover:bg-apricot-hover text-deep-brown px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-transform transform hover:scale-105 shadow-lg shadow-apricot/20"
              >
                <Play className="w-5 h-5 fill-current" /> Start Session
              </button>
           )}
         </div>
         {/* Background decoration */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-apricot/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      </div>

      {/* Progress Snapshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-white p-6 rounded-3xl border border-warm-beige shadow-sm min-w-0">
            <h3 className="font-display font-bold text-lg mb-4 text-deep-brown">Recent Activity</h3>
            <div className="h-40 w-full min-w-0">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={MOCK_RECENT_SESSIONS}>
                   <XAxis dataKey="label" tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                   <Tooltip 
                      cursor={{fill: 'transparent'}} 
                      contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.05)'}}
                   />
                   <Bar dataKey="score" fill="#FF9A7B" radius={[4, 4, 0, 0]} />
                 </BarChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="bg-white p-6 rounded-3xl border border-warm-beige shadow-sm min-w-0">
            <h3 className="font-display font-bold text-lg mb-4 text-deep-brown">Current Focus</h3>
            <div className="space-y-4">
               <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-bold text-deep-brown">{currentWeekPlan.title}</span>
                    <span className="text-warm-gray">Week {currentWeekPlan.id}/6</span>
                  </div>
                  <div className="w-full bg-mist rounded-full h-2">
                    <div className="bg-eucalyptus h-2 rounded-full" style={{width: `${(userState.currentDay / 7) * 100}%`}}></div>
                  </div>
               </div>
               <div className="p-4 bg-mist/50 rounded-xl">
                 <h4 className="text-xs font-bold text-warm-gray uppercase tracking-wider mb-2">Core Skills</h4>
                 <div className="flex flex-wrap gap-2">
                   {currentWeekPlan.coreSkills.map(skill => (
                     <span key={skill} className="text-xs bg-white px-2 py-1 rounded-md border border-warm-beige text-deep-brown font-medium">
                       {skill}
                     </span>
                   ))}
                 </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export const LessonPreviewModal = ({ week, lesson, onStart, onCancel }: { week: WeekPlan, lesson: Lesson, onStart: () => void, onCancel: () => void }) => {
  const [showAllScoring, setShowAllScoring] = useState(false);
  const displayedMetrics = showAllScoring ? week.evaluationFocus : week.evaluationFocus.slice(0, 3);

  return (
    <div className="fixed inset-0 bg-deep-brown/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
       <div className="bg-white rounded-[32px] max-w-2xl w-full p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
          <button onClick={onCancel} className="absolute top-6 right-6 text-warm-gray hover:text-deep-brown">
             <X className="w-6 h-6" />
          </button>

          <div className="mb-6">
             <span className="text-xs font-bold uppercase tracking-wider text-eucalyptus mb-2 block">{week.title}</span>
             <h2 className="text-3xl font-display font-bold text-deep-brown mb-2">{lesson.focus}</h2>
             <p className="text-warm-gray text-lg">{lesson.task}</p>
          </div>

          <div className="space-y-6 mb-8">
             <div className="bg-mist/50 p-5 rounded-2xl border border-warm-beige">
                <h3 className="text-sm font-bold text-deep-brown uppercase tracking-wide mb-3 flex items-center gap-2">
                   <Target className="w-4 h-4 text-apricot" /> The Mission
                </h3>
                <p className="text-deep-brown/80 leading-relaxed text-sm">
                   {lesson.description}
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-warm-beige p-4 rounded-2xl">
                   <h3 className="text-xs font-bold text-warm-gray uppercase tracking-wide mb-3">Focus Areas</h3>
                   <div className="flex flex-wrap gap-2">
                      {week.coreSkills.slice(0, 4).map(skill => (
                        <span key={skill} className="text-xs bg-mist px-2 py-1 rounded-md text-deep-brown font-medium border border-warm-beige">
                           {skill}
                        </span>
                      ))}
                   </div>
                </div>

                <div className="bg-white border border-warm-beige p-4 rounded-2xl">
                   <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xs font-bold text-warm-gray uppercase tracking-wide">Scoring Criteria</h3>
                      {week.evaluationFocus.length > 3 && (
                        <button 
                          onClick={() => setShowAllScoring(!showAllScoring)}
                          className="text-[10px] font-bold text-apricot-hover underline"
                        >
                          {showAllScoring ? "Show Less" : "See All"}
                        </button>
                      )}
                   </div>
                   <ul className="space-y-2">
                      {displayedMetrics.map(focus => (
                        <li key={focus} className="text-xs text-deep-brown flex items-center gap-2">
                           <CheckCircle className="w-3 h-3 text-eucalyptus" />
                           {focus}
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
          </div>

          <div className="flex gap-4">
             <button onClick={onCancel} className="flex-1 py-4 rounded-full font-bold text-deep-brown border border-warm-beige hover:bg-mist transition-colors">
                Cancel
             </button>
             <button onClick={onStart} className="flex-[2] py-4 rounded-full font-bold text-deep-brown bg-apricot hover:bg-apricot-hover shadow-lg shadow-apricot/20 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                <Mic2 className="w-5 h-5" /> Start Practice
             </button>
          </div>
       </div>
    </div>
  );
};

export const Curriculum = ({ userState, user, onPreview, onShowPricing }: { userState: UserState, user: User, onPreview: (week: WeekPlan, lesson: Lesson) => void, onShowPricing: () => void }) => {
  const [expandedWeek, setExpandedWeek] = useState<number>(userState.currentWeek);

  return (
    <div className="p-6 md:p-12 pb-24 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="font-display text-3xl font-bold text-deep-brown mb-2">Training Plan</h1>
        <p className="text-warm-gray">Your 6-week journey to conversational mastery.</p>
      </header>

      <div className="space-y-4">
        {WEEKLY_PLANS.map((week) => {
          const isCurrent = week.id === userState.currentWeek;
          const isExpanded = expandedWeek === week.id;

          return (
            <div key={week.id} className={`rounded-3xl border transition-all duration-300 overflow-hidden ${isCurrent ? 'bg-white border-apricot shadow-md' : 'bg-white border-warm-beige'}`}>
              <button 
                onClick={() => setExpandedWeek(isExpanded ? 0 : week.id)}
                className={`w-full p-6 flex items-center justify-between text-left`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${isCurrent ? 'bg-apricot text-deep-brown' : 'bg-eucalyptus text-white'}`}>
                    {week.id}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-deep-brown text-lg">{week.title}</h3>
                    <p className="text-sm text-warm-gray">{week.theme}</p>
                  </div>
                </div>
                {isExpanded ? <ChevronUp className="w-5 h-5 text-warm-gray" /> : <ChevronDown className="w-5 h-5 text-warm-gray" />}
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 space-y-3">
                  {week.lessons.map((lesson) => {
                    const locked = isContentLocked(user, week.id, lesson.day);
                    const isLessonCompleted = lesson.completed;
                    const isLessonActive = !locked && !isLessonCompleted && week.id === userState.currentWeek && lesson.day === userState.currentDay;

                    return (
                      <div 
                        key={lesson.day} 
                        onClick={() => locked ? onShowPricing() : onPreview(week, lesson)}
                        className={`flex items-center justify-between p-4 rounded-xl transition-colors group cursor-pointer ${
                            locked ? 'bg-mist opacity-70 border border-transparent' :
                            isLessonActive ? 'bg-apricot/10 border border-apricot/30' : 
                            'bg-mist/30 hover:bg-mist/60 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                              locked ? 'bg-warm-gray/20 text-warm-gray' :
                              isLessonCompleted ? 'bg-eucalyptus/20 text-eucalyptus' : 
                              isLessonActive ? 'bg-apricot text-deep-brown' : 
                              'bg-white border border-warm-beige text-warm-gray'
                            }`}>
                            {locked ? <Lock className="w-3 h-3" /> : isLessonCompleted ? <CheckCircle className="w-4 h-4" /> : lesson.day}
                          </div>
                          <div>
                            <h4 className={`font-bold text-sm ${isLessonActive ? 'text-deep-brown' : 'text-deep-brown/80'}`}>{lesson.focus}</h4>
                            <p className="text-xs text-warm-gray">{lesson.task}</p>
                          </div>
                        </div>
                        <button className={`p-2 rounded-full transition-all ${locked ? 'text-warm-gray' : 'opacity-0 group-hover:opacity-100 bg-deep-brown text-white'}`}>
                          {locked ? <Lock className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [showPricing, setShowPricing] = useState(false);

  const [userState, setUserState] = useState<UserState>({
    currentWeek: 1,
    currentDay: 1,
    sessionHistory: MOCK_LONG_TERM_HISTORY
  });

  const [selectedPreview, setSelectedPreview] = useState<{ week: WeekPlan, lesson: Lesson } | null>(null);
  const [activeSession, setActiveSession] = useState<{ week: WeekPlan, lesson: Lesson } | null>(null);
  const [viewingResult, setViewingResult] = useState<SessionResult | null>(null);

  // --- Auth Handlers ---
  const handleLogin = (username: string, role: UserRole) => {
    setUser({ username, role });
  };

  const handleLogout = () => {
    setUser(null);
    setActiveSession(null);
    setViewingResult(null);
    setSelectedPreview(null);
  };

  const handleUpgrade = () => {
    if (user) {
      setUser({ ...user, role: 'premium' });
      setShowPricing(false);
    }
  };

  // --- Flow Handlers ---

  const handlePreviewLesson = (week: WeekPlan, lesson: Lesson) => {
     setSelectedPreview({ week, lesson });
  };

  const handleStartSession = () => {
    if (selectedPreview) {
      setActiveSession(selectedPreview);
      setSelectedPreview(null);
    }
  };

  const handleStartAdaptiveDrill = (drill: AdaptiveDrill) => {
    // Map drill to Lesson format
    const drillLesson: Lesson = {
        day: 0, // Virtual day
        focus: drill.title,
        task: drill.goal,
        description: drill.taskPrompt,
        sessionMode: 'coaching', // Default to coaching for drills
        completed: false,
        aiContext: drill.aiContext
    };

    // Use a virtual week ID (99) for adaptive drills
    setActiveSession({
        week: {
            id: 99,
            title: "Adaptive Practice",
            theme: "Personalized Skill Building",
            coreSkills: drill.primaryMetrics,
            lessons: [drillLesson],
            evaluationFocus: drill.primaryMetrics
        },
        lesson: drillLesson
    });
  };

  const handleCompleteSession = (result: SessionResult) => {
    setActiveSession(null);
    setViewingResult(result);
    setUserState(prev => ({
      ...prev,
      sessionHistory: [...prev.sessionHistory, result],
    }));
  };

  // --- Render ---

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  if (activeSession) {
    return (
      <div className="fixed inset-0 bg-mist p-4 md:p-8 z-50 overflow-hidden">
        <LivePractice 
          lesson={activeSession.lesson}
          weekId={activeSession.week.id}
          weekTheme={activeSession.week.theme}
          evaluationFocus={activeSession.week.evaluationFocus}
          onComplete={handleCompleteSession}
          onCancel={() => setActiveSession(null)}
        />
      </div>
    );
  }

  if (viewingResult) {
    return (
      <div className="fixed inset-0 bg-mist p-4 md:p-8 z-50 overflow-y-auto">
        <SessionFeedback 
          result={viewingResult} 
          onClose={() => setViewingResult(null)} 
        />
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen bg-mist">
        <Navigation 
           user={user} 
           onLogout={handleLogout} 
           onShowPricing={() => setShowPricing(true)}
        />
        
        {/* Main Content Area */}
        <main className="flex-1 bg-[#FDFCF8] rounded-tl-[40px] shadow-[-20px_0_60px_rgba(0,0,0,0.05)] overflow-y-auto min-h-screen relative z-10">
          <Routes>
            <Route path="/" element={<Dashboard userState={userState} user={user} onPreview={handlePreviewLesson} onShowPricing={() => setShowPricing(true)} />} />
            <Route path="/adaptive" element={<AdaptivePractice userState={userState} onStartDrill={handleStartAdaptiveDrill} />} />
            <Route path="/curriculum" element={<Curriculum userState={userState} user={user} onPreview={handlePreviewLesson} onShowPricing={() => setShowPricing(true)} />} />
            <Route path="/progress" element={<ProgressAnalytics history={userState.sessionHistory} />} />
            <Route path="/roadmap" element={user.role === 'admin' ? <Roadmap /> : <RestrictedAccess />} />
            <Route path="/design" element={<DesignSystem />} />
          </Routes>
        </main>
        
        {/* Lesson Preview Modal */}
        {selectedPreview && (
          <LessonPreviewModal 
            week={selectedPreview.week}
            lesson={selectedPreview.lesson}
            onStart={handleStartSession}
            onCancel={() => setSelectedPreview(null)}
          />
        )}

        {/* Pricing Modal */}
        {showPricing && (
           <Pricing 
              onClose={() => setShowPricing(false)} 
              onUpgrade={handleUpgrade} 
           />
        )}
      </div>
    </Router>
  );
};

export default App;
