// Variables
const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
// End of Variables

// Palindrome Checker Funciton

function Palindrome(str) {
    let normalized = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversed = [...normalized].reverse().join('');

    if (str === '') {
        return alert("Please input a value");
    } else if (normalized === reversed) {
        result.innerHTML = `
        <h2> <strong>${str}</strong> is a palindrome.</h2>
        `
        return result;
    } else {
        result.innerHTML = `
        <h2> <strong>${str}</strong> is not a palindrome.</h2>
        `
        return result;
    }
}

// End of Palindrome Checker Funciton

checkBtn.addEventListener('click', () => {
    Palindrome(textInput.value);
});

