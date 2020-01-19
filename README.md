# 移动端 H5 项目脚手架

## 框架

- vue2

- ui 库: [framework7-vue](https://framework7.io/vue/)

## 开发

> 注意 src/config 环境配置

```
yarn install

// 开发
yarn serve

// 打包
yarn build:test // 测试环境

yarn build // 生产环境
```

## request

```json
// 接口返回结构体，如不符合需修改 lib/request.js
{
  "code": 0,
  "data": {}, // any
  "message": ""
}
```

```js
// src/api/

import request from "../lib/request";

export function testApi(param) {
  return request({
    url: "",
    method: "GET",
    data: param, // 请求参数
    loading: true // 是否显示加载动画
  });
}
```

```js
import { testApi } from "@/api";

async function requestApi() {
  let res = await testApi({ employeeId: 12 }).catch(err => err);

  if (res && res.code) {
    toast(res.message || "服务器开小差了~");
    return;
  }
  console.log(res);
}
```
