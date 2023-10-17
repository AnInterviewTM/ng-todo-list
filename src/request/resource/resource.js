export class ResourceAPI {
  fetchData({ request, method = "GET" }) {

    const options = {
      headers: { "Content-Type": "application/json" },
      method
    };

    return fetch(request, options).then(async response => {
      if (response.ok) return response.json();
      throw await response.json();
    });

  }
}
