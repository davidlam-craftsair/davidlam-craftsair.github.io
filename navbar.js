fetch('navbar.html')
  .then(res => res.text())
  .then(text => {
    let oldElement = document.querySelector("script#replace_with_navbar");
    let newElemenet = document.createElement("div");
    newElemenet.innerHTML = text;
    oldElement.parentNode.replaceChild(newElemenet, oldElement);
  })
