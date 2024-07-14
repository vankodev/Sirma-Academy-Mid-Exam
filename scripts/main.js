const toggleButton = document.getElementsByClassName('navbar-toggle-button')[0];
const navbar = document.getElementsByClassName('navbar')[0];

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('mobile');
})


const tabs = document.querySelectorAll('.btn-tab');
const contents = document.querySelectorAll('.features-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        tab.classList.add('active');

        const contentId = tab.getAttribute('data-content');
        document.getElementById(contentId).classList.add('active');
    });
});