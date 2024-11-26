import { Card, Button } from "@nextui-org/react";
import Link from "next/link";

export default function ErrorComp({ error, goBackPath }) {
  return (
    <div className="p-4">
      <Card shadow={false} className="border border-red-500 p-4">
        <h3 className="text-xl font-bold text-red-500">{error.name || "Error"}</h3>

        <p>
          <strong>Status:</strong> {error.status || "N/A"}
        </p>
        <p>
          <strong>Code:</strong> {error.code || "N/A"}
        </p>
        <p>
          <strong>Message:</strong> {error.message || "An unknown error occurred."}
        </p>

        {error.reasons && error.reasons.length > 0 && (
          <div className="mt-2">
            <p><strong>Reasons:</strong></p>
            <ul>
              {error.reasons.map((reason, index) => (
                <li key={index}>
                  <p>{reason}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Link to homepage */}
        <div className="mt-4">
          <Link href={goBackPath ?? "/"}>
            <Button auto flat color="primary">
              Go back to homepage
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
