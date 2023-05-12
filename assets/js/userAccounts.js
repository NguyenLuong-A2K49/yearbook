const userAccounts = [
    { username: "everyone_", name: "My Friend", message: "Mình không biết mình có quen cậu hay không, nhưng nếu cậu đọc được thư mời này, mời cậu tham dự buổi kỉ yếu của mình nhé. Minh sẽ rất vui nếu cậu có mặt đó!" },
    { username: "", name: "", message: "" },
    { username: "", name: "", message: "" },
    { username: "", name: "", message: "" },
    { username: "", name: "", message: "" },
    { username: "", name: "", message: "" },
    { username: "", name: "", message: "" },
    { username: "", name: "", message: "" },
    
];

const loginForm = document.getElementById('login-form');
const login = document.getElementById('login');
const usernameDisplay = document.getElementsByClassName('username-display');
const userMessages = document.getElementsByClassName('user-message');

const nav = document.getElementById('nav');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const user = userAccounts.find((user) => user.username === username);

    if (user) {
        for (var eachUser of usernameDisplay) for (var users of userAccounts)
            if (users.username === username)
                eachUser.textContent = users.name;
        for (var users of userAccounts)
            if (users.username === username) for (var userMessage of userMessages)
                userMessage.textContent = users.message;
        main.style.display = 'flex';
        loginForm.style.display = 'none';
        login.style.display = 'none';

        nav.scrollIntoView({ behavior: "smooth" });
    }
});
