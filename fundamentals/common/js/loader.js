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
  laodCSS("/common/css/styles.css");
}

const items = [
  { title: "Hoisting", url: "/hoisting" },
  { title: "Bind, Call and apply", url: "/bind" },
];

function addItem(listContainerEl, currItem = {}) {
  const pageLink = document.createElement("a");
  pageLink.classList.add("list-group-item");
  pageLink.classList.add("list-group-item-action");
  pageLink.href = currItem.url;
  pageLink.textContent = currItem.title;
  listContainerEl.appendChild(pageLink);
}

function loadSidebar() {
  const currBodyHTML = document.body.innerHTML;
  document.body.innerHTML = "";

  const sidebar = document.createElement("div");
  sidebar.id = "tutorial-toc";
  const sidebarList = document.createElement("div");
  sidebarList.id = "list-tutorials";
  sidebarList.className = "list-group list-group-flush";
  document.body.appendChild(sidebar);
  sidebar.appendChild(sidebarList);
  items.forEach((x, i) => addItem(sidebarList, x));

  const contentEl = document.createElement("div");
  contentEl.innerHTML = currBodyHTML;
  contentEl.id = "tutorial-content";
  document.body.className = "tutorial-container";
  document.body.appendChild(contentEl);
}

loadCommon();
document.addEventListener("DOMContentLoaded", function () {
  loadSidebar();
});
