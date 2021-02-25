const signIn = (username, password) => (
    fetch('https://shopping-api-app.herokuapp.com/users',
    {   
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
);

module.exports = signIn;