// Palindrome Checker Funciton

function Palindrome(str) {
    let normalized = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversed = [...normalized].reverse().join('');

    if (normalized === reversed) {

    } else {

    }
}

// End of Palindrome Checker Funciton