//  Define Major Elements

const wrapper = document.querySelector(".wrapper");
const inputPart = document.querySelector(".input-part");
const infoTxt = inputPart.querySelector(".info-txt");
const inputField = inputPart.querySelector("input");
const weatherPart = wrapper.querySelector(".weather-part");
const arrowBack = wrapper.querySelector("header i");

let api;

let globalScopeData;

// define inputText -> make these required  text with the required functionality
const hsCodeTag = document.querySelector(".hs-code"),
  startDateTag = document.querySelector(".start-date"),
  endDateTag = inputPart.querySelector(".end-date");

// define button
const searchBtn = document.querySelector("button");

// add event Listener
searchBtn.addEventListener("click", () => {
  // check validity and fires the event only when all valid
  const allValid = [hsCodeTag, startDateTag, endDateTag].every((input) =>
    input.reportValidity()
  );
  if (allValid) {
    console.log("all the elements are  valid");

    // to declare the variable as global : put var
    var globalObject = getGlobalObject(
      hsCodeTag.value,
      startDateTag.value,
      endDateTag.value
    ); //
    console.log(globalObject);

    // toggle on
    document.querySelector("section.overview-area").classList.toggle("show");
    document
      .querySelector("section.yearly-overview-chart")
      .classList.toggle("show");

    // 혼의수/선천수/후천수/종합수
    createSummarySection(
      globalObject,
      document.querySelector("section.overview-area")
    );

    // 연도운 차트
    loadYearlyChart(
      globalObject,
      document.querySelector("section.yearly-overview-chart")
    );
  } else {
    console.log("something is not valid");
    return;
  }
});

function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
  const responsePayload = parseJwt(response.credential);
  console.log(parseJwt);

  console.log("ID: " + responsePayload.sub);
  console.log("Full Name: " + responsePayload.name);
  console.log("Given Name: " + responsePayload.given_name);
  console.log("Family Name: " + responsePayload.family_name);
  console.log("Image URL: " + responsePayload.picture);
  console.log("Email: " + responsePayload.email);
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "414139409173-j37fthobs44sq4vaofurc47u9pogdnh3.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  // google.accounts.id.renderButton(
  //   document.getElementById("buttonDiv"),
  //   { theme: "outline", size: "large" } // customization attributes
  // );
  google.accounts.id.prompt(); // also display the One Tap dialog
};

// function to parse jwtToken
function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
