// fake api from JSONPlaceholder
const url = "https://jsonplaceholder.typicode.com/users";

const fetchUser = async () => {
    try {
        // Sending signal to the server and wait for the response
        const respones = await fetch(url);

        if (!respones.ok) {
            throw new Error(`Error while fetching api`);
        }

        console.log("Server accept the request");
        // Let the computer transfer text into Object (json)
        const users = await respones.json();
        
        // users list
        users.forEach(user => {
            console.log(`🧑 Name: ${user.name} | 💌 Email: ${user.email}`);
        });
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

fetchUser();