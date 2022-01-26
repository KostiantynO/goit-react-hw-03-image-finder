```shell
npm i -D prettier eslint styled-components prop-types nanoid react-icons react-toastify react-loader-spinner
```

`package.json`

```json
  "homepage": "https://KostiantynO.github.io/goit-react-hw-03-image-finder",
```

`2022-01-22 21:58`: Done:

0. [x] State Machine.
1. [x] LoadMore Button спрятать сначала.
2. [x] Loader
3. [x] LoadMore Button спрятать если в ответе от бека больше нет следующей
       страницы.

`2022-01-23`: Plan:

1. [x] LoadMore Button Logic.
2. [x] Сбрасывать page в 1 при сабмите формы если изменился поисковый запрос.
3. [x] Модальное окно для картинки.
4. [x] Если ответ от бека - пустой массив - показывать что `ничего не найдено`.

```js
export const SearchForm = ({ handleSubmit, handleQueryChange }) => {};
```

`2022-01-23`: Done Tasks 1,2,3,4 ✅.

`jsconfig.json`

```json
  "exclude": ["node_modules", "build"],
```
