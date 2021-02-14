const d = document;
function hamburgerMenu(panelBtn, panel, menuLink) {

      d.addEventListener("click", (e)=>{
            console.log(e.target)
            if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
                  d.querySelector(panel).classList.toggle("is-active");
                  d.querySelector(panelBtn).classList.toggle("is-active");
            }

             if(e.target.matches(menuLink) ){
                  d.querySelector(panel).classList.remove("is-active");
                  d.querySelector(panelBtn).classList.remove("is-active");
            }
      })
}


d.addEventListener("DOMContentLoaded", e =>{
      hamburgerMenu(".menu-panel__btn", ".menu-panel", ".main-menu a");
})


