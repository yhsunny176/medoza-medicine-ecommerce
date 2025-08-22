import dbConnect from "lib/dbConnect";


export async function POST(request) {
    try {
        const data = await request.json();
        const collection = dbConnect("medicines");
        const result = await collection.insertOne(data);
        return Response.json({ success: true, insertedId: result.insertedId });
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
