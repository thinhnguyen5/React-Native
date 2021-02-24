const signIn = (email, password) => (
    fetch('https://shopping-api-app.herokuapp.com/users',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
);

module.exports = signIn;