"use strict";
const getInputs = document.querySelectorAll(".date-input");
const getChangeButton = document.querySelector(".change-button");
const getChoiceButton = document.querySelector("#choice-button");
const getLoadDateInput = document.querySelectorAll(".load-date-input");
const getLoadDateHeight = document.getElementById("load-date-height");
const getLoadDateWidth = document.querySelector("#load-date-width");
const getChangeDateHeight = document.querySelector("#change-date-height");
const getChangeDateWidth = document.querySelector("#change-date-width");
const getImageBox = document.querySelector("#image-box");
// ***************************************************************************
window.addEventListener(
  "load",
  function () {
    getChangeButton.disabled = true;
  },
  false
);
// ***************************************************************************
// バリデーション
getInputs.forEach((input) => {
  input.addEventListener(
    "blur",
    function (e) {
      let isOk = true;
      getInputs.forEach(({ value }) => {
        if (!value.match(/^[0-9]+$/)) {
          isOk = false;
        }
      });
      getChangeButton.disabled = !isOk;
    },
    false
  );
}, false);
// ***************************************************************************
// 読み込んだ画像のサイズを表示するinput入力不可
getLoadDateInput.forEach(function (target) {
  target.disabled = true;
});
// ***************************************************************************
// 読み込んだファイルをHTMLに反映
getChoiceButton.addEventListener("change", function (e) {
  // 1枚だけ表示する
  let file = e.target.files[0];
  // ファイルリーダー作成
  let fileReader = new FileReader();
  fileReader.onload = function () {
    // Data URIを取得
    let dataUri = this.result;
    // img要素に表示
    let img = document.getElementById("image");
    img.src = dataUri;
    img.addEventListener("load", function () {
      console.log(img.clientWidth);
      console.log(img.clientHeight);
      getLoadDateHeight.value = img.clientHeight;
      getLoadDateWidth.value = img.clientWidth;
    });
  };
  // ファイルをData URIとして読み込む
  fileReader.readAsDataURL(file);
});
// *****************************************************************************
// 画像リサイズ、作成処理
getChangeButton.addEventListener("click", function () {
  let height = getChangeDateHeight.value;
  let width = getChangeDateWidth.value;
  let getimg = document.getElementById("image");
  let create = document.createElement("img");
  let canvas = document.getElementById("create-image");
  create.src = image.getAttribute("src");
  create.style.height = height + "px";
  create.style.width = width + "px";
  document.getElementById("create-image").appendChild(create);
});

// 画像リサイズ、作成処理
// getChangeButton.addEventListener("click", function () {
//   let canvas = document.createElement("canvas");
//   let c1 = canvas.getContext("2d");
//   let height = getChangeDateHeight.value;
//   let width = getChangeDateWidth.value;
//   //
//   let getimg = document.getElementById("image");
//   let create = new Image();
//   create.src = image.getAttribute("src");
//   create.addEventListener("load", function () {
//     // create.style.height = height + "px";
//     // create.style.width = width + "px";
//     c1.drawImage(create, 0, 0, 100, 100);
//   });
//   document.getElementById("create-image").appendChild(create);
// });
