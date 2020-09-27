document.addEventListener("DOMContentLoaded", () => {
    const $open = document.getElementsByClassName('open')[0];
    const $close = document.getElementsByClassName('close')[0];
    const $body = document.getElementsByTagName('body')[0];
    $open.addEventListener('click', () => {
        $body.classList.add('is-active');
    });
    $close.addEventListener('click', () => {
        $body.classList.remove('is-active');
    })
})
