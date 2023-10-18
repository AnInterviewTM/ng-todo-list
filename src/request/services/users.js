import { ResourceAPI } from "../resource/resource";
import { ENDPOINTS } from "../ENDPOINT";

const resource = new ResourceAPI();

export function getUsersListAPI(body) {
  return resource.fetchData({
    request: ENDPOINTS.USERS,
    method: "GET", body
  });
}
