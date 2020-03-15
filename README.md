# Theme Switcher
网页明暗主题色切换

## Auto Dark Mode

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
