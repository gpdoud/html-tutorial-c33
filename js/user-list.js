let users = [];

const getAllUsers = () => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "http://localhost:5000/api/users", true);
    xhr.onload = () => {
        users = xhr.response;
        loaded(users);
    }
    xhr.send();
}

const loaded = (users) => {
    var tbody = document.getElementById("data");
    tbody.innerHTML = "";
    for(let user of users) {
        let tr = "<tr>";
        tr += `<td>${user.id}</td>`;
        tr += `<td>${user.username}</td>`;
        tr += `<td>${user.firstname} ${user.lastname}</td>`;
        tr += `<td>${user.phone}</td>`;
        tr += `<td>${user.email}</td>`;
        tr += `<td>${displayBoolean(user.isReviewer)}</td>`;
        tr += `<td>${displayBoolean(user.isAdmin)}</td>`;
        tr += `<td><a href="user-detail.html?id=${user.id}">Detail</a>`;
        tr += ` | <a href="user-edit.html?id=${user.id}">Edit</a></td>`;
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}