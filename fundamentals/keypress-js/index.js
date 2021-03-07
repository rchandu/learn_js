let listener = new window.keypress.Listener();

const colors = ["red", "#e8e8e8", "#e0e0e0", "#d8d8d8", "yellow", "pink", "green", "blue", "cyan"];

function initiateBaseShortcuts(targetEl) {
  listener.simple_combo("shift r", function () {
    console.log("You pressed shift and s");
    const backgroundColor = targetEl.style.backgroundColor;
    if (backgroundColor === "red") {
      targetEl.style.backgroundColor = "transparent";
    } else {
      targetEl.style.backgroundColor = "red";
    }
  });

  // If we want to register a counting combo
  listener.counting_combo("ctrl j", function (e, count) {
    console.log("You've pressed this " + count + " times.");
    const counterEl = document.getElementById("cmd_counter");
    counterEl.innerHTML = `${count}`;
    counterEl.style.backgroundColor = colors[count % 10];
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const targetEl = document.getElementById("root");
  initiateBaseShortcuts(targetEl);
  console.log(listener.get_registered_combos());
});
