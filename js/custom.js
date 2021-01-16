AOS.init();

// NAVBAR
let elements = document.getElementsByClassName(' oneburner-dropdown');

for(var i = 0; i<elements.length; i++){
    let element = elements[i];
    element.addEventListener('mouseenter', function(){
        document.getElementById('oneburner-overlay').style.display = 'block';
    })

    element.addEventListener('mouseleave', function(){
        document.getElementById('oneburner-overlay').style.display = 'none';
    })
}


// FOOTER
var dropdown = document.getElementsByClassName("footer-dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle("active");
        // if (dropdownContent.style.display === "block") {
        //     dropdownContent.style.display = "none";
        // } else {
        //     dropdownContent.style.display = "block";
        // }
    });
}

function myFunction(e) {
    // alert('here')
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
