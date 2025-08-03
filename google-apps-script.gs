// Google Apps Script backend for Google Sheets + Drive + Email
function doPost(e) {
  const sheet = SpreadsheetApp.openById('1u9mzbWs14xkdYpc7Ai3J6m9l5Hb8QhaB9EACn_hItf8').getSheets()[0];
  const data = JSON.parse(e.postData.contents);
  const row = [
    new Date(),
    data.name,
    data.email,
    data.department,
    data.category,
    data.totalAmount
  ];
  sheet.appendRow(row);

  // Send confirmation email
  MailApp.sendEmail({
    to: data.email,
    subject: 'Expense Form Submission Received',
    htmlBody: 'Thank you, ' + data.name + '. Your expense form has been received. Total Amount: SAR ' + data.totalAmount
  });

  return ContentService.createTextOutput(JSON.stringify({status: 'success'})).setMimeType(ContentService.MimeType.JSON);
}
