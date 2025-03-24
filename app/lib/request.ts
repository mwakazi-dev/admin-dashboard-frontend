const requestHandler = async (
  endpoint: string,
  options: {
    headers?: Record<string, string>;
    [key: string]: unknown;
  } = {}
) => {
  const { ...restOptions } = options;

  // Determine base URL and token
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!BASE_URL) {
    throw new Error(`Base URL not found.`);
  }

  const headers = {
    ...restOptions.headers,
    "Content-Type": "application/json",
  };

  const fetchOptions: RequestInit & { next?: { revalidate: number } } = {
    ...restOptions,
    headers,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, fetchOptions);

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
};

export default requestHandler;
