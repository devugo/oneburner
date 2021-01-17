AOS.init();

// MEGA MENU TOGGLE
let elements = document.getElementsByClassName(' oneburner-dropdown');

for(var i = 0; i<elements.length; i++){
    let element = elements[i];
    // element.addEventListener('mouseenter', function(){
    //     console.log(element)
    //     document.getElementById('oneburner-overlay').style.display = 'block';
    // })

    // element.addEventListener('mouseleave', function(){
    //     console.log(element)
    //     document.getElementById('oneburner-overlay').style.display = 'none';
    // })

    $('#oneburner-dropdown').hover(function() {
        $('#oneburner-overlay').css('display', 'block');
    }, function() {
        $('#oneburner-overlay').css('display', 'none');
    })
}


// FOOTER TOGGEABLE LINKS
var dropdown = document.getElementsByClassName("footer-dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle("active");
        
    });
}

// FOOTER LANGUAGE TOGGLE
function myFunction(e) {
    document.getElementById("languageDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    //   console.log(event.target);
    if (!event.target.matches(['.dropbtn', '.world', '.dropdown-icon', '.btn-text'])) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// window.onscroll = function(e) {
    // print "false" if direction is down and "true" if up
    // let scroll = this.oldScroll > this.scrollY;
    // console.log(scroll);

    // if(!scroll){
    //     // alert('got here')
    //     let getWideMenu = document.getElementById('oneburner-dropdown__menu');
    //     console.log(getWideMenu);
    //     getWideMenu.classList.toggle('hide');
    //     // getWideMenu.style.display = 'none';
    // }
    // this.oldScroll = this.scrollY;

//     let getWideMenu = document.getElementById('big');
//     console.log(getWideMenu)
//     console.log(getWideMenu.scrollY);
// }
