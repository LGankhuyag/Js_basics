//salary ni 2 sayaas ih,
// NDSH toldog bh,
// passporttoi eswel identitycardtai bh,
// bas person bh eswel cred bh,
// dept ni 1 sayas baga bwal zeel garna.

function loan(salary, id, pass, insurance, inperson, cred, dept) {
  if (
    salary > 2000000 &&
    (id = "true" || pass == "false") &&
    insurance == "true" &&
    (inperson == "true" || cred == "false") &&
    dept < 1000000
  ) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
loan(2100000, "true", "false", "true", "true", "false", 500000);

// if its raining today, take umberella
// if its snowing today take umberella
// if its too sunny today take umberella

// ogogdson toog 5 bolon 11t huvaagddag eshiig tootsog function bich.
// too 5d huvaagdana gehdee 11t huvaagdahgui