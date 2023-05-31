let personaggiDisney = ["PippO" , "PLUto" , "caRMinE" , "MinnIE" , "TopoliNO" , "TopolaCCIO" , "TopaSTRO" , "AstOLFO" , "BaraBBA" , "JEShuA"]

const newArray = personaggiDisney.map(element => {
    return element.toLowerCase().charAt(4) + element.charAt(0).toUpperCase();
  });