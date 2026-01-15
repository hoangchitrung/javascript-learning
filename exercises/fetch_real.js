/*
    Take top 3 posts
    Print on the screen with format 

    Title: ... (all uppercase)
    Content: ...
    -------------------------
*/

const url = "https://jsonplaceholder.typicode.com/posts"

const fetchPosts = async () => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error while fetching API")
        }

        // Transfer from text into object
        const posts = await response.json();

        for (let i = 0; i < 3; i++) {
            const post = posts[i];
            console.log(`Title: ${post.title.toUpperCase()}`);
            console.log(`Content: ${post.body}`);
            console.log("-------------------------------------");
        }
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

fetchPosts();