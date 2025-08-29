// REVISE THIS PART 

export async function GET(request, { params }) {
    const amount = parseFloat(params.amount || "0");
    const rate = parseFloat(process.env.VAT_RATE || 0.7);

    if (isNaN(amount)) {
        return new Response(JSON.stringify({error: "Invalid amount"}), {
            status: 400,
            headers: {'Content-Type': 'application/json'},
        })
    };

    const vat = +(amount * rate).toFixed(2);
    return Response.json({rate, amount, vat});

    // if (isNaN(amount)) {
    //     return new Response(JSON.stringify({ error: 'Invalid amount' }), {
    //         status: 400,
    //         headers: { 'Content-Type': 'application/json' },
    //     });
    // }

    // return new Response(
    //     JSON.stringify({ rate, amount, vat }),
    //     { status: 200, headers: { 'Content-Type': 'application/json' } }
    // );
}