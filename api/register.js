const register = ( name, password) => (
    fetch('https://shopping-api-app.herokuapp.com/users',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({  name, password })
    })
    .then(res => res.text())
);

module.exports = register;