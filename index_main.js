





function popupOpen(element) {
    // 클릭된 .box01의 span 텍스트 가져오기
    const spanText = element.querySelector("span").textContent;
    // 팝업의 p 태그에 텍스트 설정
    document.getElementById("popupText").textContent = spanText;
    $('#gallery').show();
  }
  
  function popupClose() {
    $('#gallery').hide();
  }
  
  
  
  
  
  
  
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: 3.5,
    freeMode: true,
    watchSlidesProgress: true,
  });
  
  document.querySelectorAll(".mySwiper .swiper-slide").forEach((slide) => {
    slide.addEventListener("click", (e) => {
        // 클릭한 슬라이드의 이미지 URL 가져오기
        const imgSrc = e.target.getAttribute("src");
  
        // mySwiper2의 이미지 변경
        document.getElementById("mainImage").setAttribute("src", imgSrc);
    });
  });
  
  
  
  
  