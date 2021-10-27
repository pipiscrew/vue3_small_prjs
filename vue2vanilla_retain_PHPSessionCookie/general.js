//If already defined, we use that instance, otherwise we assign a new object
//https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch13s15.html
var general = general || {};


general.GetLogin = function (url, postData) {
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
};

general.IsLoggedIn = function () {

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
  

