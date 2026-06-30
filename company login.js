function dashboard() {
    console.log("Loading dashboard...");
}
function login(callback) {
    console.log("Logging successfully...");
    callback();
}

login(dashboard);