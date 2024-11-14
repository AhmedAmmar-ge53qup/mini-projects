import { getEmployees } from "@/model/employees";
import { NextResponse } from "next/server";

export async function GET(request) {

    try {
        const employees = await getEmployees();

        return NextResponse.json(employees, { status: 200 })
    } catch (error) {
        
        return NextResponse.json({error: "Error occured"}, {status: 500});
    }
}
