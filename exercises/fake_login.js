// Simulate a delay function
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const login = async (username, password) => {
    console.log(`Checking username: ${username}`);

    await wait(5000);

    if (username === "admin" && password === 123456) {
        return { id: 1, name: "Trung Admin", role: "SuperUser" };
    } else {
        throw new Error("This account isn't exist!");
    }
}

const main = async () => {
    try {
        console.log("Test case 1: Correct login");
        const user = await login("admin", 123456);
        console.log("login success ", user);

        console.log("test case 2: Incorrect login");
        await login("guest")
        console.log("You can't see me");
    } catch (error) {
        console.log("Error: ", error.message);
    } finally {
        console.log("End");
    }
}

main()