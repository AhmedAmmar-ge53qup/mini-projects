import { Button, Input } from "@nextui-org/react";

export default function AddEmployeeForm({ employee, handleSubmit }) {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h5 className="mb-4 text-center">
        {employee ? "Update Employee" : "Add New Employee"}
      </h5>

      <form action={handleSubmit} className="space-y-4">
        <Input
          defaultValue={employee?.name}
          name="name"
          label="Name"
          fullWidth
          isRequired
        />

        <Input
          defaultValue={employee?.email}
          name="email"
          label="E-mail"
          type="email"
          fullWidth
          isRequired
        />

        <Input
          defaultValue={employee?.salary}
          name="salary"
          label="Salary"
          type="number"
          fullWidth
          isRequired
        />

        <Button type="submit" fullWidth>
          {employee ? "Update Employee" : "Add Employee"}
        </Button>
      </form>
    </div>
  );
}
