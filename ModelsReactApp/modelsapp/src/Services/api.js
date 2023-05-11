// This is a simplified version of https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper
// Kent's version is more optimized - less code duplication
let api_base_url = 'https://localhost:7181';

export function setBaseUrl(baseUrl) {
  api_base_url = baseUrl;
}

export async function getData(endpoint, customConfig = {}) {
    const config = {
        method: 'GET',
        ...customConfig,

        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    }
  return doFetch(endpoint, config);
    
}

export async function postData(endpoint, body, customConfig = {}) {
  const config = {
    method: 'POST',
    body: JSON.stringify(body),
    ...customConfig,
      headers: {
<<<<<<< HEAD
       'Authorization': 'Bearer ' + localStorage.getItem("token"),
      'Content-Type': 'application/json',
=======
     'Authorization': 'Bearer ' + localStorage.getItem("token"),
     'Content-Type': 'application/json',
>>>>>>> 5c52560fdf69422ef88f65496958929161f5791d
      ...customConfig.headers,
    },
  }
  return doFetch(endpoint, config);
}

export async function updateData(endpoint, body, customConfig = {}) {
  const config = {
    method: 'PUT',
    body: JSON.stringify(body),
    ...customConfig,
    headers: {
      'Content-Type': 'application/json',
      ...customConfig.headers,
    },
  }
  return doFetch(endpoint, config);
}

export async function deleteData(endpoint, customConfig = {}) {
  const config = {
    method: 'DELETE',
    ...customConfig,
  }

  return doFetch(endpoint, config);
}

async function doFetch(endpoint, config) {
  let response = await window.fetch(`${api_base_url}/${endpoint}`, config);
  if (response.ok) {
    return await response.json();
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}