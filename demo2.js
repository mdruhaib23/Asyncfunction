console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const getCandy = new Promise((resolve, reject) => resolve('candy'));
    const getCoke = new Promise((resolve, reject) => resolve('coke'));

    let ticket = await promiseWifeBringingTickets;

    let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke]);

    console.log(`${popcorn}, ${candy}, ${coke}`);
    return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');

// Async/Await conversion for createPost and deletePost functions
const createPost = async (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve('Post created successfully');
        }, 2000);
    });
};

const deletePost = async (index) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (index >= 0 && index < posts.length) {
                posts.splice(index, 1);
                resolve('Post deleted successfully');
            } else {
                reject('Invalid index');
            }
        }, 2000);
    });
};