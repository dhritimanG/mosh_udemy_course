/**
 * When we want to perform multiple parallel asynchronous operations for eg.
 * call the Facebook and Twitter APIs separately and then do something with 
 * their result together, we can use Promise.all()
 */

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Resolving API 1');
        resolve('Facebook response');
    }, 4000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Resolving API 2');
        resolve('Twitter response');
    }, 2000);
});

const p3 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Resolving API 3');
        resolve('GitHub response');
    }, 1000);
});

/** 
 *  This is something like an AND condition where we do something when all
 *  promises are fulfilled.
 */
Promise.all([p1,p2])
    .then(resolve => console.log(resolve));

/** 
 *  This is something like an OR condition where we do something when any one
 *  of the promises is fulfilled
 */
Promise.race([p2,p3])
    .then(resolve => console.log(resolve));