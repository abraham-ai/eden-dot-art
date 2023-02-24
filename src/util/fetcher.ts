// In this example, we're using a generic type parameter T to specify the type of the JSON response.
// We're also using the Parameters utility type to extract the argument types of the fetch function.

export const fetcher = <T>(...args: Parameters<typeof fetch>): Promise<T> =>
  fetch(...args).then(res => res.json())
