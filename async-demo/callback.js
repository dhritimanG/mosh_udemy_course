console.log("Before GitHub API Call");

// Enter a userId to retrieve the user from the database
getUser(1, (user) => {
    console.log('Retireved user was', user);

    // Find all valid GitHub repositories of this user
    getRepositories(user.gitHubUsername, (repos) => {
        console.log(['repo1', 'repo2', 'repo3']);
    });
});

console.log("After GitHub API Call");

function getUser(user, callback){
    setTimeout(()=>{
        console.log('Reading from the database...');
        callback('alex green');
    }, 2000);
}

function getRepositories(user, callback){
    setTimeout(() => {
        console.log('Finding repositories belonging to the user');
        callback({id: 1, gitHubUsername: 'alex'});
    }, 2000);
}