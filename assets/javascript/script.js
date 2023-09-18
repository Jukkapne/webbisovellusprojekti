const simplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        
      let isSuccess = Math.random() < 0.5; // This will generate a random boolean value

      if (isSuccess) {
        resolve('Operation was successful!'+isSuccess);
      } else {
        reject('Operation failed.'+isSuccess);
      }
    }, 2000);
  });
  
  simplePromise
    .then(message => console.log("thenistä "+message))
    .catch(error => console.error("catchistä "+error));
  