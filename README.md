\# Hono + React + Relay Cloudflare App

A full-stack application built with **React 19**, **Hono**, and **Relay**, deployed to **Cloudflare Workers**. It demonstrates modern client-server integration using GraphQL with Relay and a minimalist REST endpoint.

\## 🛠 Built With

- **React 19** — UI rendering
- **Relay** — GraphQL client with typed queries and co-located fragments
- **Hono** — lightweight backend framework for Cloudflare Workers
- **GraphQL Yoga** — GraphQL server runtime
- **Tailwind CSS** — utility-first styling
- **Bun** — fast dev scripts and tooling
- **Vite** — frontend bundler with plugin support
- **Wrangler** — Cloudflare Workers deployment CLI

## 🧪 Local Development

```bash
bun install
bun run dev       # Run Vite dev server (frontend only)
bun run build     # Build frontend and backend
bun run deploy    # Deploy to Cloudflare
bun run relay     # Compile Relay artifacts
```

## 🌐 Live Preview

> Preview: [https://full-stack.x47788rdp6.workers.dev](https://full-stack.x47788rdp6.workers.dev)

---

## 📁 Project Structure

```
src         # React app (components, hooks, Relay queries)
worker      # Hono + GraphQL Yoga server code
/src/schema.graphql  # Shared GraphQL schema (for Relay + Yoga)
```

---

## 📬 API Endpoints

- `GET /api\` – returns a simple JSON message
- `POST /api/graphql\` – GraphQL endpoint handled by Yoga

---

## ✨ Features

- Relay-based GraphQL query system with auto-generated types
- Fast deployable Workers backend
- Vite hot-reloading for frontend
- Type-safe build pipeline with TypeScript and ESLint

---

## 📄 License

MIT
