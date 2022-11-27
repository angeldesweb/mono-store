import { env } from '$env/dynamic/private'

const apidir = env.API_URL;

export const createBrand = async (body) => {
    try {
        const response = await fetch(`${apidir}/api/brand/new`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            mode:'cors',
            body:JSON.stringify(body)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

export const updateBrand = async (args,id) => {
    try {
        const response = await fetch(`${apidir}/api/brand/update/${id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            mode:'cors',
            body:JSON.stringify(args)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};