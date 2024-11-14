import prisma from "@/prisma/prisma";

export async function getEmployees() {
    try {
        const employees = await prisma.employee.findMany();
        return employees;
    } catch (error) {
        console.log(`Failed to get employees: ${error}`);
        return [];
    }
}

export async function addEmployee(emp) {
    try {
        const employee = await prisma.employee.create({data: emp});
        console.log(`Employee ${employee.id} was added`);
        return employee;
    } catch (error) {
        console.log(`Failed to add employee: ${error}`);
        return {};
    }
}

export async function updateEmployee(emp, id) {
    try {
        const employee = await prisma.employee.update({ 
            where: { id: parseInt(id) }, 
            data: { name: emp.name, email: emp.email, salary: emp.salary, role: emp.role } 
        })

        console.log(`Employee ${employee.id} was updated`);
        return employee;
    } catch (error) {
        console.log(`Failed to delete employee: ${error}`);
        return {};
    }
}

export async function deleteEmployee(id) {    
    try {
        const employee = await prisma.employee.delete({where: {id: parseInt(id)}})
        console.log(`Employee ${employee.id} was deleted`);
        return employee;
    } catch (error) {
        console.log(`Failed to delete employee: ${error}`);
        return {};
    }
}
