const form = document.getElementById('reg-form')
form.addEventListener('submit', registerUser)
        
async function registerUser(event) {
    event.preventDefault()
    const email = document.getElementById('email').value
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
        

    const result = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            username,
            password
        })
    }).then((res) => res.json())
        
    if (result.status === 'ok') {
        // everythign went fine
        alert('Cont creat cu succes')
        window.location.href="homepage"
        } else {
            alert(result.error)
            }
}