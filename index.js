let currentPage = 0;
displayCurrentPage(currentPage);
const formEle = document.getElementById("formElement");
formEle.addEventListener("submit", function (event) {
  event.preventDefault();
});

let applicantDetails = {
  Name: "",
  dateOfBirth: "",
  emailId: "",
  fatherFirstName: "",
  fatherLastName: "",
  motherFirstName: "",
  motherLastName: "",
  Gender: "",
  nationality: "India",
  streetAddress: "",
  city: "",
  pinNo: "",
  country: "India",
  mobile: "",
  HSCintitutionname: "",
  HSCboard: "",
  scoreInHSC: "",
  SSCinstitutionname: "",
  SSCboard: "",
  scoreInSSC: "",
  currentlyPursuing: "",
  currentEducationalInstutionName: "",
  overallPercentage: "",
  currentBacklogs: "",
  recentPassportSizePhotograph: "",
  HSCMarkSheet: "",
  SSCMarkSheet: "",
  AllSemestersMarkSheetInaSinglePDF: "",
};

function displayCurrentPage(pageNo) {
  let pages = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    if (i !== pageNo) {
      pages[i].style.display = "none";
    } else {
      pages[i].style.display = "block";
    }
  }
}

function validDate(dateOfBirth) {
  dateElement = new Date(dateOfBirth);

  if (dateOfBirthElement.validity.valid === false) {
    return true;
  }
  if (dateElement.getMonth() > 11) {
    return false;
  }
  if (dateElement.getDate() > 32) {
    return false;
  }
  if (dateElement.getFullYear() < new Date().getFullYear() - 18) {
    return false;
  }
  return true;
}

function moveToPage(n) {
  if (n === -1) {
    currentPage = currentPage + n;
    displayCurrentPage(currentPage);
  } else {
    const isValidate = dataValidation(currentPage);
    if (isValidate) {
      currentPage = currentPage + n;
      displayCurrentPage(currentPage);
    }
  }
}

function submitDetails() {
  currentPage = currentPage + 1;
  isValidate = dataValidation(currentPage);
  if (isValidate) {
    let key = `${applicantDetails.firstName} Details`;
    localStorage.setItem(key, applicantDetails);
    displayCurrentPage(currentPage);
  }
}
let NameElement = document.getElementById("Name");
let dateOfBirthElement = document.getElementById("dateOfBirth");
let emailIdElement = document.getElementById("emailId");
let fatherFirstNameElement = document.getElementById("fatherFirstName");
let fatherLastNameElement = document.getElementById("fatherLastName");
let motherFirstNameElement = document.getElementById("motherFirstName");
let motherLastNameElement = document.getElementById("motherLastName");
let maleElement = document.getElementById("male");
let femaleElement = document.getElementById("female");
let nationalityElement = document.getElementById("nationality");
let streetAddressElement = document.getElementById("streetAddress");
let cityElement = document.getElementById("city");
let pinNoElement = document.getElementById("pinNo");
let countryElement = document.getElementById("country");
let mobileElement = document.getElementById("mobile");
let HSCintitutionnameElement = document.getElementById("HSCintitutionname");
let HSCboardElement = document.getElementById("HSCboard");
let scoreInHSCElement = document.getElementById("scoreInHSC");
let SSCinstitutionnameElement = document.getElementById("SSCinstitutionname");
let SSCboardElement = document.getElementById("SSCboard");
let scoreInSSCElement = document.getElementById("scoreInSSC");
let currentlyPursuingElement = document.getElementById("currentlyPursuing");
let currentEducationalInstutionNameElement = document.getElementById(
  "currentEducationalInstutionName"
);
let overallPercentageElement = document.getElementById("overallPercentage");
let currentBacklogsElement = document.getElementById("currentBacklogs");
let recentPassportSizePhotographElement = document.getElementById(
  "recentPassportSizePhotograph"
);
let HSCMarkSheetElement = document.getElementById("HSCMarkSheet");
let SSCMarkSheetElement = document.getElementById("SSCMarkSheet");
let AllSemestersMarkSheetInaSinglePDFElement = document.getElementById(
  "AllSemestersMarkSheetInaSinglePDF"
);

NameElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("firstNameErrMsg").textContent = "Required*";
    NameElement.style.borderColor = "red";
    NameElement.style.borderWidth = "1px";
  } else if (NameElement.validity.valid === false) {
    document.getElementById("firstNameErrMsg").textContent = "Invalid Data";
    NameElement.style.borderColor = "red";
    NameElement.style.borderWidth = "1px";
  } else {
    document.getElementById("firstNameErrMsg").textContent = "";
    NameElement.style.borderColor = "black";
    NameElement.style.borderWidth = "1px";
  }
  applicantDetails.Name = event.target.value;
});
emailIdElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("emailNameErrMsg").textContent = "Required*";
    emailIdElement.style.borderColor = "red";
    emailIdElement.style.borderWidth = "1px";
  } else if (emailIdElement.validity.valid === false) {
    document.getElementById("emailNameErrMsg").textContent = "Invalid Email Id";
    emailIdElement.style.borderColor = "red";
    emailIdElement.style.borderWidth = "1px";
  } else {
    document.getElementById("emailNameErrMsg").textContent = "";
    emailIdElement.style.borderColor = "black";
    emailIdElement.style.borderWidth = "1px";
  }
  applicantDetails.emailId = event.target.value;
});
dateOfBirthElement.addEventListener("blur", function (event) {
  let isValidDate = validDate(event.target.value);
  if (event.target.value === "") {
    document.getElementById("dateNameErrMsg").textContent = "Required*";
    dateOfBirthElement.style.borderColor = "red";
    dateOfBirthElement.style.borderWidth = "1px";
  } else if (isValidDate) {
    document.getElementById("dateNameErrMsg").textContent = "Invalid date";
    dateOfBirthElement.style.borderColor = "red";
    dateOfBirthElement.style.borderWidth = "1px";
  } else {
    document.getElementById("dateNameErrMsg").textContent = "";
    dateOfBirthElement.style.borderColor = "black";
    dateOfBirthElement.style.borderWidth = "1px";
  }
  applicantDetails.dateOfBirth = event.target.value;
});
fatherFirstNameElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("fatherFirstNameErrMsg").textContent = "Required*";
    fatherFirstNameElement.style.borderColor = "red";
    fatherFirstNameElement.style.borderWidth = "1px";
  } else if (fatherFirstNameElement.validity.valid === false) {
    document.getElementById("fatherFirstNameErrMsg").textContent =
      "Invalid Data";
    fatherFirstNameElement.style.borderColor = "red";
    fatherFirstNameElement.style.borderWidth = "1px";
  } else {
    document.getElementById("fatherFirstNameErrMsg").textContent = "";
    fatherFirstNameElement.style.borderColor = "black";
    fatherFirstNameElement.style.borderWidth = "1px";
  }
  applicantDetails.fatherFirstName = event.target.value;
});
fatherLastNameElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("fatherLastNameErrMsg").textContent = "Required*";
    fatherLastNameElement.style.borderColor = "red";
    fatherLastNameElement.style.borderWidth = "1px";
  } else if (fatherLastNameElement.validity.valid === false) {
    document.getElementById("fatherLastNameErrMsg").textContent =
      "Invalid Data";
    fatherLastNameElement.style.borderColor = "red";
    fatherLastNameElement.style.borderWidth = "1px";
  } else {
    document.getElementById("fatherLastNameErrMsg").textContent = "";
    fatherLastNameElement.style.borderColor = "black";
    fatherLastNameElement.style.borderWidth = "1px";
  }
  applicantDetails.fatherLastName = event.target.value;
});
motherFirstNameElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("motherFirstNameErrMsg").textContent = "Required*";
    motherFirstNameElement.style.borderColor = "red";
    motherFirstNameElement.style.borderWidth = "1px";
  } else if (motherFirstNameElement.validity.valid === false) {
    document.getElementById("motherFirstNameErrMsg").textContent =
      "Invalid Data";
    motherFirstNameElement.style.borderColor = "red";
    motherFirstNameElement.style.borderWidth = "1px";
  } else {
    document.getElementById("motherFirstNameErrMsg").textContent = "";
    motherFirstNameElement.style.borderColor = "black";
    motherFirstNameElement.style.borderWidth = "1px";
  }
  applicantDetails.motherFirstName = event.target.value;
});
motherLastNameElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("motherLastNameErrMsg").textContent = "Required*";
    motherLastNameElement.style.borderColor = "red";
    motherLastNameElement.style.borderWidth = "1px";
  } else if (motherLastNameElement.validity.valid === false) {
    document.getElementById("motherLastNameErrMsg").textContent =
      "Invalid Data";
    motherLastNameElement.style.borderColor = "red";
    motherLastNameElement.style.borderWidth = "1px";
  } else {
    document.getElementById("motherLastNameErrMsg").textContent = "";
    motherLastNameElement.style.borderColor = "black";
    motherLastNameElement.style.borderWidth = "1px";
  }
  applicantDetails.motherLastName = event.target.value;
});
maleElement.addEventListener("change", function () {
  applicantDetails.Gender = "Male";
});
femaleElement.addEventListener("change", function () {
  applicantDetails.Gender = "Female";
});
nationalityElement.addEventListener("blur", function (event) {
  applicantDetails.nationality = event.target.value;
});
countryElement.addEventListener("blur", function (event) {
  applicantDetails.country = event.target.value;
});
streetAddressElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("streetAddressErrMsg").textContent = "Required*";
    streetAddressElement.style.borderColor = "red";
    streetAddressElement.style.borderWidth = "1px";
  } else {
    document.getElementById("streetAddressErrMsg").textContent = "";
    streetAddressElement.style.borderColor = "black";
    streetAddressElement.style.borderWidth = "1px";
  }
  applicantDetails.streetAddress = event.target.value;
});
cityElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("cityErrMsg").textContent = "Required*";
    cityElement.style.borderColor = "red";
    cityElement.style.borderWidth = "1px";
  } else if (cityElement.validity.valid === false) {
    document.getElementById("cityErrMsg").textContent = "Invalid Data";
    cityElement.style.borderColor = "red";
    cityElement.style.borderWidth = "1px";
  } else {
    document.getElementById("cityErrMsg").textContent = "";
    cityElement.style.borderColor = "black";
    cityElement.style.borderWidth = "1px";
  }
  applicantDetails.city = event.target.value;
});
pinNoElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("pinNoErrMsg").textContent = "Required*";
    pinNoElement.style.borderColor = "red";
    pinNoElement.style.borderWidth = "1px";
  } else if (
    event.target.value.length !== 6 ||
    mobileElement.validity.valid === false
  ) {
    document.getElementById("pinNoErrMsg").textContent = "Invalid Pin Number";
    pinNoElement.style.borderColor = "red";
    pinNoElement.style.borderWidth = "1px";
  } else {
    document.getElementById("pinNoErrMsg").textContent = "";
    pinNoElement.style.borderColor = "black";
    pinNoElement.style.borderWidth = "1px";
  }
  applicantDetails.pinNo = event.target.value;
});
mobileElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("mobileErrMsg").textContent = "Required*";
    mobileElement.style.borderColor = "red";
    mobileElement.style.borderWidth = "1px";
  } else if (
    event.target.value.length !== 10 ||
    mobileElement.validity.valid === false
  ) {
    document.getElementById("mobileErrMsg").textContent =
      "Invalid Mobile Number";
    mobileElement.style.borderColor = "red";
    mobileElement.style.borderWidth = "1px";
  } else {
    document.getElementById("mobileErrMsg").textContent = "";
    mobileElement.style.borderColor = "black";
    mobileElement.style.borderWidth = "1px";
  }
  applicantDetails.mobile = event.target.value;
});
HSCintitutionnameElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("HSCintitutionnameErrMsg").textContent =
      "Required*";
    HSCintitutionnameElement.style.borderColor = "red";
    HSCintitutionnameElement.style.borderWidth = "1px";
  } else if (HSCintitutionnameElement.validity.valid === false) {
    document.getElementById("HSCintitutionnameErrMsg").textContent =
      "Invalid Data";
    HSCintitutionnameElement.style.borderColor = "red";
    HSCintitutionnameElement.style.borderWidth = "1px";
  } else {
    document.getElementById("HSCintitutionnameErrMsg").textContent = "";
    HSCintitutionnameElement.style.borderColor = "black";
    HSCintitutionnameElement.style.borderWidth = "1px";
  }
  applicantDetails.HSCintitutionname = event.target.value;
});
HSCboardElement.addEventListener("blur", function (event) {
  applicantDetails.HSCboard = event.target.value;
});
scoreInHSCElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("scoreInHSCErrMsg").textContent = "Required*";
    scoreInHSCElement.style.borderColor = "red";
    scoreInHSCElement.style.borderWidth = "1px";
  } else if (
    parseInt(event.target.value) < 1 ||
    parseInt(event.target.value) > 10
  ) {
    document.getElementById("scoreInHSCErrMsg").textContent =
      "CGPA should be between 1 and 10";
    scoreInHSCElement.style.borderColor = "red";
    scoreInHSCElement.style.borderWidth = "1px";
  } else {
    document.getElementById("scoreInHSCErrMsg").textContent = "";
    scoreInHSCElement.style.borderColor = "black";
    scoreInHSCElement.style.borderWidth = "1px";
  }
  applicantDetails.scoreInHSC = event.target.value;
});
SSCinstitutionnameElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("SSCinstitutionnameErrMsg").textContent =
      "Required*";
    SSCinstitutionnameElement.style.borderColor = "red";
    SSCinstitutionnameElement.style.borderWidth = "1px";
  } else if (SSCinstitutionnameElement.validity.valid === false) {
    document.getElementById("SSCinstitutionnameErrMsg").textContent =
      "Invalid Data";
    SSCinstitutionnameElement.style.borderColor = "red";
    SSCinstitutionnameElement.style.borderWidth = "1px";
  } else {
    document.getElementById("SSCinstitutionnameErrMsg").textContent = "";
    SSCinstitutionnameElement.style.borderColor = "black";
    SSCinstitutionnameElement.style.borderWidth = "1px";
  }
  applicantDetails.SSCinstitutionname = event.target.value;
});
SSCboardElement.addEventListener("blur", function (event) {
  applicantDetails.SSCboard = event.target.value;
});
scoreInSSCElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("scoreInSSCErrMsg").textContent = "Required*";
    scoreInSSCElement.style.borderColor = "red";
    scoreInSSCElement.style.borderWidth = "1px";
  } else if (
    parseInt(event.target.value) < 1 ||
    parseInt(event.target.value) > 100
  ) {
    document.getElementById("scoreInSSCErrMsg").textContent =
      "Percentage should be between 1 and 100";
    scoreInSSCElement.style.borderColor = "red";
    scoreInSSCElement.style.borderWidth = "1px";
  } else {
    document.getElementById("scoreInSSCErrMsg").textContent = "";
    scoreInSSCElement.style.borderColor = "black";
    scoreInSSCElement.style.borderWidth = "1px";
    applicantDetails.scoreInSSC = event.target.value;
  }
});
currentlyPursuingElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("currentlyPursuingErrMsg").textContent =
      "Required*";
    currentlyPursuingElement.style.borderColor = "red";
    currentlyPursuingElement.style.borderWidth = "1px";
  } else if (currentlyPursuingElement.validity.valid === false) {
    document.getElementById("currentlyPursuingErrMsg").textContent =
      "Invalid Data";
    currentlyPursuingElement.style.borderColor = "red";
    currentlyPursuingElement.style.borderWidth = "1px";
  } else {
    document.getElementById("currentlyPursuingErrMsg").textContent = "";
    currentlyPursuingElement.style.borderColor = "black";
    currentlyPursuingElement.style.borderWidth = "1px";
  }
  applicantDetails.currentlyPursuing = event.target.value;
});
currentEducationalInstutionNameElement.addEventListener(
  "blur",
  function (event) {
    if (event.target.value === "") {
      document.getElementById(
        "currentEducationalInstutionNameErrMsg"
      ).textContent = "Required*";
      currentEducationalInstutionNameElementt.style.borderColor = "red";
      currentEducationalInstutionNameElement.style.borderWidth = "1px";
    } else if (
      currentEducationalInstutionNameElement.validity.valid === false
    ) {
      document.getElementById(
        "currentEducationalInstutionNameErrMsg"
      ).textContent = "Invalid Data";
      currentEducationalInstutionNameElementt.style.borderColor = "red";
      currentEducationalInstutionNameElement.style.borderWidth = "1px";
    } else {
      document.getElementById(
        "currentEducationalInstutionNameErrMsg"
      ).textContent = "";
      currentEducationalInstutionNameElement.style.borderColor = "black";
      currentEducationalInstutionNameElement.style.borderWidth = "1px";
    }
    applicantDetails.currentEducationalInstutionName = event.target.value;
  }
);
overallPercentageElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("overallPercentageErrMsg").textContent =
      "Required*";
    overallPercentageElement.style.borderColor = "red";
    overallPercentageElement.style.borderWidth = "1px";
  } else if (
    parseInt(event.target.value) < 1 ||
    parseInt(event.target.value) > 100
  ) {
    document.getElementById("overallPercentageErrMsg").textContent =
      "Percentage should be between 1 and 100";
    overallPercentageElement.style.borderColor = "red";
    overallPercentageElement.style.borderWidth = "1px";
  } else {
    document.getElementById("overallPercentageErrMsg").textContent = "";
    overallPercentageElement.style.borderColor = "black";
    overallPercentageElement.style.borderWidth = "1px";
  }
  applicantDetails.overallPercentage = event.target.value;
});
currentBacklogsElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    document.getElementById("currentBacklogsErrMsg").textContent = "Required*";
    currentBacklogsElement.style.borderColor = "red";
    currentBacklogsElement.style.borderWidth = "1px";
  } else {
    document.getElementById("currentBacklogsErrMsg").textContent = "";
    currentBacklogsElement.style.borderColor = "black";
    currentBacklogsElement.style.borderWidth = "1px";
  }
  applicantDetails.currentBacklogs = event.target.value;
});
recentPassportSizePhotographElement.addEventListener(
  "change",
  function (event) {
    if (this.files[0].size > 3145728) {
      alert("File is too big!");
      this.value = "";
    } else applicantDetails.recentPassportSizePhotograph = event.target.value;
  }
);
HSCMarkSheetElement.addEventListener("change", function (event) {
  if (this.files[0].size > 3145728) {
    alert("File is too big!");
    this.value = "";
  } else {
    applicantDetails.HSCMarkSheet = event.target.value;
  }
});
SSCMarkSheetElement.addEventListener("change", function (event) {
  if (this.files[0].size > 3145728) {
    alert("File is too big!");
    this.value = "";
  } else {
    applicantDetails.SSCMarkSheet = event.target.value;
  }
});
AllSemestersMarkSheetInaSinglePDFElement.addEventListener(
  "change",
  function (event) {
    if (this.files[0].size > 10485760) {
      alert("File is too big!");
      this.value = "";
    } else {
      applicantDetails.AllSemestersMarkSheetInaSinglePDF = event.target.value;
    }
  }
);

function dataValidation(n) {
  let isValidDate = validDate(dateOfBirth);
  const {
    Name,
    dataOfBirth,
    emailId,
    fatherFirstName,
    fatherLastName,
    motherFirstName,
    motherLastName,
    Gender,
    streetAddress,
    city,
    pinNo,
    mobile,
    HSCintitutionname,
    HSCboard,
    scoreInHSC,
    SSCinstitutionname,
    SSCboard,
    scoreInSSC,
    currentlyPursuing,
    currentEducationalInstutionName,
    overallPercentage,
    currentBacklogs,
    recentPassportSizePhotograph,
    HSCMarkSheet,
    SSCMarkSheet,
    AllSemestersMarkSheetInaSinglePDF,
  } = applicantDetails;
  if (n === 0) {
    if (Name === "" || NameElement.validity.valid === false) {
      alert("Invalid Name");
      return false;
    }
    if (dateOfBirth === "") {
      alert("Invalid Date Of Birth");
      return false;
    }
    if (emailId === "" || emailIdElement.validity.valid === false) {
      alert("Invalid EmailId");
      return false;
    }
    if (
      fatherFirstName === "" ||
      fatherFirstNameElement.validity.valid === false
    ) {
      alert("Invalid Father's First Name");
      return false;
    }
    if (
      fatherLastName === "" ||
      fatherLastNameElement.validity.valid === false
    ) {
      alert("Invalid Father's Last Name");
      return false;
    }
    if (
      motherFirstName === "" ||
      motherFirstNameElement.validity.valid === false
    ) {
      alert("Invalid Mother's First Name");
      return false;
    }
    if (
      motherLastName === "" ||
      motherLastNameElement.validity.valid === false
    ) {
      alert("Invalid Mother's Last Name");
      return false;
    }
    if (Gender === "") {
      alert("Invalid Gender");
      return false;
    }
    if (streetAddress === "") {
      alert("Please provide all mandetory fields");
      return false;
    }
    if (city === "" || cityElement.validity.valid === false) {
      alert("Invalid City Name");
      return false;
    }
    if (
      pinNo === "" ||
      pinNo.length !== 6 ||
      pinNoElement.validity.valid === false
    ) {
      alert("Invalid Pin Number");
      return false;
    }
    if (
      mobile === "" ||
      mobile.length !== 10 ||
      mobileElement.validity.valid === false
    ) {
      alert("Invalid Mobile Number");
      return false;
    }
    return true;
  }
  if (n === 1) {
    if (HSCintitutionname === "" || HSCboardElement.validity.valid === false) {
      alert("Invalid HSC Institution Name");
      return false;
    }
    if (HSCboard === "") {
      alert("Invalid HSC Board");
      return false;
    }
    if (scoreInHSC === "" || !scoreInHSCElement.validity.valid) {
      alert("Invalid HSC Percentage");
      return false;
    }
    if (
      SSCinstitutionname === "" ||
      SSCinstitutionnameElement.validity.valid === false
    ) {
      alert("Invalid SSC Institution Name");
      return false;
    }
    if (SSCboard === "") {
      alert("Invalid SSC Board");
      return false;
    }
    if (scoreInSSC === "" || !scoreInSSCElement.validity.valid) {
      alert("Invalid HSC Percentage");
      return false;
    }
    if (
      currentlyPursuing === "" ||
      currentlyPursuingElement.validity.valid === false
    ) {
      alert("Invalid currently Pursuing Degree");
      return false;
    }
    if (
      currentEducationalInstutionName === "" ||
      currentEducationalInstutionNameElement.validity.valid === false
    ) {
      alert("Invalid Current Educational InstutionName");
      return false;
    }
    if (overallPercentage === "" || !overallPercentageElement.validity.valid) {
      alert("Invalid overallPercentage");
      return false;
    }
    if (currentBacklogs === "") {
      alert("Please Enter valid no of backlogs");
      return false;
    }
    return true;
  } else {
    if (recentPassportSizePhotograph === "") {
      alert("Please provide all mandetory fields");
      return false;
    }
    if (HSCMarkSheetElement === "") {
      alert("Please provide all mandetory fields");
      return false;
    }
    if (SSCMarkSheetElement === "") {
      alert("Please provide all mandetory fields");
      return false;
    }
    if (AllSemestersMarkSheetInaSinglePDF === "") {
      alert("Please provide all mandetory fields");
      return false;
    }
    return true;
  }
}
