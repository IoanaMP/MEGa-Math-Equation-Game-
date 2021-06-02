// var attempt = 3; // Variable to count number of attempts.
//     function validateLogin(){
//     alert("Login function in progress...");
// }

(() => {
  //preluam datele din form
  //const parent = document.getElementById('auth-form');

  //console.log(parent);

  const form = document.querySelector('form');

  console.log(form);

  const email = form.querySelector('[name="email"]');

  console.log(email);

  const password = form.querySelector('[name="password"]');
  const button = form.querySelector('[type="submit"]');
  //const message = parent.querySelector('#error');

  button.addEventListener('click', login);
  form.addEventListener('submit', login);
  
  


  // async function login(event) {
  //   event.preventDefault();
  //   // request post trimite email si parola si verifica daca succes
  //   try {
  //     const data = await fetch('/api/auth/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         email: email.value,
  //         password: password.value
  //       })
  //     }).then(r => r.json());
  //     // setez token (string criptat care contine datele user-ului) si redirectionare pagina colectii
  //     if (data.success) {
  //       localStorage.setItem('token', data.token);
  //       localStorage.setItem('user', data.user);
  //       go('/collections');
  //     } else {
  //       message.textContent = data.message;
  //       message.style.display = 'block';

  //       setTimeout(() => {
  //         message.style.display = 'none';
  //       }, 10000);
  //     }
  //     //schimbam header-ul paginii
  //     changeHeader(!!data.token);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
})()