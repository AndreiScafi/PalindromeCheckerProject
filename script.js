// Variables
const textInput = document.getElementById('text-input').value;
const checkBtn = document.getElementById('check-btn');
// End of Variables

// Palindrome Checker Funciton

function Palindrome(str) {
    let normalized = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversed = [...normalized].reverse().join('');

    if (normalized === reversed) {

    } else {

    }
}

// End of Palindrome Checker Funciton

