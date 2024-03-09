// For Dark and Light Mode

const toggleIcon = document.querySelector('.toggle-icon');
toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('light-mode');
});


// Show the thank you message

document.getElementById('subscribeBtn').addEventListener('click', function () {
    document.getElementById('thankYouMessage').style.display = 'block';
});



// For Connect Excel with contect section

const scriptURL = 'https://script.google.com/macros/s/AKfycbxm7-WHB2G12DTXOCYPMoYbu5nFXRCf2psMINQIU1wurBdfk9OQO4Y5Y6vwtYe5DtgV/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thanks for Contacting me..! I Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
})
