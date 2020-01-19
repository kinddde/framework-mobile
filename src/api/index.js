import request from "../lib/request";

export function testApi(param) {
  return request({
    url: "/api/customer/getEmployee",
    method: "GET",
    data: param,
    loading: true
  });
}
