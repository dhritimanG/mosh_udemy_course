console.log("Before GitHub API Call");

// Enter a userId to retrieve the user from the database
getUser(1, (user) => {
    console.log('Retireved user was', user);

    // Find all valid GitHub repositories of this user
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos retrieves were: ', repos);
    });
});

console.log("After GitHub API Call");

function getUser(userId, callback){
    setTimeout(()=>{
        console.log('Reading from the database...');
        callback({id: 1, gitHubUsername: 'alex'});
    }, 2000);
}

function getRepositories(gitHubUsername, callback){
    setTimeout(() => {
        console.log('Finding repositories belonging to the user');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}