You can create styled alerts by applying the `alert` class to any `<div>` element.

There are currently four `alert` styles: `info`, `success`, `warning`, and `error`.

If you add `<button class="close"></button>` inside of `<div class="alert" />` component, it will become closable by user interaction.

Sample info alert component. Apply different modifier class for different color variation

```html
<div class="alert info">
  <div class="content">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque a error tenetur quo expedita pariatur soluta modi mollitia. Deserunt voluptas repellendus, sint sunt voluptatem doloremque repellat iure modi eius libero!
  </div>

  <button type="button" class="close"></button>
</div>
```

Want close on the other side? No problems, move the `button.close` before `div.content`

```html
<div class="alert info">
  <button type="button" class="close"></button>

  <div class="content">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque a error tenetur quo expedita pariatur soluta modi mollitia. Deserunt voluptas repellendus, sint sunt voluptatem doloremque repellat iure modi eius libero!
  </div>
</div>
```
