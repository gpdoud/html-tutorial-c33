// http://localhost:5500/user-detail.html?id=1
const getUrlId = () => {
    let url = window.location.href;
    let parts = url.split("?");
    let kvpair = parts[1].split("=");
    return +kvpair[1];
}

const displayBoolean = (aBoolean) => {
    return aBoolean ? "YES" : "NO";
}