export async function fetchGraphQL<T>(query: string): Promise<T> {
  const response = await fetch("/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const result = (await response.json()) as T; 
  return result;
}

