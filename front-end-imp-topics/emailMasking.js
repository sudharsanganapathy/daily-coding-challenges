// Approach:
// 1. Split the email using "@".
// 2. Store the username and domain separately.
// 3. Keep the first character of the username visible.
// 4. Replace the remaining username characters with "*".
// 5. Add "@" and the original domain.
// 6. Return the masked email.


function emailMasking(email){

    const[username, domain] = email.split("@");

    return username[0]+"*".repeat(username.length-2)+username[username.length-1]+"@"+domain;

}

console.log(emailMasking("sudharsan@gmail.com"));