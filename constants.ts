

import { WeekPlan, SessionMode, SessionResult } from './types';

export const AI_PERSONAS: Record<number, string> = {
  1: "Role: Warm & Encouraging Coach. Style: Patient, uses positive reinforcement, allows pauses, focuses on making the user feel safe to speak. Avoid interrupting.",
  2: "Role: Attentive Listener & Observer. Style: Focuses on non-verbal cues (tone/pace) descriptions, mirrors the user's energy, pauses to let the user reflect.",
  3: "Role: Empathetic & Vulnerable Partner. Style: Shares small 'personal' reflections to build rapport, uses soft tone, asks deep questions to foster connection.",
  4: "Role: Socratic & Logical Debater. Style: Neutral tone, challenges premises politely, asks 'Why?' often, focuses on structure and reasoning.",
  5: "Role: Assertive & Dissenting Colleague. Style: Professional but firm, pushes back on ideas, requires the user to de-escalate, interrupts occasionally if appropriate for conflict simulation.",
  6: "Role: Dynamic & Witty Conversationalist. Style: High energy, uses humor, adapts quickly between formal and informal, tests flow and timing."
};

export const SESSION_MODE_CONFIG: Record<SessionMode, string> = {
  coaching: `
    MODE: COACHING (Supportive Mentor)
    ROLE: You are a supportive, patient coach. 
    BEHAVIOR: Focus on positive reinforcement. Gently correct errors but prioritize confidence building. Allow long pauses.
    TONE: Warm, encouraging, soft.
  `,
  sparring: `
    MODE: SPARRING (Devil's Advocate)
    ROLE: You are a friendly but skeptical debating partner.
    BEHAVIOR: Actively challenge the user's logic. Point out contradictions politely. Do not let them get away with vague statements.
    TONE: Neutral, inquisitive, slightly challenging.
  `,
  interview: `
    MODE: INTERVIEW (Hiring Manager)
    ROLE: You are a professional interviewer or evaluator.
    BEHAVIOR: Ask probing, behavioral questions ("Tell me about a time..."). Keep the conversation formal and focused.
    TONE: Professional, structured, slightly distant but polite.
  `,
  negotiation: `
    MODE: NEGOTIATION (Assertive Counterpart)
    ROLE: You are a party with conflicting interests to the user.
    BEHAVIOR: Hold your ground. Make the user work for a compromise. Be assertive and firmly state your needs.
    TONE: Firm, serious, business-like.
  `,
  podcast: `
    MODE: PODCAST (Curious Host)
    ROLE: You are a podcast host interviewing the user as a guest.
    BEHAVIOR: Focus on their story. Ask "How did that feel?" or "What do you mean by that?". Dig for narrative and emotion.
    TONE: Enthusiastic, curious, engaging.
  `
};

export const SCORING_RUBRICS: Record<string, { definition: string; criteria: Record<string, string>; measurables: string[] }> = {
  "Clarity of Thought": {
    definition: "The ability to articulate ideas coherently, logically, and concisely without ambiguity.",
    criteria: {
      "0-40": "Rambling, disjointed sentences, main point is lost or unclear.",
      "41-70": "Generally understandable but includes unnecessary detours or vague language.",
      "71-100": "Crystal clear, precise vocabulary, logical progression of ideas with zero ambiguity."
    },
    measurables: ["Sentence structure complexity", "Use of logical connectors (therefore, however)", "Conciseness ratio"]
  },
  "Filler Word Usage": {
    definition: "The frequency of hesitation markers (um, uh, like, you know) that disrupt speech flow.",
    criteria: {
      "0-40": "Distracting frequency (>8 per minute), disrupts listener comprehension.",
      "41-70": "Noticeable but tolerable (3-7 per minute), often during transitions.",
      "71-100": "Rare to non-existent (<2 per minute), silence used effectively instead of fillers."
    },
    measurables: ["Count per minute", "Cluster frequency (e.g., 'um, like, yeah')"]
  },
  "Tone Modulation": {
    definition: "Variation in pitch, volume, and pace to convey emotion and emphasis, avoiding monotony.",
    criteria: {
      "0-40": "Monotone, flat affect, robotic, or inappropriate for the context.",
      "41-70": "Some variation, but falls into repetitive patterns or lacks range.",
      "71-100": "Dynamic, engaging range that perfectly matches the emotional content of words."
    },
    measurables: ["Pitch variance", "Volume emphasis on keywords", "Pace dynamics"]
  },
  "Voice Control": {
    definition: "Mastery over volume, breath support, and steadiness of voice.",
    criteria: {
      "0-40": "Too quiet/loud, shaky, running out of breath mid-sentence.",
      "41-70": "Adequate volume, occasional breathiness or minor shakiness.",
      "71-100": "Resonant, grounded, consistent volume, seamless breath management."
    },
    measurables: ["Volume stability", "Phrase length per breath", "Vocal fry presence"]
  },
  "Active Listening": {
    definition: "Demonstrating comprehension through relevant responses, referencing prior points, and avoiding interruption.",
    criteria: {
      "0-40": "Ignores partner's points, interrupts frequently, generic 'uh-huh' responses.",
      "41-70": "Acknowledges points but shifts focus back to self quickly, misses subtle cues.",
      "71-100": "Validates feelings, paraphrases accurately, asks insightful follow-ups."
    },
    measurables: ["Reference to partner's words", "Interruption count", "Turn-taking latency"]
  },
  "Empathy & Emotional Intelligence": {
    definition: "The ability to recognize, acknowledge, and appropriately respond to the emotions of others.",
    criteria: {
      "0-40": "Dismissive, logical-only response to emotion, tone mismatch (e.g., cheerful tone for sad topic).",
      "41-70": "Recognizes emotion but uses generic scripts ('I understand'), surface-level connection.",
      "71-100": "Deep validation, matches emotional intensity, specific acknowledgement of feelings."
    },
    measurables: ["Use of emotion words", "Validation phrases", "Tone matching"]
  },
  "Rapport Building": {
    definition: "Creating a sense of connection, trust, and mutual understanding.",
    criteria: {
      "0-40": "Cold, distant, transactional, or overly formal.",
      "41-70": "Polite and friendly but lacks personal connection or warmth.",
      "71-100": "Warm, inviting, creates a sense of 'us', uses shared language/humor."
    },
    measurables: ["Use of inclusive language (we, us)", "Mirroring vocabulary", "Warmth markers"]
  },
  "Questioning Ability": {
    definition: "Skill in asking open-ended, insightful questions that drive conversation deeper.",
    criteria: {
      "0-40": "No questions asked, or only closed (yes/no) questions.",
      "41-70": "Functional questions ('What happened next?'), basic curiosity.",
      "71-100": "Transformative questions that provoke deep thought or reveal underlying motivations."
    },
    measurables: ["Open vs Closed ratio", "Follow-up depth", "Relevance to previous turn"]
  },
  "Storytelling Ability": {
    definition: "Constructing a narrative with a clear hook, arc, and resolution that engages the listener.",
    criteria: {
      "0-40": "Disorganized, lacks context, boring, or ends abruptly.",
      "41-70": "Linear sequence of events, makes sense but lacks emotional hook or imagery.",
      "71-100": "Vivid imagery, emotional stakes, clear structure (Star/Hook -> Action -> Resolution)."
    },
    measurables: ["Sensory details used", "Narrative arc structure", "Listener engagement cues"]
  },
  "Logical Flow / Structure": {
    definition: "Ordering arguments and points in a way that is easy to follow and persuasive.",
    criteria: {
      "0-40": "Jumping between topics, non-sequiturs, contradictory statements.",
      "41-70": "Basic structure (First, Second, Finally), but transitions may be weak.",
      "71-100": "Seamless transitions, strong thesis, evidence directly supports claims."
    },
    measurables: ["Transition phrases", "Argument coherence", "Thesis clarity"]
  },
  "Persuasion & Influence": {
    definition: "Effectively changing minds or motivating action through ethos, logos, and pathos.",
    criteria: {
      "0-40": "Demanding, begging, or relying solely on weak opinions.",
      "41-70": "Presents logical reasons but lacks emotional appeal or credibility.",
      "71-100": "Masterful blend of credibility, logic, and emotion; compelling call to action."
    },
    measurables: ["Rhetorical devices", "Benefit-framing", "Call-to-action clarity"]
  },
  "Handling Objections / Criticism": {
    definition: "Responding to challenges without defensiveness, validating the concern, and pivoting.",
    criteria: {
      "0-40": "Defensive, aggressive, or shuts down ('That's not true').",
      "41-70": "Polite disagreement, but may not fully address the root concern.",
      "71-100": "Validates the objection ('I see why you feel X'), then reframes with new perspective."
    },
    measurables: ["Validation statements", "Absence of 'But' (use 'And')", "Tone stability under pressure"]
  },
  "Conflict Handling & Diplomacy": {
    definition: "Navigating disagreement to find mutual purpose without damaging the relationship.",
    criteria: {
      "0-40": "Escalates tension, blames, or capitulates completely.",
      "41-70": "Maintains civility, seeks compromise, avoids blame.",
      "71-100": "De-escalates tension, identifies shared goals, separates people from the problem."
    },
    measurables: ["'I' statements vs 'You' statements", "De-escalation phrases", "Focus on future solutions"]
  },
  "Confidence & Assertiveness": {
    definition: "Projecting self-assurance and standing ground respectfully.",
    criteria: {
      "0-40": "Apologetic, passive, hesitancy, or aggressive/arrogant.",
      "41-70": "Generally firm, but may backpedal when challenged.",
      "71-100": "Strong presence, declarative language, holds boundaries with respect."
    },
    measurables: ["Absence of minimizing language ('just', 'maybe')", "Statement vs Question intonation"]
  },
  "Adaptability to Audience": {
    definition: "Adjusting tone, vocabulary, and complexity based on who is listening.",
    criteria: {
      "0-40": "Tone deaf; speaks to a child like a boss, or a boss like a buddy.",
      "41-70": "Makes minor adjustments but defaults to natural style.",
      "71-100": "Perfectly calibrated tone and vocabulary for the specific persona."
    },
    measurables: ["Vocabulary level suitability", "Tone matching", "Formal/Informal markers"]
  },
  "Turn-Taking & Interruptions": {
    definition: "Respecting conversational flow, allowing others to finish, and interjecting smoothly.",
    criteria: {
      "0-40": "Talks over partner, monopolizes conversation, or leaves awkward long gaps.",
      "41-70": "Generally polite, accidental overlaps.",
      "71-100": "Seamless 'dance', anticipates end of turn, smooth hand-offs."
    },
    measurables: ["Overlap duration", "Gap duration", "Back-channeling cues"]
  },
  "Nonverbal Communication": {
    definition: "Communication via pace, pause, and presence (Audio proxy for body language).",
    criteria: {
      "0-40": "Rushed pace (anxiety) or dragging (boredom), ignoring silence.",
      "41-70": "Neutral pace, functional pauses.",
      "71-100": "Uses silence for impact, pace matches emotion, strong 'vocal presence'."
    },
    measurables: ["Speech rate variance", "Pause effectiveness", "Energy projection"]
  }
};

export const WEEKLY_PLANS: WeekPlan[] = [
  {
    id: 1,
    title: "Voice of Influence",
    theme: "Build vocal confidence, presence, and clarity",
    coreSkills: ["Vocal tone", "Avoiding filler words", "Projection", "Articulation"],
    evaluationFocus: ["Clarity of Thought", "Filler Word Usage", "Tone Modulation", "Voice Control"],
    lessons: [
      { 
        day: 1, 
        focus: "Introduction + Self-assessment", 
        task: "2–3 minute “about me” talk", 
        description: "Capture a clean baseline of your natural speaking style. Engage in a free-flowing conversation about your background, role, and goals.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Warm, curious coach; mostly listening, minimal interruption. BEHAVIOR: This is the user’s first session. Focus on observing, not correcting. Don’t over-coach; ask 2–3 gentle follow‑ups only. Avoid personal sensitive topics; nudge user back to neutral biography if they go there. If user is silent for >5 seconds, prompt with a new question. At the end you will summarize their style and propose 1–2 focus areas for the week."
      },
      { 
        day: 2, 
        focus: "The Science of Sound", 
        task: "Warm-ups & simple explanation", 
        description: "Make yourself aware of breath, support, and vocal tension. Follow guided warm‑ups (breathing, humming) then explain a simple topic like making tea.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Calm vocal coach; gives step‑by‑step instructions. BEHAVIOR: Prioritize guiding exercises over conversation. You are allowed to stop and reset the user if they sound out of breath or strained. Lead with structured warm‑ups: breathing, humming, pitch glide. Keep instructions simple; avoid jargon. Correct gently if user rushes or skips a step."
      },
      { 
        day: 3, 
        focus: "Clarity & Filler Words", 
        task: "No-fillers challenge (60-90s)", 
        description: "Reduce 'um/uh/like'. Answer a simple prompt (e.g., favorite movie) with a strict 'no fillers' rule.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Supportive but slightly strict coach. BEHAVIOR: Your primary job is to help the user notice and replace fillers with 1‑second pauses. Explicitly explain the 'no filler' rule at start. During conversation, briefly interrupt after 2–3 fillers to remind them to pause instead. Never shame; reframe as 'catching habits'. Give concrete counts at the end and one actionable tip."
      },
      { 
        day: 4, 
        focus: "Tone & Emotion", 
        task: "Retell emotional story (Neutral vs Expressive)", 
        description: "Learn to convey emotion. Read or retell a short emotional story (happy memory, minor failure) twice: once neutral, once expressive.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Empathetic listener, like a close friend. BEHAVIOR: Focus feedback on how their voice matches the emotion. Offer 2–3 emotion options if user is stuck (joy, frustration, pride). Do not probe deeply into trauma. After each pass, briefly comment on tone, not content. Highlight 1–2 specific moments where it worked well and 1 suggestion for more contrast."
      },
      { 
        day: 5, 
        focus: "Speed & Pause Control", 
        task: "Explanation with deliberate pauses", 
        description: "Gain control over speed. Explain a simple process twice: once normal, once with deliberate pauses after key points.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Precise, slightly analytical coach. BEHAVIOR: You are training them to be comfortable with silence. Ask user to outline 3 key points before speaking; remind them to pause between them. If they rush, interrupt and ask them to repeat just the last point slower. Positively reinforce well‑timed pauses and call out 'steamrolled' points."
      },
      { 
        day: 6, 
        focus: "Voice Projection", 
        task: "Power talk (45-60s)", 
        description: "Sound confident and present. Deliver a short pep talk to your future self or team, imagining speaking to the back of a room.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Energetic motivator, but not cheesy. BEHAVIOR: Encourage them to stand (if possible) and imagine speaking to the back of a room. Ask for a second attempt focusing on stronger openings and endings. Avoid unrealistic hype; stay grounded. Highlight one 'strong sounding' sentence and one moment where projection dropped. Give a physical cue (e.g., 'lift your chin')."
      },
      { 
        day: 7, 
        focus: "AI Feedback Challenge", 
        task: "Week 1 Assessment (Ideal Weekend)", 
        description: "Integrate Week 1 skills. A 2–3 minute talk describing your ideal weekend or dream project.",
        sessionMode: "interview",
        completed: false,
        aiContext: "ROLE: Balanced evaluator: friendly but structured. BEHAVIOR: Compare this to the first session if data exists. Minimal interruptions; let it flow like a real talk. Emphasize visible progress first, then suggest the single most impactful focus for next week. At the end, generate structured feedback: score, 2 strengths, 2 focus areas, 1 concrete goal."
      },
    ]
  },
  {
    id: 2,
    title: "Presence & Listening",
    theme: "Improve non-verbal presence and active listening",
    coreSkills: ["Active listening", "Mirroring", "Paraphrasing", "Engagement"],
    evaluationFocus: ["Active Listening", "Empathy & Emotional Intelligence", "Rapport Building"],
    lessons: [
      { 
        day: 1, 
        focus: "Body Language Basics", 
        task: "2–3 minute self-description", 
        description: "Build awareness of posture and gestures. Describe yourself while imagining you are in front of a mirror.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Gentle, observational coach. BEHAVIOR: Frequently link vocal cues to likely body language (e.g., 'You sounded slouched or low‑energy'). Ask explicit reflection questions: 'If you were in front of a mirror, how would your shoulders and eyes look right now?' Avoid judging appearance; focus only on posture, openness, and energy."
      },
      { 
        day: 2, 
        focus: "Mirroring & Rapport", 
        task: "Match AI tone (60-90s)", 
        description: "Practice subtle vocal mirroring. The AI will set a tone (calm, energetic, etc.) and your goal is to match its pace and energy.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Demonstrative partner that clearly shifts tone. BEHAVIOR: Start by announcing: 'I’ll speak first; your job is to loosely match my energy and pacing.' Run 2–3 rounds with different styles (e.g., calm, upbeat, thoughtful). Do not demand perfect imitation; reinforce 'close enough' matching."
      },
      { 
        day: 3, 
        focus: "Eye Contact & Presence", 
        task: "Face-to-face simulation (2-3 min)", 
        description: "Strengthen vocal presence. Engage in a dialogue as if looking directly at the person, maintaining focus without 'checking out'.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Engaged conversational partner, like someone sitting across a table. BEHAVIOR: Ask occasional meta‑questions: 'If I were right in front of you, would you be looking at me now?' Encourage grounding ('say my name,' 'address me directly,' 'finish your sentences strongly'). Avoid shaming for distraction; gently redirect."
      },
      { 
        day: 4, 
        focus: "Listening to Understand", 
        task: "Paraphrasing challenge", 
        description: "Practice active listening. Listen to the AI's short story, then paraphrase it back focusing on meaning rather than exact words.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Clear storyteller and patient listener. BEHAVIOR: Keep stories concrete and short (3–5 key points). After the user paraphrases, give a simple score on accuracy and spotlight 1–2 missed or distorted points. Encourage clarifying questions before summarizing."
      },
      { 
        day: 5, 
        focus: "Emotion Recognition", 
        task: "Identify emotions from voice", 
        description: "Improve emotional awareness. Listen to neutral lines spoken with specific emotions and identify the underlying feeling.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Shifts emotional tone clearly but naturally. BEHAVIOR: Limit emotion set per round (e.g., 3–4 options) to avoid cognitive overload. After each guess, reveal the intended emotion and 1–2 vocal cues (pace, pitch, volume) that signaled it. Avoid heavy topics; use neutral content with emotional delivery."
      },
      { 
        day: 6, 
        focus: "Disengaging Signals", 
        task: "Spot boredom cues (60-90s)", 
        description: "Learn to notice disengagement. Speak on a topic and adapt if the AI starts sounding bored or distracted.",
        sessionMode: "sparring",
        completed: false,
        aiContext: "ROLE: Initially engaged, then gradually more flat/distracted. BEHAVIOR: Make disengagement cues clear but realistic: shorter responses, neutral 'mm‑hm,' longer pauses. If user doesn’t notice after 2–3 cues, pause and explain what you were signaling. Coach on concrete adjustments: ask a question, change topic, add energy."
      },
      { 
        day: 7, 
        focus: "AI Challenge – Presence", 
        task: "Conversation & Summary (4-5 min)", 
        description: "Week 2 Capstone. A realistic conversation where you must maintain presence, then accurately summarize both sides at the end.",
        sessionMode: "interview",
        completed: false,
        aiContext: "ROLE: Balanced partner who sometimes shares, sometimes asks questions. BEHAVIOR: Maintain natural balance; don’t dominate. Midway, subtly change emotion or energy to test presence and recognition. At the end, evaluate summary for: inclusion of AI’s key points, emotional nuance, and absence of distortion."
      },
    ]
  },
  {
    id: 3,
    title: "Magnetic Connection",
    theme: "How to make others feel understood, respected, and valued",
    coreSkills: ["Empathy", "Storytelling", "Questions", "Compliments"],
    evaluationFocus: ["Empathy & Emotional Intelligence", "Questioning Ability", "Storytelling Ability", "Rapport Building"],
    lessons: [
      { 
        day: 1, 
        focus: "Carnegie’s Principles", 
        task: "Talk in terms of their interest (2 min)", 
        description: "Practice 'talk in terms of their interests'. Ask the AI about its 'interests' (e.g., efficiency, learning) and then speak for 2 minutes framing everything around those interests.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Warm, curious partner. BEHAVIOR: Explicitly state 2–3 'interests' upfront (e.g., efficiency, learning, family). Nudge the user when they drift back to self‑focus. Metrics: Listener‑centric language ('you,' 'your goals'), question ratio, alignment with stated interests." 
      },
      { 
        day: 2, 
        focus: "Warmth vs. Competence", 
        task: "Intro twice: Friendly vs. Authoritative", 
        description: "Adjust tone between friendly and authoritative. Deliver the same 30–45s intro twice: once emphasizing warmth, once competence.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Neutral evaluator. BEHAVIOR: Give examples of 'warmer' vs 'more competent' delivery cues. After each pass, point out 1–2 phrases or tone choices that landed in each dimension. Metrics: Perceived warmth, perceived competence, control over formality." 
      },
      { 
        day: 3, 
        focus: "Storytelling Basics", 
        task: "Story with a moral (2 min)", 
        description: "Tell a short story with a clear moral. Share a 2‑minute personal or fictional story ending in a concrete lesson.",
        sessionMode: "podcast",
        completed: false,
        aiContext: "ROLE: Engaged listener. BEHAVIOR: Prompt user to outline: setting → conflict → action → outcome → moral. Steer away from traumatic topics; suggest light prompts. Metrics: Structure, vividness, clarity of moral." 
      },
      { 
        day: 4, 
        focus: "Curiosity-Driven Questions", 
        task: "Ask open-ended questions (3-4 min)", 
        description: "Ask better open‑ended questions. Engage in a conversation where your primary job is to ask questions; the AI will answer in detail.",
        sessionMode: "podcast",
        completed: false,
        aiContext: "ROLE: Cooperative guest. BEHAVIOR: Reward 'how/what/why' over yes/no questions. If user monologues, gently redirect: 'Try another question.' Metrics: Open‑ended vs closed questions, follow‑up depth, turn balance." 
      },
      { 
        day: 5, 
        focus: "Building Shared Language", 
        task: "Mirror communication style", 
        description: "Match the communication style of others. The AI will adopt a clear style (formal, casual, etc.); your task is to mirror its phrasing and structure.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Style exemplar. BEHAVIOR: Explicitly label the style at the start of each round (formal, casual, highly structured, etc.). Call out 1–2 phrases where the user successfully mirrored. Metrics: Style alignment, adaptation speed, reduction of jarring mismatches." 
      },
      { 
        day: 6, 
        focus: "Handling Praise", 
        task: "Give and receive compliments", 
        description: "Give and receive compliments naturally. Two‑way roleplay: give the AI specific praise, then respond gracefully when the AI praises you.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Warm colleague/friend. BEHAVIOR: Keep compliments focused on actions/effort, not appearance. Coach away from deflecting ('oh, it was nothing') toward accepting and expanding. Metrics: Specificity of praise, comfort in receiving, balance between humility and acknowledgment." 
      },
      { 
        day: 7, 
        focus: "AI Challenge – Connection", 
        task: "Story with a hook (3 min)", 
        description: "Integrate connection tools. Tell a 3‑minute personal story aimed at making the AI feel understood and valued, with a strong hook.",
        sessionMode: "podcast",
        completed: false,
        aiContext: "ROLE: Thoughtful friend. BEHAVIOR: Ask user to explicitly reference AI’s 'interests' or perspective at least twice. Feedback must highlight 2 strengths and 2 missed opportunities for connection. Metrics: Hook strength, listener‑centric framing, question use, emotional resonance." 
      },
    ]
  },
  {
    id: 4,
    title: "Persuade with Integrity",
    theme: "Learn persuasive speech for work, debates, and daily use",
    coreSkills: ["Structuring arguments", "Persuasive storytelling", "Logical reasoning", "Credibility"],
    evaluationFocus: ["Logical Flow / Structure", "Persuasion & Influence", "Handling Objections / Criticism"],
    lessons: [
      { 
        day: 1, 
        focus: "Ethos, Logos, Pathos", 
        task: "Practice the 3 appeals", 
        description: "Differentiate and practice the three appeals. Deliver the same basic argument three times: credibility‑first (ethos), logic‑first (logos), emotion‑first (pathos).",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Analytical coach. BEHAVIOR: Briefly define each appeal before use. Keep topics light (e.g., convince me to adopt a hobby). Metrics: Presence of credibility markers, logical structure, emotional color." 
      },
      { 
        day: 2, 
        focus: "Persuasion Blueprint", 
        task: "Claim → Reason → Example drills", 
        description: "Internalize Claim → Reason → Example pattern. Complete multiple short drills where you answer prompts using this exact structure.",
        sessionMode: "sparring",
        completed: false,
        aiContext: "ROLE: Strict but fair instructor. BEHAVIOR: Interrupt and restart if user skips a step; label each segment out loud. Provide 1–2 model blueprints as reference before practice. Metrics: Structural completeness, clarity of claim, strength/relevance of example." 
      },
      { 
        day: 3, 
        focus: "Framing Ideas Smartly", 
        task: "Positive vs. Negative Framing", 
        description: "Practice positive vs negative framing. Reframe the same message in gain‑focused and loss‑focused ways.",
        sessionMode: "sparring",
        completed: false,
        aiContext: "ROLE: Curious decision‑maker. BEHAVIOR: Keep content non‑manipulative; emphasize honesty. Ask which framing they’d choose and why. Metrics: Clarity of framing, appropriateness, ethical tone." 
      },
      { 
        day: 4, 
        focus: "Analogies & Metaphors", 
        task: "Simplify complex ideas", 
        description: "Use comparisons to simplify ideas. Explain a complex concept (e.g., APIs, inflation) using at least one analogy and one metaphor.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Intelligent but non‑expert listener. BEHAVIOR: Encourage simple, culturally neutral analogies. Flag analogies that mislead or break quickly. Metrics: Comprehensibility, memorability, accuracy of analogy." 
      },
      { 
        day: 5, 
        focus: "Call-to-Action Writing", 
        task: "Pitch with a clear ask (60-90s)", 
        description: "End with a persuasive ask. Deliver a 60–90 second pitch ending in a single, specific call-to-action.",
        sessionMode: "negotiation",
        completed: false,
        aiContext: "ROLE: Busy stakeholder. BEHAVIOR: Force user to choose exactly one clear CTA. Provide feedback on specificity, urgency, and ease of compliance. Metrics: Clarity of ask, directness, alignment between argument and CTA." 
      },
      { 
        day: 6, 
        focus: "Objection Handling", 
        task: "Defuse resistance with empathy", 
        description: "Defuse resistance with empathy. The AI will raise objections; you must label emotions ('It sounds like...'), paraphrase concerns, then respond.",
        sessionMode: "negotiation",
        completed: false,
        aiContext: "ROLE: Skeptical but reasonable counterpart. BEHAVIOR: Encourage patterns like 'It sounds like…,' 'It seems you’re worried about…'. Penalize steamrolling; reward slowing down to understand. Metrics: Empathy statements before counter‑arguments, accuracy of labeling, calm tone." 
      },
      { 
        day: 7, 
        focus: "AI Challenge – Persuasion", 
        task: "Mini-debate (3-5 min)", 
        description: "Convince AI of an unpopular or neutral opinion without manipulation. The AI starts opposed; try to shift it to neutral or mildly supportive.",
        sessionMode: "sparring",
        completed: false,
        aiContext: "ROLE: Principled skeptic. BEHAVIOR: AI should be movable but not easy to flip; require solid reasons and respect. At the end, AI explains what did and didn’t work in the user’s approach. Metrics: Argument structure, objection handling, respectfulness, outcome shift." 
      },
    ]
  },
  {
    id: 5,
    title: "Tough Talks",
    theme: "Stay calm under pressure & navigate conflict respectfully",
    coreSkills: ["Managing defensiveness", "Handling confrontation", "Assertiveness", "Mutual purpose"],
    evaluationFocus: ["Conflict Handling & Diplomacy", "Confidence & Assertiveness", "Tone Modulation"],
    lessons: [
      { 
        day: 1, 
        focus: "Crucial Conversations 101", 
        task: "Roleplay: tough feedback", 
        description: "Practice starting difficult conversations. Roleplay giving tough feedback to a peer or report, focusing on psychological safety.",
        sessionMode: "negotiation",
        completed: false,
        aiContext: "ROLE: Slightly defensive colleague. BEHAVIOR: Encourage 'facts → impact → request' structure, plus intent ('I want us to succeed together'). Prevent direct personal attacks; reframe toward behavior. Metrics: Clarity, respect, explicit positive intent." 
      },
      { 
        day: 2, 
        focus: "De-escalation Techniques", 
        task: "Reframe anger with “I” statements", 
        description: "Reframe anger using 'I' statements. The AI starts mildly angry; practice mirroring, labeling, and using non-blaming language.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Frustrated stakeholder. BEHAVIOR: Enforce 'I' statements and non‑blaming phrasing. De‑escalate if user escalates (model repair). Metrics: Non‑defensive language, validation before explanation, reduction in AI 'anger' over time." 
      },
      { 
        day: 3, 
        focus: "Assertive Language", 
        task: "Replace passive/aggressive patterns", 
        description: "Replace passive/aggressive patterns with assertive communication. The AI presents scenarios; respond assertively (clear boundary, calm tone).",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Neutral scenario narrator plus partner. BEHAVIOR: Identify passive ('it’s fine, whatever') and aggressive ('you always…') patterns and request a redo. Offer assertive rephrases as hints when needed. Metrics: Directness, respect, clarity of needs and boundaries." 
      },
      { 
        day: 4, 
        focus: "Diffusing Tension", 
        task: "Say 'No' empathetically", 
        description: "Practice saying 'no' empathetically. The AI will repeatedly make requests; decline while preserving the relationship.",
        sessionMode: "negotiation",
        completed: false,
        aiContext: "ROLE: Persistent but not toxic requester. BEHAVIOR: Encourage structure: empathy → clear no → brief reason → alternative (if possible). Prevent over‑apology or over‑justification. Metrics: Clarity of no, empathy level, maintenance of respect." 
      },
      { 
        day: 5, 
        focus: "Listening in Conflict", 
        task: "Hear the 'unsaid'", 
        description: "Hear the 'unsaid' beneath attacks. The AI will vent about a situation; reflect back needs and emotions more than facts.",
        sessionMode: "negotiation",
        completed: false,
        aiContext: "ROLE: Aggrieved coworker or customer. BEHAVIOR: Penalize immediate problem‑solving; reward reflection and validation. After 1–2 minutes, AI reveals if it felt 'heard' and what landed. Metrics: Emotion labeling, needs inference, reduction in AI hostility." 
      },
      { 
        day: 6, 
        focus: "Staying Calm", 
        task: "Breathe under pressure", 
        description: "Use breathing and pause techniques while under pressure. The AI delivers mildly confrontational prompts; respond slowly using deliberate pauses.",
        sessionMode: "sparring",
        completed: false,
        aiContext: "ROLE: Firm, challenging. BEHAVIOR: Periodically remind user to breathe and slow down if they speed up. Never become personally abusive; keep it professional but intense. Metrics: Vocal steadiness, pause usage, lack of escalation in tone." 
      },
      { 
        day: 7, 
        focus: "AI Challenge – Conflict", 
        task: "Conflict Simulation (4-5 min)", 
        description: "Simulate a heated argument and stay composed. A 4–5 minute scenario (e.g., missed deadline) with rising stakes.",
        sessionMode: "negotiation",
        completed: false,
        aiContext: "ROLE: Frustrated but ultimately reasonable partner. BEHAVIOR: Gradually escalate then allow de‑escalation when user applies skills. End with debrief on what calmed things down vs what inflamed them. Metrics: Emotional regulation, boundary setting, de‑escalation effectiveness, respectful language." 
      },
    ]
  },
  {
    id: 6,
    title: "Conversational Mastery",
    theme: "Adapt to any setting and make every conversation engaging",
    coreSkills: ["Humor", "Timing", "Role-switching", "Flow"],
    evaluationFocus: ["Adaptability to Audience", "Turn-Taking & Interruptions", "Nonverbal Communication"],
    lessons: [
      { 
        day: 1, 
        focus: "Icebreakers & Hooks", 
        task: "Practice 3 types of openings", 
        description: "Open conversations smoothly. Practice 3 types of openings (situational comment, genuine question, light self-disclosure) in short roleplays.",
        sessionMode: "podcast",
        completed: false,
        aiContext: "ROLE: Friendly stranger at an event. BEHAVIOR: Keep topics light and neutral; avoid politics/religion. If user gives a dead‑end opener ('Hi.'), ask them to try again with more specificity. Metrics: Opener clarity, friendliness, follow‑through potential."
      },
      { 
        day: 2, 
        focus: "Humor Without Offending", 
        task: "Tell a short self-deprecating story", 
        description: "Use light humor safely. Tell a short funny story or mild joke about yourself or an everyday mishap.",
        sessionMode: "podcast",
        completed: false,
        aiContext: "ROLE: Good‑natured colleague. BEHAVIOR: Explicitly forbid punching‑down, stereotypes, or sensitive topics. If user’s 'joke' risks offense, redirect and explain why. Metrics: Positivity of target (self vs others), clarity of setup/payoff, AI’s reported comfort."
      },
      { 
        day: 3, 
        focus: "Matching Energy Levels", 
        task: "Adapt to context (Coffee vs Meeting vs Party)", 
        description: "Adapt energy to context. The AI will choose a context (1:1 coffee, stand‑up meeting, party) and energy level; you must match it.",
        sessionMode: "coaching",
        completed: false,
        aiContext: "ROLE: Context‑aware partner. BEHAVIOR: Explain target energy at start of each round. Give immediate feedback if user is over‑ or under‑amped for that context. Metrics: Appropriateness of energy, smooth shifts when context changes."
      },
      { 
        day: 4, 
        focus: "Ending Conversations Smoothly", 
        task: "Exit gracefully (30-45s)", 
        description: "Avoid abrupt goodbyes. Engage in short conversations and exit gracefully within 30–45 seconds once the AI gives a subtle time cue.",
        sessionMode: "interview",
        completed: false,
        aiContext: "ROLE: Busy but polite acquaintance. BEHAVIOR: Model good closing patterns: appreciation → summary → next‑step or well‑wish. Discourage ghosting. Metrics: Clarity of close, politeness, presence of future bridge."
      },
      { 
        day: 5, 
        focus: "Conversational Rhythm", 
        task: "Sync turn-taking (4-5 min)", 
        description: "Sync turn‑taking. A 4–5 minute free conversation focusing on not interrupting and not monologuing.",
        sessionMode: "podcast",
        completed: false,
        aiContext: "ROLE: Balanced partner with natural pauses. BEHAVIOR: Occasionally pause mid‑thought to see if user jumps in too early. If user over‑talks, gently flag and invite them to ask a question. Metrics: Turn length balance, interruption rate, responsiveness to cues."
      },
      { 
        day: 6, 
        focus: "Cross-Context Roleplay", 
        task: "Switch tone: Friend vs Manager vs Client", 
        description: "Switch tone appropriately. Deliver the same message to 2–3 audiences: close friend, manager, new client.",
        sessionMode: "interview",
        completed: false,
        aiContext: "ROLE: Role-shifter. BEHAVIOR: Clearly announce role/relationship at each start. Highlight specific language or tone choices that did or did not fit that role. Metrics: Adaptation of formality, directness, and vulnerability to context."
      },
      { 
        day: 7, 
        focus: "AI Final Simulation", 
        task: "Freestyle Interaction (5 min)", 
        description: "Stress‑test mastery. A 5‑minute freestyle interaction where the AI dynamically changes context, energy, and topic.",
        sessionMode: "interview",
        completed: false,
        aiContext: "ROLE: Shifting composite (friend → colleague → manager). BEHAVIOR: Change context at least twice; announce briefly. At the end, generate summary: overall score, top 3 strengths, top 2 growth edges. Metrics: Adaptability, engagement, rhythm, safety."
      },
    ]
  }
];

export const MOCK_RECENT_SESSIONS = [
  { date: '2023-10-25', score: 65, label: 'W1D1' },
  { date: '2023-10-26', score: 72, label: 'W1D2' },
  { date: '2023-10-27', score: 68, label: 'W1D3' },
  { date: '2023-10-28', score: 78, label: 'W1D4' },
  { date: '2023-10-30', score: 82, label: 'W1D6' },
];

// Helper to generate a session result
const generateMockSession = (week: number, day: number, score: number, dateStr: string, metrics?: any): SessionResult => ({
  date: dateStr,
  weekId: week,
  dayId: day,
  overallScore: score,
  transcriptSummary: "Mock session summary",
  metrics: metrics || [],
  feedbackAnalysis: {
    strengths: ["Clear tone"],
    improvements: ["Pacing"],
    tip: "Keep practicing",
    tone: "Good"
  }
});

export const MOCK_LONG_TERM_HISTORY: SessionResult[] = [
  generateMockSession(1, 1, 55, '2023-09-01'),
  generateMockSession(1, 2, 58, '2023-09-02'),
  generateMockSession(1, 3, 62, '2023-09-04'),
  generateMockSession(1, 4, 60, '2023-09-05'),
  generateMockSession(1, 5, 65, '2023-09-06'),
  generateMockSession(1, 6, 64, '2023-09-08'),
  generateMockSession(1, 7, 70, '2023-09-09'),
  
  generateMockSession(2, 1, 68, '2023-09-11'),
  generateMockSession(2, 2, 72, '2023-09-12'),
  generateMockSession(2, 3, 71, '2023-09-14'),
  generateMockSession(2, 4, 75, '2023-09-15'),
  generateMockSession(2, 5, 74, '2023-09-16'),
  generateMockSession(2, 6, 78, '2023-09-18'),
  generateMockSession(2, 7, 76, '2023-09-19'),

  generateMockSession(3, 1, 75, '2023-09-21'),
  generateMockSession(3, 2, 79, '2023-09-22'),
  generateMockSession(3, 3, 82, '2023-09-24'),
  generateMockSession(3, 4, 80, '2023-09-25'),
  generateMockSession(3, 5, 84, '2023-09-26'),
  generateMockSession(3, 6, 85, '2023-09-28'),
];