import type { NextRequest } from "next/server";

const USERS_MAX = 5;
const USERS = Array.from({ length: USERS_MAX }).map((_, index) => ({
  id: index,
  username: `username${index}`,
}));

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(_req: NextRequest): Promise<Response> {
  return new Response(JSON.stringify(USERS), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
