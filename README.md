# What is AetherTalk?
### AetherTalk is a smart meeting assistant platform that leverages AI to make meetings more productive, searchable, and actionable, with features that go beyond simple video calls by adding automated transcription, summarization, and AI-powered Q&A. AetherTalk is an AI-powered video call web application which allows users to host and join meetings with custom AI agents in real-time.

The goal of the AetherTalk is to enable real-time, AI-powered video meetings where users could interact seamlessly with intelligent agents. The platform allows users to join video calls with AI agents that can speak, respond, and engage in meaningful conversations in real time. AetherTalk also empowers users to create custom AI agents by defining their names, profile pictures, personalities, instructions, and specific use cases—such as a coach, tutor, or sales assistant. These agents are designed to assist users during meetings according to their assigned roles and contexts. In addition to enhancing live interactions, the platform automates post-meeting processing by running background jobs that generate AI-powered summaries, extract and store transcripts, and create playback recordings. Furthermore, AetherTalk integrates tools like Stream Chat and AgentKit to launch context-aware AI chats and leverages Inngest for managing asynchronous workflows and webhooks efficiently.


## Here’s how the AetherTalk was developed.
1. Initialized Next.js 15 and React 19 project with TypeScript and required setup options.
2. Installed and configured Tailwind CSS v4 along with Shadcn/ui for reusable UI components.
3. Set up PostgreSQL database using Neon and connected it via Drizzle ORM.
4. Defined and generated database schema (users, sessions, agents, meetings) using Drizzle.
5. Integrated Better Auth for authentication (email, social login, session handling).
6. Configured environment variables (.env) for API keys, DB URL, domain, and secrets.
7. Created authentication routes and UI to support login, registration, and sign-out.
8. Integrated Stream Video SDK for real-time video meetings.
9. Connected OpenAI APIs for AI agent communication within meetings.
10. Built a UI to create and manage AI agents with role, instructions, and avatar.
11. Implemented meeting scheduling with host/guest and AI agent selection options.
12. Developed lobby screen for device check (camera/mic) before joining a call.
13. Enabled real-time AI interaction in video meetings using OpenAI assistant pipelines.
14. Set up post-call background jobs using Inngest to process meeting data.
15. Automated AI summaries and transcript generation after each video call.
16. Stored meeting metadata and summaries in the database for user access.
17. Integrated Stream Chat SDK for post-meeting AI-powered Q&A features.
18. Created a dashboard for managing meetings, transcripts, and recordings.
19. Set up Polar for subscription payments and integrated it with auth logic.
20. Enforced usage limits (free tier caps) and gated features with upgrade prompts.
21. Designed responsive layouts for mobile and desktop using Tailwind & conditional components.
22. Formed git branches for each dev stage and committed changes throughout.
24. Tested all flows (auth, AI, videos, billing) in development using local and hosted environments.
25. Prepared the project for deployment with production configs and error handling.


## Some important features of the AetherTalk include:
* AI-powered real-time video meetings
* Custom AI agent creation
* Automated meeting post-processing
* Integrated conversational AI
* Background job automation
* Full meeting management


# Tech Stack

## Frontend
Next.js 15 (15.3.2)
React 19
TypeScript 5
Tailwind CSS 4
Radix UI (for accessible UI primitives)
Recharts (for charts/visualizations)
Stream Chat React (for real-time chat UI)
React Query (@tanstack/react-query) (for data fetching/caching)
Nuqs (for query string state management)

### Backend
Next.js API Routes
tRPC (type-safe API procedures)
Drizzle ORM (database ORM)
Neon Database (PostgreSQL-compatible cloud database)
Inngest (background jobs/workflows)
Stream Chat API (for real-time chat backend)
Better Auth (authentication, with social providers and email/password)
Stripe/Polar (for payments and premium features)

### Other
dotenv (environment variable management)
ESLint (linting)
PostCSS (CSS processing)
Cloud Storage (e.g., AWS S3 or similar, for file uploads)
Markdown Rendering (react-markdown)
Lucide-react (icon library)


