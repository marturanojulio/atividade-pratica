
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


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


window.onscroll = function() {
    const button = document.getElementById('voltar-ao-topo');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block"; 
    } else {
        button.style.display = "none";
    }
};
