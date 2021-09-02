function welcomeMsg(fName, lName, email) {
    return "hello, " + fName + " " + lName + ". The email you used to sign up is " + email
}

welcomeMsg('Tyler', 'McGinnis', 'tyler@gmail.com')

function welcomeMensg(fName, lName, email) {
    return `hello, ${fName} ${lName}. The email you used to sign up is "${email}"`
}

welcomeMensg('Tyler', 'McGinnis', 'tyler@gmail.com')
 
function welcomeTemplate(fName, lName, email){
    return "<div><h1>Hello, " + fName + " " + lName + ".</h1><i>The email you used to sign up is \"" + email + "\"</i></div>"
}
welcomeTemplate('Tyler', 'McGinnis', 'tyler@gmail.com')

function betterTemplate(fName, lName, email){
    return `
    <div>
        <h1>Hello, ${fName} ${lName}.</h1>
        <i>The email you used to sign up is ${email} </i>
    </div>
    `
}