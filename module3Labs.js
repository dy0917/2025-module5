// console.log(camelCase("margin-left")); // marginLeft
// console.log(camelCase("background-image")); // backgroundImage

// function camelCase(str) {
//   const listWords = str.split("-");
//   const [first, ...rest] = listWords;
//   const result =
//     first +
//     rest
//       .map((element) => {
//         return element.charAt(0) + element.substring(1);
//       })
//       .join();
// }

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

//top salaries
console.log(
  Object.entries(salaries).sort((a, b) => {
    return a[1] > b[1] ? 1 : -1;
  })
);

const sortResult = Object.entries(salaries)
  .sort((a, b) => {
    return a[1] > b[1] ? 1 : -1;
  })
  .reverse();
console.log(sortResult[0][0]);
