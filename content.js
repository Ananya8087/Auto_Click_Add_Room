// Function to manage state using localStorage
function getState(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

function setState(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Initialize state for Add Room button click tracking
let addRoomButtonClicked = getState('addRoomButtonClicked') || false;

// Function to click the Add Room button only once
function clickAddRoomButton() {
    const addRoomButton = document.querySelector('button.p-button.p-component.add_room_btn');
    if (addRoomButton && !addRoomButtonClicked) {
        addRoomButton.click();
        console.log('Clicked on the "Add Room" button.');
        addRoomButtonClicked = true; // Mark as clicked
        setState('addRoomButtonClicked', addRoomButtonClicked); // Save state
    } else {
        console.error('Add Room button not found or already clicked.');
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
            clickAddRoomButton(); // Click Add Room button if not already clicked
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
