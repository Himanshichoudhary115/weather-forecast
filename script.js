document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector(".buton");
    if (btn) {
        btn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            document.body.classList.toggle("light-mode");

        
            
    });
}
})