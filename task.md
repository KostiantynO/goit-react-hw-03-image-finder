1. ## Описание компонента `<Searchbar>`

   - [x] Компонент принимает один проп **`onSubmit`** - функцию для передачи
         значения инпута при сабмите формы.
   - [x] Создает DOM-элемент следующей структуры.

```jsx
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

2. ## Описание компонента `<ImageGallery>`

   - [x] Список карточек изображений. Создает DOM-элемент следующей структуры.

```jsx
<ul class="gallery">
  <!-- Набор <li> с изображениями -->
</ul>
```

3. ## Описание компонента `<ImageGalleryItem>`

   [x] Компонент элемента списка с изображением. Создает DOM-элемент следующей
   структуры.

```jsx
<li class="gallery-item">
  <img src="" alt="" />
</li>
```

4. ## Описание компонента `<Button>`

   - [x] При нажатии на кнопку Load more должна догружаться следующая порция
         изображений и рендериться вместе с предыдущими.
   - [x] Кнопка должна рендерится только тогда, когда есть какие-то загруженные
         изображения.
   - [x] Если массив изображений пуст, кнопка не рендерится.

5. ## Описание компонента `<Loader>`

   - [x] Компонент спинера, отображается пока идет загрузка изображений.
   - [x] Используй любой готовый компонент, например `react-loader-spinner` или
         любой другой.

6. ## Описание компонента `<Modal>`

   - [x] При клике по элементу галереи должно открываться модальное окно с
         темным оверлеем и отображаться большая версия изображения.
   - [x] Модальное окно должно закрываться по нажатию клавиши ESC или по клику
         на оверлее.
   - [x] Внешний вид похож на функционал этого VanillaJS-плагина, только вместо
         белого модального окна рендерится изображение (в примере нажми Run).
         Анимацию делать не нужно!

```jsx
<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
```
