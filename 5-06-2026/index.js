const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {

    // Local Storage
    const user = {
        id: 1,
        name: "Srikanth",
        role: "Frontend Developer"
    };

    localStorage.setItem("user", JSON.stringify(user));

    // Session Storage
    sessionStorage.setItem("isLoggedIn", "true");

    // Callback
    function verifyUser(callback) {
        setTimeout(() => {
            console.log("User Verified");
            callback();
        }, 1000);
    }

    verifyUser(() => {
        console.log("Starting Login Process...");
    });

    // Promise
    function loginUser() {
        return new Promise((resolve, reject) => {
            const success = true;

            setTimeout(() => {
                if (success) {
                    resolve("Login Successful");
                } else {
                    reject("Login Failed");
                }
            }, 2000);
        });
    }

    loginUser()
        .then(message => {
            console.log(message);
            getUsers();
        })
        .catch(error => {
            console.log(error);
        });

    // Async/Await + Fetch API + Error Handling
    async function getUsers() {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            if (!response.ok) {
                throw new Error("Failed to Fetch Data");
            }

            const users = await response.json();

            console.log("Users:", users);

            // JSON
            const jsonData = JSON.stringify(users[0]);
            console.log("JSON Format:", jsonData);

        } catch (error) {
            console.error("Error:", error.message);
        }
    }
});