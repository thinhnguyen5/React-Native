const addPost = (title, category, image, price, brand, description, dateOfposting,location, DeliveryType, username, phone) => (
    fetch('https://shopping-api-app.herokuapp.com/products',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ title, category, image, price, brand, description, dateOfposting,location, DeliveryType, username, phone })
    })
    .then(res => res.json())
);

module.exports = addPost;