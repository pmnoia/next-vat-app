export async function GET() {
    const rate = parseFloat(process.env.VAT_RATE)
    return Response.json({rate})
}