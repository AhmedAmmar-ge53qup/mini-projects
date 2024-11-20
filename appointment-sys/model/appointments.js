import prisma from "@/prisma/prisma";

export async function getAppointments() {
  return await prisma.appointment.findMany();
}

export async function getAppointmentById(id) {
  return await prisma.appointment.findUnique({ where: { id } });
}

// Helper function to check if the appointment is exactly on the hour
function isOnTheHour(date) {
  return date.getMinutes() === 0 && date.getSeconds() === 0;
}

// Helper function to check for overlapping appointments
async function hasOverlappingAppointment(appointmentDate) {
  const startOfNewAppointment = new Date(appointmentDate);
  const endOfNewAppointment = new Date(
    startOfNewAppointment.getTime() + 60 * 60 * 1000
  ); // 1 hour

  const overlappingAppointments = await prisma.appointment.findMany({
    where: {
      AND: [
        {
          appointmentDate: {
            lte: endOfNewAppointment, // Appointments that end after or at the same time as the new one starts
          },
        },
        {
          appointmentDate: {
            gte: startOfNewAppointment, // Appointments that start before or at the same time as the new one ends
          },
        },
      ],
    },
  });

  return overlappingAppointments.length > 0;
}

// Add appointment with overlap check and hour rounding
export async function addAppointment(appointment) {
  const appointmentDate = new Date(appointment.appointmentDate);

  // Ensure appointment is on the hour
  if (!isOnTheHour(appointmentDate)) {
    throw new Error(
      "Appointments can only be booked on the hour (e.g., 1:00 PM, 2:00 PM)."
    );
  }

  // Check for overlap before creating a new appointment
  const overlapping = await hasOverlappingAppointment(
    appointment.appointmentDate
  );

  if (overlapping) {
    throw new Error(
      "This appointment overlaps with an existing appointment. Please choose a different time."
    );
  }

  // Proceed to create the new appointment if no overlap
  return await prisma.appointment.create({ data: appointment });
}
