console.clear();

var loginBtn = document.getElementById('login');
var signupBtn = document.getElementById('signup');
var forgetBtn = document.getElementById('forget');

var loginSlide = document.getElementsByClassName('login')[0];
var signUpSlide = document.getElementsByClassName('signup')[0];
var forgetSlide = document.getElementsByClassName('forget')[0];

loginBtn.addEventListener('click', function (e) {
    var parent = e.target.parentNode.parentNode;

    Array.from(e.target.parentNode.parentNode.classList).find(function (element) {

        parent.classList.remove('slide-up');
        signUpSlide.classList.add('slide-up');
        forgetSlide.classList.add('slide-up');

    });


});

forgetBtn.addEventListener('click', function (e) {
    var parent = e.target.parentNode.parentNode;

    Array.from(e.target.parentNode.parentNode.classList).find(function (element) {

        parent.classList.remove('slide-up');
        signUpSlide.classList.add('slide-up');

    });
});

signupBtn.addEventListener('click', function (e) {

    var parent = e.target.parentNode;

    Array.from(e.target.parentNode.classList).find(function (element) {

        parent.classList.remove('slide-up');
        loginSlide.classList.add('slide-up');
        forgetSlide.classList.add('slide-up');
    });
});