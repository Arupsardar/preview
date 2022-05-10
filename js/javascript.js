let bs_modal = $("#modal");
let image = document.getElementById("image");
let cropper, reader, file;

$("body").on("change", ".image", function (e) {
  let files = e.target.files;
  let done = function (url) {
    image.src = url;
    bs_modal.modal("show");
  };

  if (files && files.length > 0) {
    file = files[0];

    if (URL) {
      done(URL.createObjectURL(file));
    } else if (FileReader) {
      reader = new FileReader();
      reader.onload = function (e) {
        done(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
});

bs_modal
  .on("shown.bs.modal", function () {
    cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 3,
      preview: ".preview",
    });
  })
  .on("hidden.bs.modal", function () {
    cropper.destroy();
    cropper = null;
  });

$("#crop").click(function () {
  canvas = cropper.getCroppedCanvas({
    width: 160,
    height: 160,
  });

  canvas.toBlob(function (blob) {
    const formData = new FormData();
    formData.append('croppedImage', blob);
    console.log(formData.append("croppedImage",blob));
    $.ajax({
      url: "upload.php",
      type: "POST",
      data: formData,
      contentType: false,
      processData: false,
      success: function (data) {
        bs_modal.modal("hide");
        alert("success upload image");
      },
    });
  });
});

// import Cropper from '../cropperjs/cropper.js'

// $(document).ready(function(){
   
//     $('#image').on('change',function(){
//         const image =document.getElementById('image')
//         console.log('function call');
//         const cropper=new Cropper(image,{
            
//         } )
//     })
// })