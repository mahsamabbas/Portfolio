var mobileMenuIcon = document.querySelector('.fa-bars-staggered');
var closeMenuIcon = document.querySelector('.fa-xmark');
var mobileNav = document.querySelector('.mobile-nav');
var menuItems = document.querySelectorAll('.menu-item');

function closeMobileNav() {
  mobileNav.classList.add('closed-menu');
}

mobileMenuIcon.addEventListener('click', function() {
  mobileNav.classList.remove('closed-menu');
});

closeMenuIcon.addEventListener('click', closeMobileNav);

menuItems.forEach(function(menuItem) {
  menuItem.addEventListener('click', closeMobileNav);
});


var images = document.querySelectorAll('.scrollable-image');

images.forEach(function(image) {
  image.addEventListener('mouseenter', function() {
    var imageHeight = image.clientHeight;
    image.style.transform = `translateY(-${imageHeight - 360}px)`;
  });

  image.addEventListener('mouseleave', function() {
    image.style.transform = 'translateY(0%)';
  });
});
