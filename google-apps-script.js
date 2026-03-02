/**
 * Google Apps Script - doPost Function
 * Deploy as Web App with execute as: Me, access: Anyone
 * 
 * Instructions:
 * 1. Open Google Sheets
 * 2. Go to Extensions > Apps Script
 * 3. Paste this code
 * 4. Save and Deploy > New Deployment
 * 5. Select type: Web app
 * 6. Execute as: Me
 * 7. Who has access: Anyone
 * 8. Copy the Web App URL
 */

function doPost(e) {
  try {
    // Get the active spreadsheet (or use SpreadsheetApp.openById('YOUR_SHEET_ID'))
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the JSON data from the POST request
    var data = JSON.parse(e.postData.contents);
    
    // Extract form fields with safe fallback to empty string
    var name = data.name || '';
    var mobile = data.mobile || '';
    var city = data.city || '';
    var state = data.state || '';
    var email = data.email || '';
    var investmentRange = data.investmentRange || '';
    var date = new Date().toLocaleString(); // Current date/time
    
    // Append data to the sheet (assuming headers are in row 1)
    sheet.appendRow([
      name,
      mobile,
      city,
      state,
      email,
      investmentRange,
      date
    ]);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'success' })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'error', message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Optional: doGet function for testing
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ message: 'Form submission endpoint. Use POST method.' })
  ).setMimeType(ContentService.MimeType.JSON);
}

