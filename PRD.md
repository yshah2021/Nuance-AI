# Product Requirements Document (PRD): Nuance AI

**Version:** 1.1  
**Status:** MVP Complete / Pre-Production  
**Last Updated:** October 26, 2023

---

## 1. Executive Summary
**Nuance AI** is an AI-powered communication coach designed to help users master speaking, listening, and persuasion. Unlike text-based roleplay apps, Nuance AI utilizes the **Google Gemini Multimodal Live API** to facilitate low-latency (<500ms), real-time voice conversations. The application guides users through a structured 6-week curriculum, acting as various personas (Coach, Negotiator, Interviewer) to simulate real-world scenarios and provide instant, objective feedback.

## 2. Target Audience
*   **Corporate Professionals:** Seeking to improve presentation skills, executive presence, and conflict resolution.
*   **ESL Speakers:** Looking to improve fluency, reducing filler words, and understanding cultural nuance.
*   **Sales & Customer Support:** Practicing objection handling, empathy, and active listening.
*   **Socially Anxious Individuals:** Wanting a safe, private space to practice small talk and social dynamics.

---

## 3. Curriculum & Content Strategy
The application is built around a "Weekly Sprint" model. Access is gated by user role (Free vs. Premium). Below is the detailed breakdown of every exercise.

### Week 1: Voice of Influence
**Theme:** Build vocal confidence, presence, and clarity.

*   **Day 1: Introduction + Self‑assessment**
    *   **Goal:** Capture a clean baseline of natural speaking style.
    *   **Task:** 2–3 minute “about me” talk (background, role, goals).
    *   **AI Persona:** Warm, curious coach (Listening mode).
    *   **Guardrails:** Minimal interruptions. Ask only 2-3 gentle follow-ups. Nudge back to biography if user gets too personal.
*   **Day 2: The Science of Sound**
    *   **Goal:** Awareness of breath, support, and tension.
    *   **Task:** Guided warm‑ups (humming, breathing) + 1‑minute explanation of a simple topic (e.g., making tea).
    *   **AI Persona:** Calm vocal coach (Instructional mode).
    *   **Guardrails:** Lead structured exercises. Stop and reset user if they sound strained.
*   **Day 3: Clarity & Filler Words**
    *   **Goal:** Reduce “um/uh/like”.
    *   **Task:** 60–90 second answer to a simple prompt with a strict “no fillers” rule.
    *   **AI Persona:** Supportive but strict coach.
    *   **Guardrails:** Interrupt briefly after 2-3 fillers to remind user to pause instead. Never shame, reframe as "catching habits."
*   **Day 4: Tone & Emotion**
    *   **Goal:** Convey emotion through pitch/pace.
    *   **Task:** Retell a story twice: once Neutral, once Expressive.
    *   **AI Persona:** Empathetic listener.
    *   **Guardrails:** focus feedback on tone matching (e.g., "You sounded happy here"). Offer emotion options if user is stuck.
*   **Day 5: Speed & Pause Control**
    *   **Goal:** Control speaking speed and use silence.
    *   **Task:** Explain a process twice: once normal, once with deliberate pauses after key points.
    *   **AI Persona:** Precise, analytical coach.
    *   **Guardrails:** Interrupt if user rushes. Positively reinforce well-timed pauses.
*   **Day 6: Voice Projection ("Power Talk")**
    *   **Goal:** Sound confident and present.
    *   **Task:** 60s pep talk to future self or team, imagining speaking to the back of a room.
    *   **AI Persona:** Energetic motivator.
    *   **Guardrails:** Encourage standing up. Focus on volume consistency and strong opening/closing.
*   **Day 7: AI Feedback Challenge (Assessment)**
    *   **Goal:** Week 1 Capstone.
    *   **Task:** 3-minute talk describing "Ideal Weekend".
    *   **AI Persona:** Balanced Evaluator.
    *   **Guardrails:** Minimal interruption. Generate structured feedback comparing against Day 1 baseline.

### Week 2: Presence & Listening
**Theme:** Improve non-verbal presence and active listening.

*   **Day 1: Body Language Basics**
    *   **Goal:** Awareness of posture/gestures (via voice proxy).
    *   **Task:** Describe yourself while imagining standing in front of a mirror.
    *   **AI Persona:** Gentle, observational coach.
    *   **Guardrails:** Link vocal cues to posture (e.g., "You sound slouched"). Ask reflection questions about current stance.
*   **Day 2: Mirroring & Rapport**
    *   **Goal:** Practice vocal mirroring.
    *   **Task:** Match AI's changing energy/pace for 60-90s (Calm -> Energetic -> Serious).
    *   **AI Persona:** Demonstrative partner (Shifting tones).
    *   **Guardrails:** Clearly shift tone between rounds. Reinforce "close enough" matching.
*   **Day 3: Eye Contact & Presence**
    *   **Goal:** Strengthen focus/directness.
    *   **Task:** 3-minute dialogue answering questions as if looking at a person.
    *   **AI Persona:** Engaged partner.
    *   **Guardrails:** Ask meta-questions: "If I were there, would you be looking at me?" Encouraging "you" language.
*   **Day 4: Listening to Understand**
    *   **Goal:** Active listening and paraphrasing.
    *   **Task:** Listen to AI's 60s story, then paraphrase focusing on meaning, not words.
    *   **AI Persona:** Storyteller.
    *   **Guardrails:** Keep story concrete (3-5 points). Score accuracy of paraphrase.
*   **Day 5: Emotion Recognition**
    *   **Goal:** Identify emotions from voice cues.
    *   **Task:** AI speaks neutral lines with specific emotions; User guesses the emotion.
    *   **AI Persona:** Emotional actor.
    *   **Guardrails:** Reveal the intended emotion after each guess. Explain the vocal cues used.
*   **Day 6: Disengaging Signals**
    *   **Goal:** Spot boredom/distraction.
    *   **Task:** Speak on a topic; AI will simulate boredom (silence, short answers). User must adapt.
    *   **AI Persona:** Distracted listener.
    *   **Guardrails:** Make cues clear. If user fails to notice, pause and explain.
*   **Day 7: AI Challenge – Presence**
    *   **Goal:** Week 2 Capstone.
    *   **Task:** 5-minute conversation followed by a summary of both sides.
    *   **AI Persona:** Balanced Partner.
    *   **Guardrails:** Test user's memory of AI's points and emotional shifts.

### Week 3: Magnetic Connection
**Theme:** How to make others feel understood and valued.

*   **Day 1: Carnegie’s Principles**
    *   **Goal:** "Talk in terms of their interests."
    *   **Task:** User asks AI about its interests, then frames a 2-minute talk around them.
    *   **AI Persona:** Warm partner with specific interests (e.g., Efficiency).
    *   **Guardrails:** Nudge user if they drift to self-focus.
*   **Day 2: Warmth vs. Competence**
    *   **Goal:** Control tone dimensions.
    *   **Task:** Deliver same intro twice: once for "Warmth" (friend), once for "Competence" (expert).
    *   **AI Persona:** Neutral evaluator.
    *   **Guardrails:** Highlight specific words/tones that shifted the perception.
*   **Day 3: Storytelling Basics**
    *   **Goal:** Narrative structure.
    *   **Task:** Tell a story with: Setting -> Conflict -> Action -> Resolution -> Moral.
    *   **AI Persona:** Engaged Audience.
    *   **Guardrails:** Prompt for missing structure parts. Keep topics light.
*   **Day 4: Curiosity‑Driven Questions**
    *   **Goal:** Ask open-ended questions.
    *   **Task:** 4-minute chat where User must only ask questions (How/What/Why).
    *   **AI Persona:** Cooperative Guest.
    *   **Guardrails:** Gently redirect Yes/No questions.
*   **Day 5: Building Shared Language**
    *   **Goal:** Code-switching/Matching.
    *   **Task:** AI adopts a specific style (Formal/Casual); User must mirror the vocabulary/structure.
    *   **AI Persona:** Style Exemplar.
    *   **Guardrails:** Label the style at the start.
*   **Day 6: Handling Praise**
    *   **Goal:** Give and receive compliments.
    *   **Task:** Exchange specific, effort-based praise with AI.
    *   **AI Persona:** Warm colleague.
    *   **Guardrails:** Coach user not to deflect praise ("It was nothing") but to accept it ("Thank you").
*   **Day 7: AI Challenge – Connection**
    *   **Goal:** Week 3 Capstone.
    *   **Task:** Tell a story specifically designed to make the AI feel valued.
    *   **AI Persona:** Thoughtful Friend.
    *   **Guardrails:** User must reference AI's perspective at least twice.

### Week 4: Persuade with Integrity
**Theme:** Logic, rhetoric, and ethical persuasion.

*   **Day 1: Ethos, Logos, Pathos**
    *   **Goal:** The 3 Appeals.
    *   **Task:** Make the same argument 3 times, focusing on Credibility, Logic, then Emotion.
    *   **AI Persona:** Analytical Coach.
    *   **Guardrails:** Define appeals briefly. Check for distinct differences in each pass.
*   **Day 2: Persuasion Blueprint**
    *   **Goal:** Structure (Claim -> Reason -> Example).
    *   **Task:** Rapid drills answering prompts using this exact structure.
    *   **AI Persona:** Strict Instructor.
    *   **Guardrails:** Interrupt and restart if a step is skipped.
*   **Day 3: Framing Ideas Smartly**
    *   **Goal:** Positive vs Negative Framing.
    *   **Task:** Reframe a message as a "Gain" and then as a "Loss".
    *   **AI Persona:** Decision Maker.
    *   **Guardrails:** Discuss which frame was more effective and why.
*   **Day 4: Analogies & Metaphors**
    *   **Goal:** Simplify complexity.
    *   **Task:** Explain a complex concept (e.g., Inflation) using a metaphor.
    *   **AI Persona:** Non-expert listener.
    *   **Guardrails:** Flag confusing or broken metaphors.
*   **Day 5: Call‑to‑Action Writing (Spoken)**
    *   **Goal:** Closing.
    *   **Task:** 90s pitch ending in a specific, actionable Ask.
    *   **AI Persona:** Busy Stakeholder.
    *   **Guardrails:** Reject vague asks ("Let's talk later"). Demand specificity.
*   **Day 6: Objection Handling**
    *   **Goal:** Empathy + Pivot.
    *   **Task:** AI raises objections; User must Label Emotion ("It seems you're worried...") then address it.
    *   **AI Persona:** Skeptical Counterpart.
    *   **Guardrails:** Penalize "Yes, but..." (defensiveness). Reward "Yes, and...".
*   **Day 7: AI Challenge – Persuasion**
    *   **Goal:** Week 4 Capstone.
    *   **Task:** Debate a neutral topic. Move AI from Opposed to Neutral.
    *   **AI Persona:** Principled Skeptic.
    *   **Guardrails:** AI should be movable by logic/respect, but not easily flipped.

### Week 5: Tough Talks
**Theme:** Conflict resolution and emotional regulation.

*   **Day 1: Crucial Conversations 101**
    *   **Goal:** Psychological Safety.
    *   **Task:** Give tough feedback using Facts -> Impact -> Request.
    *   **AI Persona:** Defensive Peer.
    *   **Guardrails:** Prevent personal attacks. Reframe to behavior.
*   **Day 2: De‑escalation Techniques**
    *   **Goal:** Managing anger.
    *   **Task:** AI starts angry; User uses "I" statements and mirroring to calm them.
    *   **AI Persona:** Frustrated Stakeholder.
    *   **Guardrails:** AI de-escalates only when user validates feelings.
*   **Day 3: Assertive Language**
    *   **Goal:** Assertive vs Aggressive vs Passive.
    *   **Task:** Respond to boundary-crossing requests assertively.
    *   **AI Persona:** Pushy partner.
    *   **Guardrails:** Flag passive ("It's fine") or aggressive ("You always") language.
*   **Day 4: Diffusing Tension**
    *   **Goal:** Saying No.
    *   **Task:** Decline requests empatheticlly but firmly.
    *   **AI Persona:** Persistent Requester.
    *   **Guardrails:** Structure: Empathy -> No -> Reason -> Alternative.
*   **Day 5: Listening in Conflict**
    *   **Goal:** Hear the "Unsaid".
    *   **Task:** AI vents; User reflects back needs/emotions, not just facts.
    *   **AI Persona:** Aggrieved Customer.
    *   **Guardrails:** Penalize immediate problem-solving. Reward validation.
*   **Day 6: Staying Calm**
    *   **Goal:** Self-regulation.
    *   **Task:** Respond to confrontation slowly, using breath and pauses.
    *   **AI Persona:** Intense Challenger.
    *   **Guardrails:** Remind user to breathe if pace speeds up.
*   **Day 7: AI Challenge – Conflict**
    *   **Goal:** Week 5 Capstone.
    *   **Task:** 5-minute heated scenario (e.g., missed deadline).
    *   **AI Persona:** Frustrated Partner.
    *   **Guardrails:** Simulate rising stakes, then allow resolution if skills are applied.

### Week 6: Conversational Mastery
**Theme:** Flow, humor, and adaptability.

*   **Day 1: Icebreakers & Hooks**
    *   **Goal:** Opening smoothly.
    *   **Task:** Practice 3 openers: Situational, Question, Self-disclosure.
    *   **AI Persona:** Stranger at event.
    *   **Guardrails:** Reject "Hi/How are you". Ask for specificity.
*   **Day 2: Humor Without Offending**
    *   **Goal:** Light, safe humor.
    *   **Task:** Tell a self-deprecating story.
    *   **AI Persona:** Good-natured colleague.
    *   **Guardrails:** Forbid sensitive topics. Redirect to safe, observational humor.
*   **Day 3: Matching Energy Levels**
    *   **Goal:** Adaptability.
    *   **Task:** AI sets context (Library vs Party); User matches energy.
    *   **AI Persona:** Context-shifter.
    *   **Guardrails:** Immediate feedback on volume/pace mismatch.
*   **Day 4: Ending Conversations Smoothly**
    *   **Goal:** Exiting.
    *   **Task:** Exit a chat gracefully within 30s of a cue.
    *   **AI Persona:** Chatty acquaintance.
    *   **Guardrails:** Model: Appreciation -> Summary -> Future Bridge.
*   **Day 5: Conversational Rhythm**
    *   **Goal:** Turn-taking "Dance".
    *   **Task:** Free chat focusing on gap/overlap timing.
    *   **AI Persona:** Balanced partner.
    *   **Guardrails:** AI pauses mid-thought to test interruption discipline.
*   **Day 6: Cross‑Context Roleplay**
    *   **Goal:** Code-switching.
    *   **Task:** Deliver same news to Friend, Boss, and Client.
    *   **AI Persona:** Role-shifter.
    *   **Guardrails:** critique formality levels.
*   **Day 7: AI Final Simulation**
    *   **Goal:** Course Graduation.
    *   **Task:** 5-minute freestyle handling multiple context shifts.
    *   **AI Persona:** Shifting Composite.
    *   **Guardrails:** Stress-test all skills: listening, structure, tone, and emotional control.

---

## 4. Functional Requirements

### 4.1. Authentication & Onboarding
*   **Login:** Username/Password flow (Mocked in MVP, Planned Auth0/Firebase).
*   **Role Management:** 
    *   `Free`: Access to Week 1 (Days 1-3).
    *   `Premium`: Full access to Weeks 1-6.
    *   `Admin`: Full access + debug tools.

### 4.2. Dashboard & Navigation
*   **Progress Tracking:** Visual progress bar for the current week.
*   **Locking Mechanism:** visually locks future lessons for Free users with an upsell trigger.
*   **Recent Activity:** Bar chart showing the last 5 session scores.

### 4.3. Live Practice Session (Core Feature)
*   **Audio Input:** 16kHz sample rate, mono channel.
*   **Audio Output:** 24kHz sample rate, raw PCM decoding.
*   **Latency:** Must remain under 500ms for natural "interruptibility".
*   **Visualizer:** A "breathing" orb that changes state (Listening, Thinking, Speaking).
*   **Transcript:** Real-time scrolling transcript for both User and AI.
*   **Controls:**
    *   `Done Speaking`: Manual turn-taking signal (optional, for noisy environments).
    *   `End Session`: Triggers analysis.
    *   `Settings`: Adjust AI Voice (Puck, Charon, Kore, Fenrir, Zephyr) and Playback Speed (0.75x - 1.25x).

### 4.4. Feedback & Scoring Engine
Upon session completion, the app sends the transcript to `gemini-2.5-flash` (Text model) for analysis using a strict JSON schema.

*   **Scoring Rubrics:** 17 defined metrics (e.g., "Clarity of Thought", "Tone Modulation") with 0-100 grading criteria.
*   **Structured Feedback:**
    *   **Strengths:** 2-3 bullet points.
    *   **Improvements:** Max 2 focused areas.
    *   **Actionable Tip:** One concrete takeaway.
    *   **Tone Analysis:** E.g., "Confident and Engaging".
    *   **Transcript Highlights:** Specific quotes where the user failed or succeeded, with rewritten suggestions.
    *   **Resources:** Recommended reading/watching/practice drills based on weak points.

### 4.5. Analytics
*   **EMA Trend Line:** Uses Exponential Moving Average to show skill velocity, smoothing out daily volatility.
*   **Radar Chart:** Visualization of the 6-10 specific metrics relevant to the specific lesson.
*   **Mastery ETA:** Linear regression prediction of when the user will hit a "90" average.

---

## 5. Technical Architecture

### 5.1. Tech Stack
*   **Frontend Framework:** React 18 + Vite.
*   **Language:** TypeScript.
*   **Styling:** Tailwind CSS (Custom design system: "Mist", "Apricot", "Deep Brown").
*   **State Management:** React `useState` / `useContext`.
*   **Routing:** `react-router-dom`.
*   **Visualization:** `recharts`.
*   **Icons:** `lucide-react`.

### 5.2. AI Integration
*   **Voice Model:** `gemini-2.5-flash-native-audio-preview` (via WebSocket/Live API).
    *   *Input:* Base64 encoded PCM audio chunks.
    *   *Output:* Streamed Base64 PCM audio + Text transcription events.
*   **Analysis Model:** `gemini-2.5-flash` (Rest API).
    *   *Input:* Full session transcript text + Context Prompt.
    *   *Output:* JSON object adhering to `FeedbackAnalysis` schema.

### 5.3. Audio Processing Strategy
*   **Input (Mic):** `AudioContext` (16kHz) -> `ScriptProcessorNode` -> Float32 to Int16 PCM conversion -> Base64 Encode -> WebSocket Send.
*   **Output (Speaker):** WebSocket Message -> Base64 Decode -> Int16 to Float32 conversion -> `AudioBuffer` -> `AudioBufferSourceNode` (24kHz) -> Speaker.
*   **Queueing:** A robust queuing system (`nextStartTimeRef`) ensures audio chunks play smoothly without overlap or gaps, handling network jitter.

---

## 6. Design System Specifications

### 6.1. Color Palette
*   **Backgrounds:** Mist (`#F6F9F8`), Warm Beige (`#FAF3EB`).
*   **Primary/Action:** Apricot (`#FFE3C0`), Apricot Hover (`#FFD6A4`).
*   **Text/Structure:** Deep Brown (`#2C2C2C`), Warm Gray (`#888888`).
*   **Accents:** Eucalyptus (`#C4DED7` - Success), Coral (`#FF9A7B` - Alert/Warmth), Blush Pink (`#FFD5D6`).

### 6.2. Typography
*   **Display:** Manrope (Bold, ExtraBold).
*   **Body:** Inter (Regular, Medium).
*   **Labels/UI:** Nunito (Bold, Uppercase).

---

## 7. Production Roadmap (Post-MVP)

To transition from this MVP to a scalable product, the following infrastructure is required:

### 7.1. Phase 1: Persistence & Auth
*   **Database:** Supabase or PostgreSQL.
    *   Tables: `Users`, `Sessions`, `WeeklyProgress`, `Transactions`.
*   **Authentication:** Auth0 or Firebase Auth (Social Login).
*   **API Security:** Node.js/Express proxy server to handle Gemini API requests (hiding the API Key).

### 7.2. Phase 2: Monetization
*   **Payment Gateway:** Stripe Integration.
*   **Subscription Management:** Handling upgrades, downgrades, and cancellations via Webhooks.

### 7.3. Phase 3: Data & Accessibility
*   **Audio Storage:** Upload session audio blobs to AWS S3 / Google Cloud Storage for history playback.
*   **Accessibility:** ARIA audit, keyboard navigation, screen reader testing.
*   **Rate Limiting:** Redis-based rate limiting on the proxy server to prevent API abuse.

---

## 8. Success Metrics (KPIs)
*   **Session Completion Rate:** % of started sessions that reach the "Analysis" phase.
*   **Latency:** 95th percentile audio latency < 500ms.
*   **Retention:** % of users returning for Week 2.
*   **Conversion:** % of Free users upgrading to Premium after Week 1 lock-out.
