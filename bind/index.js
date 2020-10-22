const learnItemList = [
  {
    title: '"var" accessed before definition',
    description: `Variable num definition is hoisted but, not the assignment part. This leads to num not erroring out since it's defined but, prints undefined since assignment of value still is done at the point as said in code.`,
    fnName: "variant1",
    targetFn: variant1,
  },
  {
    title: '"var" initialized without definition before execution',
    description: `Num is not hoisted since this is only initialization but not definition. This will not even print since you're trying to access a variable that's not defined. This will spit out error`,
    fnName: "variant2",
    targetFn: variant2,
  },
  {
    title: '"const" accessed before definition',
    description: `Num is not hoisted here since it's a "const". "let" & "const" are hoisted only in terms of a record but you can’t access the variable before the engine evaluates its value at the place it was declared in the source code. (Temporal Dead Zone)`,
    fnName: "variant3",
    targetFn: variant3,
  },
  {
    title: '"let" accessed before definition',
    description: `Variables defined with "let" are not available before they're defined`,
    fnName: "variant3",
    targetFn: variant3,
  },
  {
    title: 'Difference between functions via "function" and "const" keywords',
    description: `Functions by "function" are hoisted up allowing them to be accessible even above dead zone while functions created via "const" are unavailable until code reaches there`,
    fnName: "variant4",
    targetFn: variant4,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  printMessage("MESSAGE-1");
  function printMessage(n) {
    const targetEl = document.getElementById("target_1");
    const currText = targetEl.textContent;
    targetEl.textContent = `${currText} -- [${n}]`;
  }
  printMessage("MESSAGE-2");

  function addListItem(currItem) {
    const listContainerEl = document.getElementById("list-variants");
    const listItemEl = document.createElement("li");
    listItemEl.classList.add("list-group-item");
    listItemEl.classList.add("list-group-item-action");
    listItemEl.addEventListener("click", currItem.targetFn);

    const headingEl = document.createElement("h5");
    headingEl.textContent = currItem.title;
    listItemEl.appendChild(headingEl);

    const descEl = document.createElement("p");
    descEl.classList.add("mb-1");
    descEl.textContent = currItem.description;
    listItemEl.appendChild(descEl);

    const noteEl = document.createElement("small");
    noteEl.textContent = `function ${currItem.fnName}()`;
    listItemEl.appendChild(noteEl);

    listContainerEl.appendChild(listItemEl);
  }
  learnItemList.forEach((x, i) => addListItem(x));
});

function variant1() {
  console.log(num);
  var num = 50;
}

function variant2() {
  console.log(num);
  num = 6;
}

function variant3() {
  console.log(num);
  const num = 6;
}

function variant4() {
  console.log('Test function by "Function" keyword');
  printHello();
  console.log('Test function by "const" keyword');
  printHello2();
  function printHello() {
    console.log("Hello world");
  }
  const printHello2 = () => console.log("Hello world");
}
