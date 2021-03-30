function previous(element) {
  let fatherDiv = element.parentNode.id;
  switch (fatherDiv) {
    case 'addressDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'block';
      document.getElementById('profileDiv').style.display = 'none';
      document.getElementById('resultDiv').style.display = 'none';
      break;
    case 'profileDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'none';
      document.getElementById('addressDiv').style.display = 'block';
      document.getElementById('resultDiv').style.display = 'none';

      break;
    case 'resultDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'none';
      document.getElementById('addressDiv').style.display = 'none';
      document.getElementById('profileDiv').style.display = 'block';

      break;

    default:
      break;
  }
}

//showNextSection
function nextDiv(element) {
  let fatherDiv = element.parentNode.id;
  switch (fatherDiv) {
    case 'personalDiv':
      let checkFirstName = document
        .getElementsByName('firstName')[0]
        .checkValidity();
      let checkLastName = document
        .getElementsByName('lastName')[0]
        .checkValidity();
      let checkBirthDate = document
        .getElementsByName('birthDate')[0]
        .checkValidity();
      let checkNationality = document
        .getElementsByName('nationality')[0]
        .checkValidity();

      showData();

      if (
        checkFirstName &&
        checkLastName &&
        checkBirthDate &&
        checkNationality
      ) {
        element.parentNode.style.display = 'none';
        document.getElementById('addressDiv').style.display = 'block';
        document.getElementById('profileDiv').style.display = 'none';
        document.getElementById('resultDiv').style.display = 'none';
        break;
      } else {
        alert('Bitte füllen Sie alle Felder aus');
      }

    case 'addressDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'none';
      document.getElementById('profileDiv').style.display = 'block';
      document.getElementById('resultDiv').style.display = 'none';

      break;
    case 'profileDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'none';
      document.getElementById('addressDiv').style.display = 'none';
      document.getElementById('resultDiv').style.display = 'block';

      break;

    default:
      break;
  }
}

function showData() {
  let firstName = document.getElementsByName('firstName')[0];
  let lastName = document.getElementsByName('lastName')[0];
  let outputName = document.querySelector('#nameLabel');
  let name = `${firstName.value} ${lastName.value}`;
  outputName.innerText = name;
}
