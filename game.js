let a, b, c, d, i, f, j, y;
let arr = [a, b, c, d, i, f, j, y, ""];
$(".btn").click(function () {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = Math.floor(Math.random() * 8) + 1;

    while (true) {
      if (i === 0) {
        break;
      } else {
        for (let j = i - 1; j > -1; j--) {
          if (arr[i] === arr[j]) {
            arr[i] = Math.floor(Math.random() * 8) + 1;
            j = i;
          }
        }
        break;
      }
    }
  }
  document.getElementById("oneNum").innerHTML = arr[0]; //1
  document.getElementById("twuNum").innerHTML = arr[1]; //2
  document.getElementById("threNum").innerHTML = arr[2]; //3
  document.getElementById("forNum").innerHTML = arr[3]; //4
  document.getElementById("fiveNum").innerHTML = arr[4]; //5
  document.getElementById("sexNum").innerHTML = arr[5]; //6
  document.getElementById("sevenNum").innerHTML = arr[6]; //7
  document.getElementById("egtNum").innerHTML = arr[7]; //8
  document.getElementById("emptyNum").innerHTML = arr[8]; //datark
});
