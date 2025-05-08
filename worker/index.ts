// src/server/index.ts
import { Hono } from "hono";
import { createYoga } from "graphql-yoga";
import { schema } from "./graphql/schema";

const app = new Hono();

app.use("/api/graphql", async (c) => {
    const yoga = createYoga({ schema, fetchAPI: { Request, Response } });
    return yoga.handleRequest(c.req.raw, {});
});

app.get("/api", (c) => c.json({ message: "Hono is running!" }));

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext) {
        return app.fetch(request, env, ctx);
    },
};
