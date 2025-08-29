// REVISE THIS PART

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const amount = parseFloat(searchParams.get("amount") || "0");
    const rate = parseFloat(process.env.VAT_RATE)

    if (isNaN(amount)) {
        return new Response(JSON.stringify({error: "Invalid amount"}), {
            status: 400,
            headers: {'Content-Type': 'application/json'},
        })
    };

    const vat = +(amount * rate).toFixed(2);
    return Response.json({ rate, amount, vat});
}

export async function POST(request) {
    const { amount } = await request.json();
    const rate = parseFloat(process.env.VAT_RATE);

    if (isNaN(amount)) {
        return new Response(JSON.stringify({error: "Invalid amount"}), {
            status: 400,
            headers: {'Content-Type': 'application/json'},
        })
    };

    const vat = +(amount * rate).toFixed(2);
    return Response.json({rate, amount, vat});
}