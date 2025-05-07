import { Button } from './components/ui/button'
import { useState } from 'react';


function App() {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  //function to fetch data from the API
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error('An unknown error occurred'));
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h1 className="text-2xl font-bold">Hono + React + TypeScript</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div className="mt-4">
          <p className="text-lg">API Response:</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      <Button className="mt-4" onClick={fetchData}>Click Me</Button>

    </div>
  )
}

export default App
