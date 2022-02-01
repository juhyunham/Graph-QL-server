## Graph-QL setting

---

1. 첫시작

```
npm i @graphql-yoga/node@alpha graphql
```

2. 문제점

- Over-fetching => 네가 요청한 영역의 정보보다, 많은 정보를 서버에서 받는 것.

  ex)) 예를들어 사용자의 이름, 이메일이 들어있는 파일만 필요하다면?

  - Database에 내가 사용하지 않은 영역을
    요청하는 방식은 효츌적이지 못함
  - 요청을 보고, 모든 object를 받아서 console.log한뒤 "오~ 모든 object를 받았지만, 난 사용자명만 쓸거야~" => overfetching

- under-fetching => REST에서 하나를 완성하려고 많은 소스를 요청하는것.

  ex)) 앱을 처음 시작할때,

  ```
  /feed/
  /notifications/
  /users/1
  ```

  이러한 3가지의 정보가 필요하다면,
  세가지 요청을 해야하는데

예를들면, 이 모든것들을 한 URL에서 받는것임.
