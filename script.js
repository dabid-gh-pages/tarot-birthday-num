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

// //login function
// /*
//  * Create form to request access token from Google's OAuth 2.0 server.
//  */
// function oauthSignIn() {
//   // Google's OAuth 2.0 endpoint for requesting an access token
//   var oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

//   // Create <form> element to submit parameters to OAuth 2.0 endpoint.
//   var form = document.createElement("form");
//   form.setAttribute("method", "GET"); // Send as a GET request.
//   form.setAttribute("action", oauth2Endpoint);

//   // Parameters to pass to OAuth 2.0 endpoint.
//   var params = {
//     client_id:
//       "414139409173-j37fthobs44sq4vaofurc47u9pogdnh3.apps.googleusercontent.com",
//     redirect_uri: "https://dabid-gh-pages.github.io",
//     response_type: "token",
//     scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
//     include_granted_scopes: "true",
//     state: "pass-through value",
//   };

//   // Add form parameters as hidden input values.
//   for (var p in params) {
//     var input = document.createElement("input");
//     input.setAttribute("type", "hidden");
//     input.setAttribute("name", p);
//     input.setAttribute("value", params[p]);
//     form.appendChild(input);
//   }

//   // Add form to page and submit it to open the OAuth 2.0 endpoint.
//   document.body.appendChild(form);
//   form.submit();
// }

function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
  const responsePayload = decodeJwtResponse(response.credential);

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
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" } // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
};
