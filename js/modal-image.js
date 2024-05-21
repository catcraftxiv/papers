var modal = document.getElementById("myModal");

document.querySelectorAll('.img-modal').forEach(function(image) {
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    image.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
      modal.style.display = "none";
    }
});