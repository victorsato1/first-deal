let menuBox = document.getElementById('menuBox')
let menuIcon = document.getElementById('menuIcon')

function openIcon() {
    menuBox.classList.toggle("open-menu")

    if (menuBox.classList.contains("open-menu")) {
        menuIcon.src ="img/close.png"
    } else {
        menuIcon.src ="img/menu.png"
        
    }
}


function sendMail(){
    var params = {
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        number:document.getElementById("number").value ,
        message:document.getElementById("message").value 
    }
    const serviceId = "service_r9frydj"
    const templateId = "template_5uv9wxd"
    
    emailjs.send(serviceId,templateId,params)
    .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("number").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            swal("Successfully Sent!", "", "success");
        })
    
        .catch((err) => console.log(err));
}
