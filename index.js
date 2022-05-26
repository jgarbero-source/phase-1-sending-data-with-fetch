// Add your code here

function submitData() {
    return fetch('//localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com"
        })
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => {
        alert("Bad things!")
        console.log(error.message)
    })
}

submitData()






// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle",
//     }),
//   };
  
//   function runConfig() {
//     fetch("http://localhost:3000/dogs", configurationObject);
//   }

//   fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   });
  