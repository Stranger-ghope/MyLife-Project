// Top sticky nav
window.addEventListener("scroll", function (){
    var scrollWhite = document.querySelector("section");
    scrollWhite.classList.toggle("sticky", window.scrollY > 0);
})

// 

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener ("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
}))

// =============================== Modal LoGIN Element ================================

// ############# For Login Modal #######################33 //

var modal = document.getElementById('simpleModal');
// Get open modal
var modalBtn = document.getElementById('modalBtn');

// Get close Button 
var closeBtn = document.getElementById('closeBtn');
// Get Create Account
var Account = document.getElementById('newAccount');


// click Open modal
modalBtn.addEventListener('click', openModal);
function openModal(){
    modal.style.display = 'block';    

}

// End Open Modal

// close click for Login
closeBtn.addEventListener('click', closeModal);
function closeModal(){
    modal.style.display = 'none';  
    registerModal.style.display = 'none';
}
// Close for Login

// Listen for outside click
window.addEventListener('click', clickOutside);
function clickOutside(e){
    if(e.target ==  modal)
    modal.style.display = 'none';      
}



// New Account button click
Account.addEventListener('click', createAccount);
function createAccount(){
    registerModal.style.display = 'block';
    modal.style.display = 'none';
    console.log(123454);
}
// end




// ############# For Register Modal #######################33 //

var registerModal = document.getElementById('registerModal');
// Get open modal
var regModal = document.getElementById('regModal');
// Get close Button 
var rcloseBtn = document.getElementById('rcloseBtn');
// Back to login
var backLogin = document.getElementById('backLogin');

// Back Login button Click
backLogin.addEventListener('click', backL);
function backL(){
    modal.style.display = 'block';
    registerModal.style.display = 'none';
}
// end

// Close for Register
rcloseBtn.addEventListener('click', closeReg);
function closeReg(){
    modal.style.display = 'none';  
    registerModal.style.display = 'none';
}
// end

// Clicking outside
window.addEventListener('click', clickOut);
function clickOut(e){
    if(e.target ==  registerModal)
    registerModal.style.display = 'none';      
}
// end




// ################## For Contact Modal #################//

var contactModal = document.getElementById('contactModal');
var sendBtn = document.getElementById('sendBtn');
var cclosebtn = document.getElementById('cclosebtn');


// Click for Open Contact
sendBtn.addEventListener('click', openContact);
function openContact() {
    contactModal.style.display = 'block';
}
// End Open Contact
// Click for Close Contact
cclosebtn.addEventListener('click', closeContact);
function closeContact(){
    contactModal.style.display = 'none';
}






// back to top button
 /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $(".backtotop").css('display','block');
        } else {
            $(".backtotop").css('display','none');
        }
    });

    $('.backtotop').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });