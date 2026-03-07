
export function setupAlert () {
    let buttons = document.querySelectorAll(".sharing");
    
    buttons.forEach(button => {
        button.addEventListener("click", (event)=> {            

            let alertDiv = document.getElementById("alert");
            alertDiv.textContent = "Link ainda não funcional."
            alertDiv.style.bottom = "20px";

            setTimeout(function () {
                alertDiv.style.bottom = "-200px";
            }, 3000)
        })
    });
    
}