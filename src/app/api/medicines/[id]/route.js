import { ObjectId } from "mongodb";
import dbConnect from "lib/dbConnect";

export async function GET(request, { params }) {
    try {
        const { id } = params;
        const collection = dbConnect("medicines");
        const medicine = await collection.findOne({ _id: new ObjectId(id) });
        if (!medicine) {
            return Response.json({ success: false, error: "Medicine not found" }, { status: 404 });
        }
        return Response.json({ success: true, medicine });
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
