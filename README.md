# Theme Switcher
网页明暗主题色切换

## :dog: Auto Dark Mode

### Summary

[预览地址](https://yangqyangq.github.io/theme-switcher/auto-dark-mode/)

可以根据系统设置的 深色/浅色 主题来自动切换网页明暗

### How 
使用 `CSS Variables` 和 `prefers-color-scheme media query` 来实现

```css
html {
    background-color: var(--bg);
    color: var(--main);
}

@media (prefers-color-scheme: dark) {
    :root {
        --main: #f3f3f3;
        --bg: #333333;
    }
}

@media (prefers-color-scheme: light) {
    :root {
        --main: #333;
        --bg: #ffffff;
    }
}
```

### Browsers Support
https://caniuse.com/#search=prefers-color-scheme


## :dog: White and Dark Theme

[预览地址](https://yangqyangq.github.io/theme-switcher/white-dark-theme/)

### Tips and Tricks About CSS Variables
```css
:root{
  --example-color: #ccc;
}

.someElement {
  background-color: var(--example-color, #d1d1d1);
}
```
`class` 为 `someElement` 元素的背景色设置为  `#ccc`

如果 `--example-color` 值无效时， 背景色值取 `#d1d1d1`



```css
.someElement {
  background-color: var(--first-color, var(--second-color, white));
}
```

当 `--first-color` 值无效时，取 `--second-color`

当 `--first-color` 和 `--second-color` 均无效时，背景色值为 `white`

