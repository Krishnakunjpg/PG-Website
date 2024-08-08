function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzcvdrJoWnulOItYjsoEC63v7un9SnG7aNZMbRp5-xQ4NSsiXOchvI3xxKHowLJXr-mHg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => {
            window.location.reload();
        })
        .catch(error => console.error('Error!', error.message))
})

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
    let normalizedPosition = e.pageX / (width / 2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;
    spansSlow.forEach((span) => {
        span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span) => {
        span.style.transform = `translate(${speedFast}px)`
    })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
    width = window.innerWidth;
}