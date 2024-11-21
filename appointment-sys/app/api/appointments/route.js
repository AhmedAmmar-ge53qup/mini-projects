import {
  addAppointment,
  getExistingAppointmentsTimes,
} from "@/model/appointments";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const date = new URL(req.url).searchParams.get("date");

    const existingAppointments = await getExistingAppointmentsTimes(date);

    return NextResponse.json(existingAppointments, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const appointment = await req.json();
    const newAppointment = await addAppointment(appointment);

    return NextResponse.json(newAppointment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
