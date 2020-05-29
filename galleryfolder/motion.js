var photoContainer = $(".photo-container")
var image = $(".img-fluid")
var mark = $(`<div class ="delete text-right position-absolute"><i class="fas fa-backspace"></i></div>`)

image.on("click", function(event){
  $(this).parent().addClass("enlargePhoto")
  $(this).parent().append(mark)
  $(this).parent().siblings().hide(2000)
})

mark.on("click", function(event){
  // $(this).parent().addClass("transitionNg")
  $(this).parent().removeClass("enlargePhoto")
  $(this).parent().remove(mark)
  $(this).parent().siblings().show(2000)
  // $(this).parent().removeClass("transitionNg")
})

var upPointer = $(".pointer1")
var downPointer = $(".pointer2")
var firstGalleryPage = $(".gallery").first()
var secondGalleryPage = $(".gallery:nth-child(2)")

upPointer.on("click",function(event){
  firstGalleryPage.addClass("slide-up")
  secondGalleryPage.addClass("slide-up")
})

downPointer.on("click",function(event){
  firstGalleryPage.removeClass("slide-up")
  secondGalleryPage.removeClass("slide-up")
})
