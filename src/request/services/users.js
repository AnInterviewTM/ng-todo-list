import { ResourceAPI } from "../resource/resource";
import { ENDPOINTS } from "../ENDPOINT";

const resource = new ResourceAPI();

export function getUsersAPI(body) {
  return resource.fetchData({
    request: ENDPOINTS.USERS,
    method: "GET", body
  });
}
