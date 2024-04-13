const SHEET_NAME = 'Sheet1';

/**
 * This function can be used to manually trigger the authorization flow for the script.
 */
function showAuthorizationDialog() {
  SpreadsheetApp.getActiveSpreadsheet();
  DriveApp.getRootFolder();
}

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu')
    .addItem('Insert PDF info into Sheet', 'outputFileNameURLInsertion')
    .addSeparator()
    .addToUi(); // Ensure the menu is added
}

function outputFileNameURLInsertion() {
  const FOLDER_URL = Browser.inputBox(
    'Please input folder URL',
    Browser.Buttons.OK_CANCEL
  );

  if (FOLDER_URL === 'cancel') {
    Browser.msgBox('Inputting folder URL was cancelled');
    return;
  } else if (FOLDER_URL === '') {
    Browser.msgBox('Folder URL was not input.');
    return;
  }

  const folderId = extractFolderId_(FOLDER_URL);
  if (!folderId) {
    Browser.msgBox('Invalid folder URL.');
    return;
  }

  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let targetSheet = ss.getSheetByName(SHEET_NAME);

  let targetFolder = DriveApp.getFolderById(folderId);
  let targetFiles = targetFolder.getFilesByType(MimeType.PDF);

  let fileInfos = [];
  while (targetFiles.hasNext()) {
    let targetFile = targetFiles.next();
    let fileName = targetFile.getName();
    let fileUrl = targetFile.getUrl();

    fileInfos.push(['=HYPERLINK("' + fileUrl + '","' + fileName + '")']);
  }
  let lastRow = targetSheet.getLastRow() - 1;
  if (lastRow > 0) {
    let previousDataRange = targetSheet.getRange(2, 1, lastRow, 1);
    previousDataRange.clearContent();
  }
  let fileNum = fileInfos.length;
  if (fileNum === 0) {
    Browser.msgBox('Any PDF files are not in the target folder.');
  }
  let targetRange = targetSheet.getRange(2, 1, fileNum, 1);
  targetRange.setValues(fileInfos);
}

function extractFolderId_(url) {
  const matches = url.match(/folders\/([a-zA-Z0-9-_]+)/);
  return matches ? matches[1] : null;
}
