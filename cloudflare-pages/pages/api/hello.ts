import type { NextRequest } from "next/server";

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(_req: NextRequest): Promise<Response> {
  return new Response(JSON.stringify({ hello: "world" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
