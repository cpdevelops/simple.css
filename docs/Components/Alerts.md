# Alert Component

You can create styled alerts by applying the `alert` class to any `<div>` element.

There are currently four `alert` styles: `info`, `success`, `warning`, and `error`.

If you add `<span class="close"></span>` inside of `<div class="alert" />` component, it will become closable by user interaction.

Sample info alert component. Apply different modifier class for different color variation

```html
<div class="alert info">
  <div class="content">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque a error tenetur quo expedita pariatur soluta modi mollitia. Deserunt voluptas repellendus, sint sunt voluptatem doloremque repellat iure modi eius libero!
  </div>

  <span class="close"></span>
</div>
```
Want close on the other side? No problems, move the `span.close` before `div.content`

```html
<div class="alert info">
  <span class="close"></span>

  <div class="content">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque a error tenetur quo expedita pariatur soluta modi mollitia. Deserunt voluptas repellendus, sint sunt voluptatem doloremque repellat iure modi eius libero!
  </div>
</div>
```
