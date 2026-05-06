function showMessage() {
    alert("Welcome to our Landing Page Project!");
}

const heading = document.querySelector('.hero h2');

if (heading) {
    heading.addEventListener('mouseover', function () {
        heading.style.color = '#35A99C';
    });

    heading.addEventListener('mouseout', function () {
        heading.style.color = '#007bff';
    });
}