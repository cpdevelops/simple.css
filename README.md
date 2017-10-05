<p align="center">
  <a href="http://cpdev.me/simple.css/">
    <img src="logo.svg" width="40%" alt="simple.css Logo" />
  </a>
</p>

### About
Simple.css is a simple CSS framework designed to be easy to work with and edit. It is entirely open source and free for anyone to use. It is currently in development; however, if you'd like to follow its progress you can do so [here](http://cpdev.me/simple.css/).

### Install

```npm install simple_css```

### Development
To help out with Simple.css, follow these steps:

- Clone the repository using `git clone https://github.com/cpdevelops/simple.css.git`
- Make any modifications you feel are necessary, or find modifications using the issues tab on our GitHub page.
- Once you are done, make a pull request on GitHub and I will review it to make the necessary changes.

You can join the Gitter chat room [here](https://gitter.im/draconicdevv/simple.css?utm_source=share-link&utm_medium=link&utm_campaign=share-link).

Happy coding!

### Components
List of components can be found [here](https://github.com/cpdevelops/simple.css/tree/master/src/components)

##### Button Component
Buttons can be styled by applying the `button` class to any `<button>` element.

```html
<button type="button" class="button">Default</button>
```

There are two types of buttons as of now; filled and non-filled. To get a filled button we add the "filled" class to our button.

```html
<button type="button" class="button filled">Default filled</button>
```

> You can also edit the appearance of your button using any of Simple.css' modifier classes. For example, check out the demo page.

##### Code Block Component
You can create styled codeblocks using the `code` class on any element. Optionally you can add an element with the `language` id to display the code block's language in the top right
```html
<div class="code">
    <span id="language">JavaScript</span>
    code goes here
</div>
```

##### Alert Component
You can create styled alerts by applying the `alert` class to any `<div>` element.

There are currently four `alert` styles: info, success, warning, and error.

```html
<div class="alert info">Info message</div>
```
```html
<div class="alert success">Successful operation message</div>
```
```html
<div class="alert warning">Warning message</div>
```
```html
<div class="alert error">Error message</div>
```
