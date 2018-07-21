console.log("Before GitHub API Call");

getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => console.log('Repositories belonging to this user are: ', repos))
    .catch(err => console.log('Error ', err.message));

console.log("After GitHub API Call");

function getUser(userId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Reading from the database...');
            resolve({id: 1, gitHubUsername: 'alex'});
        }, 2000);
    });
}

function getRepositories(gitHubUsername){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Finding repositories belonging to the user');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}