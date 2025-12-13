# Nuance AI 🎙️

Nuance AI is a mobile and web application designed to help users improve their communication skills—specifically speaking, listening, and writing—through AI-powered practice, human-like voice conversations, and structured weekly learning sprints.

## 🚀 Features

- **Real-time Voice Practice**: Interact with an AI coach with <500ms latency using Google Gemini Live API.
- **Structured Curriculum**: A 6-week program covering Voice, Presence, Connection, Persuasion, Conflict, and Mastery.
- **Instant Analysis**: Get objective scoring (0-100) and actionable feedback on soft skills immediately after every session.
- **Visual Feedback**: Radar charts and trend analysis to track your improvement over time.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **AI/ML**: Google Gemini Multimodal Live API (`gemini-2.5-flash-native-audio-preview`)
- **Visuals**: Lucide React (Icons), Recharts (Data Visualization)
- **Routing**: React Router DOM

## 🏁 Getting Started

### Prerequisites

- Node.js (v18+)
- A Google Gemini API Key

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username/nuance-ai.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Set up environment variables
   Create a `.env` file and add your API key:
   ```env
   API_KEY=your_google_gemini_api_key
   ```
4. Run the development server
   ```sh
   npm run dev
   ```

## 📚 Curriculum Overview

1.  **Voice of Influence**: Foundations of speaking, tone, and clarity.
2.  **Presence & Listening**: Active listening and non-verbal communication.
3.  **Magnetic Connection**: Building rapport, empathy, and storytelling.
4.  **Persuade with Integrity**: Structuring arguments and logical reasoning.
5.  **Tough Talks**: Conflict resolution and assertiveness.
6.  **Conversational Mastery**: Humor, flow, and adaptability.

## 🏗️ Production Roadmap

To make this application production-ready, the following implementations are required:

1.  **Backend Persistence**: 
    - Migrate from local mock data to a robust database (e.g., **Supabase**, **Firebase**, or **PostgreSQL**).
    - Persist user progress, session scores, and lesson completion status.

2.  **Authentication**:
    - Implement secure user authentication (e.g., **Auth0**, **Clerk**, or **Firebase Auth**).
    - Support social logins (Google/Apple) and email/password.

3.  **Payment Processing**:
    - Integrate a payment gateway (**Stripe** or **LemonSqueezy**) to handle Premium subscriptions.
    - Implement webhooks for subscription status updates (Active/Canceled).

4.  **Audio Infrastructure**:
    - Upload session recordings to cloud object storage (**AWS S3** or **Google Cloud Storage**) for playback history.
    - Add a backend service to handle audio transcoding if necessary.

5.  **Security & Rate Limiting**:
    - Move Gemini API calls to a proxy backend server to hide the API key.
    - Implement per-user rate limiting to manage costs and prevent abuse.

6.  **Accessibility**:
    - Conduct a full ARIA audit.
    - Ensure full keyboard navigation support and screen reader compatibility.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.