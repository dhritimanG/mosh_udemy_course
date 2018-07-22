console.log("Before GitHub API Call");


/**
 * Write promises strictly in the following syntax or it will perform execution
 * in a weird order and give strange results. JavaScript is weird!!
 * 
 * i.e Don't write more than a single instruction in the the then block.
 * For nested asynchronmous calls, use Promises strictly for chaining and
 * nothing else
 */

 async function displayRepos() {
     const user = await getUser(1);
     const repos = await getRepositories(user.gitHubUsername);
     console.log(`Retrieved repositores of user ${user.gitHubUsername} are ${repos}`);
 }

 displayRepos();

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