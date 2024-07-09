// toggleButtonColor.js
export function toggleButtonColor() {
    document.querySelectorAll('.case button').forEach(button => {
        button.addEventListener('click', function() {
            if (this.style.backgroundColor === 'blue') {
                this.style.backgroundColor = '#8bc34a';
            } else {
                this.style.backgroundColor = 'blue';
            }
        });
    });
}
