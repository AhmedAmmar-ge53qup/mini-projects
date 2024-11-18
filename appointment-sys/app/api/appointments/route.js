import { addAppointment } from "@/model/appointments";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const appointment = await req.json();
        const newAppointment = await addAppointment(appointment);
        
        return NextResponse.json(newAppointment, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
