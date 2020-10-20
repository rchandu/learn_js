function laodJS(jsURL) {
  const scriptTag = document.createElement("script");
  scriptTag.type = "text/javascript";
  scriptTag.src = jsURL;
  document.getElementsByTagName("head")[0].appendChild(scriptTag);
}

function laodCSS(cssURL) {
  const linkTag = document.createElement("link");
  linkTag.rel = "stylesheet";
  linkTag.href = cssURL;
  document.getElementsByTagName("head")[0].appendChild(linkTag);
}

function loadCommon() {
  // Load Bootstrap CSS
  laodCSS("https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css");
  // Load jquery
  laodJS("https://code.jquery.com/jquery-3.5.1.slim.min.js");
  // Load popper
  laodJS("https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js");
  // Load bootstrap
  laodJS("https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js");
}

loadCommon();
