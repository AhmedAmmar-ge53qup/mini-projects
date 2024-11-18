import prisma from "@/prisma/prisma";

export async function getAppointments() {
    return await prisma.appointment.findMany();
}

export async function getAppointmentById(id) {
    return await prisma.appointment.findUnique({where: {id}});
}

// Can add server-side validation here
export async function addAppointment(appointment) {
    return await prisma.appointment.create({data: appointment})
}