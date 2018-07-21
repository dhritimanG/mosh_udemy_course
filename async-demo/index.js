console.log("Before GitHub API Call");
const user = getUser(1);
console.log(user);
console.log("After GitHub API Call");

function getUser(user){
    setTimeout(() => {
        return 1;
    }, 2000);
}