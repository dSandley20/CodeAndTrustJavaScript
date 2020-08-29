function randomSelector(input) {
  const sentenceArr = input.split("{");
  let fullSentence = "";
  sentenceArr.forEach((element) => {
    fullSentence += textReturn(element.toString());
  });
  console.log(fullSentence);
}

function textReturn(text) {
  if (text.includes("|")) {
    return optionReturn(text);
  } else {
    return text;
  }
}

function optionReturn(selectors) {
  var options = selectors.slice(0, selectors.search("}"));
  var optionsArr = options.split("|");
  return selectors.replace(
    selectors.slice(0, selectors.search("}") + 1),
    optionsArr[Math.floor(Math.random() * optionsArr.length)]
  );
}

randomSelector(
  "Dave Baker is an Elite {crew member|production crew member|video crew member}. This {designation|status|label|classification} by Assignment Desk is {an extra|an additional|a supplementary|yet another|one extra|one additional} {sign|mark|signal|indication|symbol|endorsement} of {quality|high quality|top quality|good quality|excellence|top notch quality|outstanding quality|superior quality|high-quality|value|superiority}. Elite {crews|crew members|production crew members|video crew members} {have been|are actually|are already|are entirely|have been completely} {vetted|checked} by Assignment Desk as {crew members|production crew members|video crew members|film staff} {that have been|who have been|which have been} on shoots {many times|often|frequently|repeatedly|on numerous occasions|again and again|many times before} with {quality|high quality|top notch|excellent} equipment. {You can trust that|You can rely on|You can be confident|You can depend on|Have confidence} an Elite {crew|staff member} {will|will certainly|is going to|would certainly|will definitely} {bring|deliver|provide} {an extra|an additional} {level of|amount of|degree of} service on your shoot."
);
