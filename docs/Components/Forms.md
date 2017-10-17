Here is how to create a simple login form:

```html
<form>
    <div class="form-group">
        <label for="emailAddress">Email Address</label>
        <input type="email" class="form-control" id="emailAddress" placeholder="jdoe@example.com">
    </div>
    <div class="form-group">
        <label for="passwordInput">Password</label>
        <input type="password" class="form-control" id="passwordInput">
    </div>
    <div class="form-group">
        <label class="form-check-label">
            <input type="checkbox" class="form-check-input">
            Remember me
        </label>
    </div>
    <button type="submit" class="button info filled">Submit</button>
</form>
```

Forms are made up of a collection of groups called `form-group`. Within each `form-group` is an optional
`label` and a `form-control`. The `form-control` can be an `<input>`, `<textarea>`, or `<select>`. Use `form-check-label` within a `form-group` when creating a checkbox or radio.

`form-control` can come in 3 different sizes like so:

```html
<div class="form-group">
    <input type="text" class="form-control large"> <!-- Large -->
    <input type="text" class="form-control"> <!-- Default -->
    <input type="text" class="form-control small"> <!-- Small -->
</div>
```

Finally, to create inline forms just add the `form-inline` class to the form element like so:

```html
<form class="form-inline">
    <div class="form-group">
        <input type="email" class="form-control" placeholder="jdoe@example.com">
    </div>
    <div class="form-group">
        <input type="password" class="form-control" placeholder="Password">
    </div>
    <button type="submit" class="button info filled">Submit</button>
</form>
```
