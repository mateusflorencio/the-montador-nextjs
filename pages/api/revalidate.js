/* eslint-disable import/no-anonymous-default-export */
export default async function handler(req, res) {
  await res.unstable_revalidate('/revalidate');
    return res.json({ revalidated: true });
}