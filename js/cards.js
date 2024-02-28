function expand(selection) {
    let expansion = document.querySelector(selection);
    if (!expansion.classList.contains('active')) {
        collapse();
        expansion.classList.add('active');
    }
}
function collapse() {
    let previousCard = document.querySelector('.active');
    if (previousCard) {
        previousCard.classList.remove('active')
    }
}