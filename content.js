// Function to click the Add Room button conditionally
function clickAddRoomButton() {
    const roomTypeLabel = document.querySelector('div[data-v-524dcdd3] > div[data-v-524dcdd3].spaced-form-group.p-fluid.p-formgrid.p-grid > div[data-v-524dcdd3].p-field.p-col > label[data-v-524dcdd3].field_label[for="firstname"] + input[data-v-524dcdd3].p-inputtext.p-component.subm_field.form-control');

    if (roomTypeLabel) {
      console.log('Room Type label found in patient details. Skipping auto-click of Add Room button.');
      return; // Skip clicking Add Room button
    }
  
    const addRoomButton = document.querySelector('button.p-button.p-component.add_room_btn');
    if (addRoomButton) {
      addRoomButton.click();
      console.log('Clicked on the "Add Room" button.');
    } else {
      console.error('Add Room button not found.');
    }
  }
  
  // Function to set up event listener for Patient Details button
  function setupPatientDetailsButton() {
    const patientDetailsButton = document.querySelector('button.p-button.p-component.p-button-text.rejectreason_btn.patient_details_btn.vertical_text_bottom');
    if (patientDetailsButton) {
      console.log('Patient Details button found.');
      console.log('Patient Details Button HTML:', patientDetailsButton.outerHTML);
  
      // Attach event listener directly
      patientDetailsButton.addEventListener('click', function() {
        console.log('Patient Details button clicked by user.');
        clickAddRoomButton(); // Click Add Room button after checking room type label
      });
    } else {
      console.error('Patient Details button not found.');
    }
  }
  
  // Wait until the page is fully loaded before running the script
  window.addEventListener('load', function() {
    console.log('Window loaded, running script...');
    setupPatientDetailsButton();
  });
  
