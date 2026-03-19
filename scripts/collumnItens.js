let image_selected = document.getElementById("image-selected");
let img = document.getElementById("zoom-img");

let max_img_per_collumn = 8;
let max_img_per_collumn_design = 3;

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

function setupCollumnsDesign (itens) {

    let all_collumns = document.querySelectorAll(".collumn");

    let collumns = []

    all_collumns.forEach(collumn => {
        if (collumn.classList.contains("design")) {
            collumns.push(collumn)
        }
    })

    let item_collumns = [[], [], []];

    
    for (let i = 0; i < max_img_per_collumn_design; i++) {
        if (itens[i].classList.contains("design")){
            item_collumns[0].push(itens[i]);
            if (itens[i + max_img_per_collumn_design]) item_collumns[1].push(itens[i + max_img_per_collumn_design]);
            if (itens[i + max_img_per_collumn_design * 2]) item_collumns[2].push(itens[i + max_img_per_collumn_design * 2]);
        }
    }
    

    collumns.forEach((collumn, index) => {
 
        collumn.innerHTML = "";

            for (let item of item_collumns[index]) {
                collumn.append(item)
            }
            
    });
}

function setupCollumnsIllustration (itens) {

    let all_collumns = document.querySelectorAll(".collumn");

    let collumns = []

    all_collumns.forEach(collumn => {
        if (!collumn.classList.contains("design")) {
            collumns.push(collumn)
        }
    })

    let item_collumns = [[], [], []];

    for (let i = 0; i < max_img_per_collumn; i++) {
        if (!itens[i].classList.contains("design")){
            item_collumns[0].push(itens[i]);
            if (itens[i + max_img_per_collumn]) item_collumns[1].push(itens[i + max_img_per_collumn]);
            if (itens[i + max_img_per_collumn * 2]) item_collumns[2].push(itens[i + max_img_per_collumn * 2]);
        }
    }
    
    collumns.forEach((collumn, index) => {
 
        collumn.innerHTML = "";        

        for (let item of item_collumns[index]) {
            
            collumn.append(item)
        }
            
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

            if (collumn.classList.contains("design")) {
                div.classList.add("design")
            }            
            
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

export function setupCollumnItens () {

    let itens = setupItens();    
    
    let illustrations = []
    let designs = []

    itens.forEach(item => {
        
        if (item.classList.contains("design")) {            
            designs.push(item)
        } else {
            illustrations.push(item)
        }
    })    

    
    let shuffled_designs = shuffle(designs);
    let shuffled_illustrations = shuffle(illustrations);

    setupCollumnsDesign(shuffled_designs);    
    setupCollumnsIllustration(shuffled_illustrations);    

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

    document.getElementById("shuffle-illustration").addEventListener("click", () => {
        illustrations = shuffle(illustrations);        
        setupCollumnsIllustration(illustrations);
    })
    document.getElementById("shuffle-design").addEventListener("click", () => {
        designs = shuffle(designs);        
        setupCollumnsDesign(designs);
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