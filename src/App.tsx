import { AppQuery } from "./__generated__/AppQuery.graphql";
import { graphql, useLazyLoadQuery } from "react-relay";
import { useCallback, useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        hello
      }
    `,
    {},
  );

  const [apiMessage, setApiMessage] = useState<string | null>(null);

  type ApiResponse = {
    message: string;
  };

  const fetchApiMessage = useCallback(async () => {
    try {
      const res = await fetch("/api");
      const json = (await res.json()) as ApiResponse;
      setApiMessage(json.message);
    } catch (err) {
      console.error("Error fetching /api:", err);
      setApiMessage("Error fetching API");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh space-y-4">
      <h1 className="text-2xl font-bold">Hono + React + TypeScript</h1>

      <div>
        <p className="text-lg font-medium">GraphQL Response:</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>

      <div className="space-y-2">
        <Button onClick={() => void fetchApiMessage()}>
          Fetch /api Message
        </Button>
        {apiMessage && (
          <div className="text-sm text-gray-700">
            <strong>/api says:</strong> {apiMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
