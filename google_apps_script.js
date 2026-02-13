// 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1dCLuEUx_rzW5qTVkn8OKPYetA8Q48dgEJrmOnSX_EUE/edit
// 2. Go to Extensions > Apps Script.
// 3. Delete any code in the editor and paste this code.
// 4. Click "Deploy" > "New deployment".
// 5. Select "Select type" > "Web app".
// 6. Description: "Love Calculator API".
// 7. Execute as: "Me" (your email).
// 8. Who has access: "Anyone" (This is critical!).
// 9. Click "Deploy".
// 10. Copy the "Web App URL" and paste it into the love_calculator.html file.

function doPost(e) {
    // Open the specific sheet by ID
    var sheet = SpreadsheetApp.openById('1dCLuEUx_rzW5qTVkn8OKPYetA8Q48dgEJrmOnSX_EUE').getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);

    // Get timestamp
    var timestamp = new Date();

    // Append row: [Timestamp, Your Name, Partner Name, Likes, Dislikes, Score, Rating]
    sheet.appendRow([timestamp, data.yourName, data.partnerName, data.likes, data.dislikes, data.score, data.rating]);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success', 'row': sheet.getLastRow() }))
        .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
    return ContentService.createTextOutput("Love Calculator API is running. use POST to send data.");
}
