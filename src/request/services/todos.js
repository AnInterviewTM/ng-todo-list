import { ResourceAPI } from "../resource/resource";
import { ENDPOINTS } from "../ENDPOINT";

const resource = new ResourceAPI();

export function getTodosListAPI(body) {
  return resource.fetchData({
    request: ENDPOINTS.TODOS,
    method: "GET", body
  });
}
