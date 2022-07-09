const baseUrl = `http://localhost:3005/api/users`;

export const createUser = async (userData) => {

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData),

    })

    const result = await response.json();

    console.log(result);

    return result;
}

export const editUser = async (userId, userData) => {

    console.log(userId);
    const response = await fetch(baseUrl + `/${userId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData),

    })

    const result = await response.json();

    console.log(result);

    return result;
}

export const deleteUser = async (userId) => {

    const response = await fetch(baseUrl + `/${userId}`, {
        method: 'DELETE',
    })

    const result = await response.json();

    console.log(result);

    return result;
}

export const getUser = async (userId) => {
    const response = await fetch(baseUrl + `/${userId}`);

    const result = await response.json();

    console.log(result);

    return result.user;
}

export const getUsersList = async () => {
    const response = await fetch(baseUrl);

    const result = await response.json();

    console.log(result.users);

    return result.users;
}