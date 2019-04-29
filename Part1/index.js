console.log("hello");

let arr = [];

function play(clickedId) {
  const playerSpan = document.getElementById("player");
  const clickedElement = document.getElementById(clickedId);
  if (clickedElement.innerText) {
    return;
  }
  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    arr[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    arr[clickedID] = "O";
  }
  console.log(arr);

  const top1 = arr[0];
  const top2 = arr[1];
  const top3 = arr[2];
  const mid1 = arr[3];
  const mid2 = arr[4];
  const mid3 = arr[5];
  const low1 = arr[6];
  const low2 = arr[7];
  const low3 = arr[8];

  if (top1 !== undefined && top1 === top2 && top1 === top3) {
    alert(`${top1} wins!`);
    return;
  }

  if (mid1 !== undefined && mid1 === mid2 && mid1 === mid3) {
    alert(`${mid1} wins!`);
    return;
  }

  if (low1 !== undefined && low1 === low2 && low2 === low3) {
    alert(`${low1} wins!`);
    return;
  }

  if (top1 !== undefined && top1 === mid1 && mid1 === low1) {
    alert(`${top1} wins!`);
    return;
  }

  if (top2 !== undefined && top2 === mid2 && mid2 === low2) {
    alert(`${top2} wins!`);
    return;
  }

  if (top3 !== undefined && top3 === mid3 && mid3 === low3) {
    alert(`${top3} wins!`);
    return;
  }

  if (top1 !== undefined && top1 === mid2 && mid2 === low3) {
    alert(`${top1} wins!`);
    return;
  }

  if (top3 !== undefined && top3 === mid2 && mid2 === low1) {
    alert(`${top3} wins!`);
    return;
  }

  let full = true;

  for (let i = 0; i <= 8; i++) {
    if (arr[i] === undefined) {
      full = false;
    }
  }
  if (full === true) {
    alert("Cat's game. It's a tie!");
  }
}

function reset() {
  const resetArr = document.getElementsByTagName("td");
  for (let i = 0; i < resetArr.length; i++) {
    resetArr[i].innerText = "";
  }
  return;
}
