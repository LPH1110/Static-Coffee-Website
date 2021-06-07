var header = document.querySelector("#header");
var menu = document.querySelector(".menu-bar");
var navs = document.querySelectorAll("#head-nav > li a")
var subnavAList = document.querySelectorAll(".sub-nav li a");
var btns = document.querySelectorAll("#tour .btn");
var headerHeight = header.clientHeight;
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal__overlay");

menu.addEventListener('click', () => {
    if (header.clientHeight === headerHeight) {
        header.style.height = "auto";
    } else {
        header.style.overflow = "hidden";
        header.style.height = headerHeight + "px";
    }

    var subNavStt = 0;
    for (var nav of navs) {
        nav.onclick = function(e) {
            if (this.nextElementSibling != null && this.nextElementSibling.classList.contains("sub-nav")) {
                e.preventDefault();
                if (subNavStt) {
                    //Closed
                    header.style.overflow = "hidden";              
                    subNavStt = 0;
                } else {
                    //Opened
                    header.style.overflow = "unset";
                    subNavStt = 1;
                }
            } else {
                header.style.overflow = "hidden";                
                header.style.height = headerHeight + "px";
            }
        }
    }
});

for (var btn of btns) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
    })
}

for (var a of subnavAList) {
    a.addEventListener('click', function(e) {
        e.preventDefault();
    })
}

// Buy click
var buyBtn = document.querySelectorAll(".place-body a");
var buyForm = document.querySelector(".modal .form");
var exitBtn1 = document.querySelector(".form__title-exit");
var exitBtn2 = document.querySelector(".form-footer__close-btn");

buyBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
        modal.style.display = "block";
        buyForm.style.display = "block";
    })
})

function close() {
    modal.style.display = "none";
}

exitBtn1.addEventListener('click', close);
exitBtn2.addEventListener('click', close);
