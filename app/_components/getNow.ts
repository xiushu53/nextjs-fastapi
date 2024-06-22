export const getNow = async () => {
    console.log(`${process.env.NEXT_PUBLIC_PREFIX}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/now`)
    const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/now`).then(d=>d.json())
    return res.now
}