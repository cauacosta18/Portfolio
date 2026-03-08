let image_selected = document.getElementById("image-selected");
let img = document.getElementById("zoom-img");

let max_img_per_collumn = 8;

let scale = 1;
let offsetX = 0;
let offsetY = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    
    [array[i], array[j]] = [array[j], array[i]];
  }
  
  return array;
}

function setupCollumns (itens) {

    let collumns = document.querySelectorAll(".collumn");

    let item_collumns = [[], [], []];
    
    for (let i = 0; i < max_img_per_collumn; i++) {
        item_collumns[0].push(itens[i]);   
    }
    for (let i = max_img_per_collumn; i < (max_img_per_collumn * 2); i++) {
        item_collumns[1].push(itens[i]);   
    }
    for (let i = (max_img_per_collumn * 2); i < (max_img_per_collumn * 3); i++) {
        item_collumns[2].push(itens[i]);   
    }

    collumns.forEach((collumn, index) => {

        collumn.innerHTML = "";

        item_collumns[index].forEach (item => {
 
            collumn.append(item);       
            
        })
    
    });
}

function updateTransform() {
    img.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
}

function setupItens () {
    let collumns = document.querySelectorAll(".collumn");
    let itens = [];
    
    collumns.forEach(collumn => {
        
        for (let div of collumn.children) {
            itens.push(div);
        }
        
    });

    return itens;
}

function updateScale (deltaY) {

    if (scale >= 10) {
        if (deltaY > 0) {
            scale -= 0.25;
            updateTransform();
        }
    } else if (scale <= 0.5) {
        if (deltaY < 0) {
            scale += 0.25;
            updateTransform();
        }
    } else {
        if (deltaY > 0) {
            scale -= 0.25;
            updateTransform();
        } else {
            scale += 0.25;
            updateTransform();
        }  
    }

}

function isMobile () {
    return navigator.maxTouchPoints > 0 || /Android|iPhone/i.test(navigator.userAgent);
    
}

function setuptDragging () {

    let isDragging = false;
    let startX, startY;

    img.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX - offsetX;
        startY = e.clientY - offsetY;
        img.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        offsetX = e.clientX - startX;
        offsetY = e.clientY - startY;

        updateTransform();

    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        img.style.cursor = "grab";
    });


    img.addEventListener("wheel", (event) => {

        event.preventDefault();

        updateScale(event.deltaY)
    });
    

}

export function setupIllustrations () {

    let itens = setupItens();    

    itens = shuffle(itens);

    setupCollumns(itens);    

    let certificates = document.querySelectorAll(".small-grid-col");

    certificates.forEach(certificate => {
        certificate.addEventListener(("click"), (event) => {
            image_selected.style.display = "flex";
            document.getElementById("html").style.overflow = "hidden";
            
            img.src = event.currentTarget.firstElementChild.src;
            
        })
    });

    if (isMobile()) {
        
        let slides = document.querySelectorAll(".slide");
    
        slides.forEach(slide => {
            slide.addEventListener(("click"), (event) => {
                image_selected.style.display = "flex";
                document.getElementById("html").style.overflow = "hidden";
    
                img.src = event.currentTarget.firstElementChild.src;
            })
        })
    }


    itens.forEach(item => {
   
        item.addEventListener(("mouseleave"), (event) => {
            event.currentTarget.lastElementChild.style.bottom = "-100px"
        })
        
        if (!isMobile()) {
            
            item.addEventListener(("mouseenter"), (event) => {
                event.currentTarget.lastElementChild.style.bottom = "0";
            })

            item.addEventListener(("click"), (event) => {
                image_selected.style.display = "flex";
                document.getElementById("html").style.overflow = "hidden";
                
                img.src = event.currentTarget.firstElementChild.src;
                
            })
        } else {

            item.addEventListener(("click"), (event) => {
                
                if (event.currentTarget.lastElementChild.style.bottom == "0px") {
                    
                    event.currentTarget.lastElementChild.style.bottom = "-100px"
                } else {
                    event.currentTarget.lastElementChild.style.bottom = "0";
                }
            })

        }
        
    })

    document.getElementById("shuffle").addEventListener("click", () => {
        itens = shuffle(itens);
        setupCollumns(itens);
    })

    if (!isMobile()) {
        
        setuptDragging();
    
    }
    
    image_selected.addEventListener("click", (event) => {
        if (!img.contains(event.target)) {
            event.currentTarget.style.display = "none";
            document.getElementById("html").style.overflowY = "scroll";
            offsetX = 0;
            offsetY = 0;
            scale = 1;
            updateTransform();
            
            
        }
    });


    


    
}