async function sendEmailToCustomer(){
    const customer = await getCustomer(1);
    console.log('Customer: ', customer);
    var movies = null;
    if(customer.isGold){
        movies = await getTopMovies();
    }
    console.log('Top Movies: ', movies);
    Promise.all([customer, movies])
        .then(sendEmail(customer.email, movies));
    console.log('Email sent...');
}

sendEmailToCustomer();

function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ 
            id: 1, 
            name: 'Mosh Hamedani', 
            isGold: true, 
            email: 'email' 
          });
        }, 4000);  
    });
  }
  
  function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(['movie1', 'movie2']);
        }, 4000);
    });
  }

  function sendEmail(email, movies) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve();
        }, 4000);
    });
  }