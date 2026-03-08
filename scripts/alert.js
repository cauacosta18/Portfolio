
export function setupAlert () {

    let alert_ativado = false;
    
    let technologies = document.querySelectorAll(".technology");
    
    technologies.forEach(technology => {
        technology.addEventListener("click", (event) => {
            
            let alertDiv = document.getElementById("alert");
            alertDiv.textContent = event.currentTarget.firstElementChild.title;

            if (!alert_ativado) {
                
                
                alertDiv.style.bottom = "20px";
    
                alert_ativado = true;
                
                setTimeout(function () {
                    alertDiv.style.bottom = "-200px";
                    alert_ativado = false;
                }, 3000);
            }

        })
    })
    
}