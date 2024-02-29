// export async function GET(request) {}
// export async function HEAD(request) {}
// export async function PUT(request) {}
// export async function DELETE(request) {}

// HERE WE'LL HANDLE THE POST REQUEST
import { NextResponse } from "next/server";
export async function POST(request) {
    let data = await request.json()
    console.log(data);
    return NextResponse.json({sucess:true, data})
}