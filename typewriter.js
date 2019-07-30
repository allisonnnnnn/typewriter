// const prinOut = function(sentence) {
//   return function() {
//     for (const char of sentence) {
//       console.log(char);
//     }
//   }
// };

const sentence = "there are from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(function() {
    // for (const char of sentence) {

    process.stdout.write(sentence[i]);

    // }
  }, i * 50);
}

setTimeout(() => {
  console.log("\n");
}, sentence.length * 50);
