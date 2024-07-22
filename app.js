let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "portfolio", "focus", "apples"];
let domain = [".net", ".us", ".es", ".io", ".com"];
let usedNames = []; // Auxiliary array to store the names that have already been used.

pronoun.forEach((pron) => {
  adj.forEach((adjetive) => {
    noun.forEach((nouns) => {
      let baseName = `${pron}${adjetive}${nouns}`;
      let printed = false; // Signal to know if the name was printed

      domain.forEach((dom) => {
        let simpleExtension = dom.slice(1);
        let lastNLetters = baseName.slice(-1 * (dom.length - 1));

        if (lastNLetters == simpleExtension) {
          console.log(
            baseName.slice(0, baseName.length - lastNLetters.length) + dom
          );
          usedNames.push(baseName); // Add the used name to the array
          printed = true; // The name was printed.
        }
      });

      // If it was not printed, add the .net and .com domains
      if (!printed) {
        console.log(baseName + ".net");
        console.log(baseName + ".com");
      }
    });
  });
});