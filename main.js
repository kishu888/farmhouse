// LOAD HEADER + FOOTER FIRST, THEN APPLY LANGUAGE

Promise.all([
  fetch("header.html").then(res => res.text()),
  fetch("footer.html").then(res => res.text())
]).then(([headerData, footerData]) => {

  document.getElementById("header").innerHTML = headerData;
  document.getElementById("footer").innerHTML = footerData;

  // APPLY LANGUAGE AFTER EVERYTHING LOADS
  if (typeof applyLanguage === "function") {
    applyLanguage();
  }
});