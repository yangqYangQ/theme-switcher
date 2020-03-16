const checkbox = document.querySelector('.theme-switcher');

checkbox.addEventListener('change', function () {
    document.body.classList.add(this.checked ? 'dark' : 'light');
    document.body.classList.remove(this.checked ? 'light' : 'dark');
});