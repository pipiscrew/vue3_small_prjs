export default {
    // user : null,
    GetLogin,
    IsLoggedIn,
}


function GetLogin(url, postData) {

    const requestOptions = {
        method: "POST",
        cache: 'no-cache',
        body: postData
    };
    
    return fetch(url, requestOptions).then(response => {
      if (response.ok) {
        return response.json().then(response => ({ response }));
      }
      else 
        return response.json().then(error => ({  error }));
    })
        .catch(error => { return { error };
    });
}


function IsLoggedIn() {

  const requestOptions = {
      method: "GET",
      cache: 'no-cache'
  };
  
  let url = 'api/isLoggedin.php';

  return fetch(url, requestOptions).then(response => {
      return response.json().then(function (response) {
        return response.status;
  })
      .catch(() => {  return false; })
  });
}

