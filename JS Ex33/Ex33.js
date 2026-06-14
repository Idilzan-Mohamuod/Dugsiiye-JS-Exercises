function changeContent() {
    const header = document.querySelector("#header");
    const paragraph = document.querySelector("#paragraph");

    header.textContent = "Welcome back, Ayaan!";
    paragraph.innerHTML = "Status: <span style='color: green; font-weight: bold;'> ● Online</span>";
}