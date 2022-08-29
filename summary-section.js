// summary of 혼의수,선천수,후천수
function createSummarySection(globalObject, sectionElement) {
  const txt1 = `<p> 당신의 혼의수는 <strong>${globalObject.specialNums.loneNum}</strong> 입니다.</p>`;
  const txt2 = `<p> 당신의 선천수는 <strong>${globalObject.specialNums.bornNum}</strong> 입니다.</p>`;
  const txt3 = `<p> 당신의 후천수는 <strong>${globalObject.specialNums.afterNum}</strong> 입니다.</p>`;
  const txt4 = `<p> 당신의 종합수는 <strong>${globalObject.specialNums.overallNum}</strong> 입니다.</p>`;

  const summaryText = [txt1, txt2, txt3, txt4];

  console.log(sectionElement);
  // pElements = [...sectionElement.querySelectorAll("p")];

  // for (i = 0; i < pElements.length; i++) {
  //   pElements[i].textContent = summaryText[i];
  // }

  sectionElement.innerHTML = summaryText.join("");
}
