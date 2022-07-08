const baseUrl = `http://localhost:3005/api/users`;

export const createUser = async (userData) => {
    console.log(userData);

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData),

    })

    const result = await response.json();

    console.log(result);

    return result.user;
}

export const getUser = async (userId) => {
    const response = await fetch(baseUrl + `/${userId}`);

    const result = await response.json();

    console.log(result);

    return result.user;
}