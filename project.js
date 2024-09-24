document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generateButton').addEventListener('click', function() {
        const randomColor = getRandomHexColor();
        document.getElementById('colorDisplay').textContent = randomColor;
        document.getElementById('colorDisplay').style.backgroundColor = randomColor;
    });

    function getRandomHexColor() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        return randomColor;
    }
});
