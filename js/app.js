baguetteBox.run(".gallery", {
   animation: "slideIn",
   buttons: true
});

document.querySelector("#search").addEventListener("keyup", userSearch);

function userSearch() {
   const listCnt = document.querySelectorAll("a[data-caption]");
   let captionsList = [];

   for (let i = 0; i < listCnt.length; i++) {
      let captions = listCnt[i].getAttribute("data-caption");
      captionsList.push(captions.toLowerCase());
      // create variable set it to user search input toLowerCase()
      let searchVar = document.querySelector("#search");
      searchVar = searchVar.value.toLowerCase();
      // create conditional statement (if) to search indexOf
      if (captionsList[i].indexOf(searchVar) > -1) {
         // set style of lstCnt to display block
         listCnt[i].style.display = "block";
      } else {
         // set style of lstCnt to display none
         listCnt[i].style.display = "none";
      }
   }
}
