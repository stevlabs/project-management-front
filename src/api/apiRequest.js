
export const apiRequest = async (url, method = 'GET', body) => {
  try {
    const options = { method }
    if (body && body instanceof FormData) {
      options.body = body;
    } else if (body) {
      options.headers = {
        'Content-Type': 'application/json'
      };
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    if (!response.ok) throw ("Error en la api.");
    return response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
}
