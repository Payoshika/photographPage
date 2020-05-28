var photoContainer = $(".photo-container")
var image = $(".img-fluid")
var mark = $(`<div class ="delete text-right position-absolute">×</div>`)

image.on("click", function(event){
  var photoId = $(this).data("photo")
  $(`.photo-container:nth-child(${photoId})`).addClass("enlargePhoto")
  $(`.photo-container:nth-child(${photoId})`).append(mark)
  $(`.photo-container:nth-child(${photoId})`).siblings().hide(2000)
})

mark.on("click", function(event){
  var photoId = $(this).prev().data("photo")
  $(`.photo-container:nth-child(${photoId})`).removeClass("enlargePhoto")
  $(`.photo-container:nth-child(${photoId})`).remove(mark)
  $(`.photo-container:nth-child(${photoId})`).siblings().show(2000)
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
