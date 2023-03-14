import { createProxyMiddleware } from 'http-proxy-middleware';
import { NextApiRequest, NextApiResponse } from 'next';

const proxy: any = createProxyMiddleware({
  target: process.env.PROXY_TARGET ?? 'http://localhost:3001',
  secure: false,
  pathRewrite: { '^/api/proxy': '' },
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  proxy(req, res, () => {
    throw new Error(`Request '${req.url}' was not proxied`);
  });
}
