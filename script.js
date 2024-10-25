
function scrollToElement(elementId) {
    document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
}


const links = document.querySelectorAll('#sidebar a');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        const targetId = link.getAttribute('href').substring(1);
        scrollToElement(targetId);
    });
});

