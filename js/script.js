// -------------------Index-----------------




const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector('.aspect-ratio-169')
const dotItem = document.querySelectorAll(".dot")
let imgNuber= imgPosition.length 
let index = 0

imgPosition.forEach(function(image,index){
image.style.left = index*100 + "%"

dotItem[index].addEventListener("click",function(){
    slider(index)
    })
})

function imgSlide(){
    index++;

    console.log(index)
    if(index>=imgNuber){
        index = 0
    }
    slider(index)
}
function slider(index){
    imgContainer.style.left = "-"+index*100 + "%"
    const dotActive = document.querySelector('.active')
    dotActive.classList.remove("active")
    dotItem[index].classList.add("active")
}
setInterval(imgSlide,5000)

// ----------------PRODUCT--------------------------
//----------------Chuyen anh khi chon anh nho-----------------
const bigImg = document.querySelector(".product-content-left-big-img img")
const smalImg = document.querySelectorAll(".product-content-left-small-img img") //Nodelist
smalImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})
// ----------------------ZOOMHINHANH------------------------
//Sau khi các phân tử html đc tạo
document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector(".zoomable");

    image.addEventListener("mousemove", function(e) {
        const { left, top, width, height } = this.getBoundingClientRect(); //Lay ttin ve vi tri kích thuoc cua ha
        const x = (e.clientX - left) / width * 100;
        const y = (e.clientY - top) / height * 100;

        this.style.transformOrigin = `${x}% ${y}%`;
    });

    image.addEventListener("mouseenter", function() {
        this.classList.add("zoomed");
    });

    image.addEventListener("mouseleave", function() {
        this.classList.remove("zoomed");
    });
});



// ------------------------DARK MODE--------------
const body = document.body;
const switch_mode = document.querySelector('#switch-mode i');
let mode = localStorage.getItem('darkmode');
console.log(mode);
if (mode =='true'){
    body.classList.add('dark');
    switch_mode.classList.add('fa-moon');
    switch_mode.classList.add('fa-sun');
}
switch_mode.addEventListener('click', ()=>{
    // alert('click');
    //Kiem tra dark co trong body chua neu chua thi them vao neu co thif bo di
    let mode = body.classList.toggle('dark');
    switch_mode.classList.toggle('fa-moon');
    switch_mode.classList.toggle('fa-sun');

    // Luu vao localStorage
    console.log(mode);
    localStorage.setItem('darkmode',mode);
})




//--------------Hieu ung cuon trang--------------------
window.addEventListener('scroll', function () {
    // Lấy chiều cao của header
    var header = document.querySelector('header');
    var headerHeight = header.offsetHeight;  //lay chieu cao header

    // Lấy vị trí cuộn của trang
    var scrollPosition = window.scrollY || window.pageYOffset;

    // Kiểm tra vị trí cuộn, nếu lớn hơn chiều cao của header, thêm class 'scrolled'
    if (scrollPosition > headerHeight) {
        header.classList.add('scrolled');
    } else {
        // Nếu vị trí cuộn nhỏ hơn chiều cao của header, loại bỏ class 'scrolled'
        header.classList.remove('scrolled');
    }
});