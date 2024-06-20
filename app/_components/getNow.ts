export const getNow = async () => {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/now`).then(d=>d.json())
    return res.now
}