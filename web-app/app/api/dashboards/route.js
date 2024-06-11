import { NextResponse } from "next/server";
import db from "@/db/client";

export const GET = async (req) => {
    try {
        const data = await db.dashboards.findMany();
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500 });
    }
};