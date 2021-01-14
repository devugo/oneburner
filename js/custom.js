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

