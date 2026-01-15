// PART 4: ASYNC/AWAIT
// JS using promise as a promise will return value

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

await wait(2000);
console.log("Hello");

const loadCategories = async () => {
    try {
        const res = await fetch(uri);
        return res;
    } catch (error) {
        throw new Error(error);
    }
}