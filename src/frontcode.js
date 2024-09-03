// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('textForm');
    const textInput = document.getElementById('textInput');
    const wrapWidth = 1000
    const wrappedText = document.getElementById('source_code');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get the text input and wrap width
        const inputText = textInput.value;
        const width = parseInt(wrapWidth.value, 10);

        // Wrap the text using a custom function
        const wrapped = wrapText(inputText, width);

        // Display the wrapped text
        wrappedText.textContent = wrapped;
    });

    function wrapText(text, width) {
        // Split the text into words
        const words = text.split(' ');
        let currentLine = '';
        let result = '';

        words.forEach(word => {
            if ((currentLine + word).length > width) {
                result += currentLine.trim() + '\n';
                currentLine = '';
            }
            currentLine += word + ' ';
        });

        result += currentLine.trim(); // Add the last line
        return result;
    }
});
