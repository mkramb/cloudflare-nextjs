import type { NextRequest } from "next/server";

async function gatherResponse(response: Response) {
  const { headers } = response;
  const contentType = headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return JSON.stringify(await response.json());
  }

  return response.text();
}

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(_req: NextRequest): Promise<Response> {
  const url = `${process.env.PROXY_TARGET}/offers`;

  const init = {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  };

  const response = await fetch(url, init);
  const results = await gatherResponse(response);

  return new Response(results, init);
}
