import { db } from "@/init-firestore";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";


export async function getEmployees() {
    // Reference to the 'employees' collection in Firestore
    const employeesCollectionRef = collection(db, "employees");

    try {
        // Fetch all documents from the employees collection
        const querySnapshot = await getDocs(employeesCollectionRef);

        // Map through the documents to extract data and return it in an array
        const employees = querySnapshot.docs.map(doc => ({
            id: doc.id, // Document ID (important if you need to update or delete)
            ...doc.data(), // Data of the employee document
        }));

        return employees;
    } catch (error) {
        console.error("Error fetching employees: ", error);
        return []; // Return empty array if there's an error
    }
}

export async function deleteEmployee(id) {
    try {
        // Reference to the document in the 'employees' collection
        const employeeDocRef = doc(db, "employees", id);

        // Delete the document
        await deleteDoc(employeeDocRef);

        console.log(`Employee with ID ${id} deleted successfully.`);
    } catch (error) {
        console.error("Error deleting employee: ", error);
    }
}
