# GraphQL

Сервер-прослойка между основным сервером и клиентом для упрощения запросов (особый синтаксис). Через GraphQl можно на фронте прописать как бы один запрос, но который может обращаться сразу на несколько разных API или на разные эндпоинты. То есть, более удобно работать с запросами на фронте. Нужно настраивать GraphQl-сервер.

Преимущества:

* Объединяем всё в один запрос

* Синтаксический сахар

* Формирование данных прямо в запросе. Получаем только те поля, которые запрашивали. (а не полный список как в случае с REST)


## Пример get-запроса
```graphql
query HeroNameAndFriends($episode: Episode = JEDI) {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
}
```

## Пример post-запроса
```graphql
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}
```

## Debugger /graphql

Аналог Postman. Можно создавать запросы, отправлять данные и т.д.

```https://api.dev.funn.chat/graphql```

DatoCMS


# GraphQL понятия:

## Schema

Описание данных.

```graphql
type User {
  id: ID
  username: String
  age: Int
  posts: [Post]
}
```

## Query

Запрос. Какие данные мы хотим получить с сервера.

```graphql
query {
  users {
    username
    age
  }
}
```

## Mutation

Аналог POST/PUT запроса в http.

```graphql
mutation createUser {
  addUser(username: "Vasya", age: 22) { // создать нового юзера
    id, username // что вернется
  }
}
```

## Subscription

Подписки. Используют websocket-ы.

```graphql
subscription listenPostLikes {
  listenPostLikes {
    title
    likes
  }
}
```
