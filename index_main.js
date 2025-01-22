

function popupOpen1(element) {
    // 클릭된 .box01의 span 텍스트 가져오기
    const spanText = element.querySelector("span").textContent;
    // 팝업의 p 태그에 텍스트 설정
    document.getElementById("popupText").textContent = spanText;
    $("#mainImage1").attr("src", "https://design940.github.io/Project/images/han1.png");
    $('#gallery1').show();
  }
  
  function popupClose1() {
    $('#gallery1').hide();
  }
  
  function popupOpen2(element) {
    // 클릭된 .box02의 span 텍스트 가져오기
    const spanText = element.querySelector("span").textContent;
    // 팝업의 p 태그에 텍스트 설정
    document.getElementById("popupText").textContent = spanText;
    $("#mainImage2").attr("src", "https://design940.github.io/Project/nft_1.png");
    $('#gallery2').show();
  }
  
  function popupClose2() {
    $('#gallery2').hide();
  }
  
  function popupOpen3(element) {
    // 클릭된 .box03의 span 텍스트 가져오기
    const spanText = element.querySelector("span").textContent;
    // 팝업의 p 태그에 텍스트 설정
    document.getElementById("popupText").textContent = spanText;
    $("#mainImage3").attr("src", "https://design940.github.io/Project/read_1.png");

    $('#gallery3').show();
  }
  
  function popupClose3() {
    $('#gallery3').hide();
  }
  
  function popupOpen4(element) {
    // 클릭된 .box04의 span 텍스트 가져오기
    const spanText = element.querySelector("span").textContent;
    // 팝업의 p 태그에 텍스트 설정
    document.getElementById("popupText").textContent = spanText;
    $("#mainImage4").attr("src", "https://design940.github.io/Project/t_1.png");
    $('#gallery4').show();
  }
  
  function popupClose4() {
    $('#gallery4').hide();
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
          document.getElementById("mainImage1").setAttribute("src", imgSrc);
      });
    });
    
    document.querySelectorAll(".mySwiper .swiper-slide").forEach((slide) => {
      slide.addEventListener("click", (e) => {
          // 클릭한 슬라이드의 이미지 URL 가져오기
          const imgSrc = e.target.getAttribute("src");
    
          // mySwiper2의 이미지 변경
          document.getElementById("mainImage2").setAttribute("src", imgSrc);
      });
    });
    
    document.querySelectorAll(".mySwiper .swiper-slide").forEach((slide) => {
      slide.addEventListener("click", (e) => {
          // 클릭한 슬라이드의 이미지 URL 가져오기
          const imgSrc = e.target.getAttribute("src");
    
          // mySwiper2의 이미지 변경
          document.getElementById("mainImage3").setAttribute("src", imgSrc);
      });
    });
    
  
    document.querySelectorAll(".mySwiper .swiper-slide").forEach((slide) => {
      slide.addEventListener("click", (e) => {
          // 클릭한 슬라이드의 이미지 URL 가져오기
          const imgSrc = e.target.getAttribute("src");
    
          // mySwiper2의 이미지 변경
          document.getElementById("mainImage4").setAttribute("src", imgSrc);
      });
    });