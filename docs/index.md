---
layout: default
title: 'PDF Info Insertion'
---

## About this Project

This project involves a Google Apps Script that inserts PDF information into a Google Sheet. The script provides a custom menu in Google Sheets for the user to input a Google Drive folder URL. It then scans the folder for PDF files and inserts their names and URLs into the specified sheet.

- The script is manually triggered by the user through a custom menu in Google Sheets.
- The script scans a specified Google Drive folder for PDF files.
- The script inserts the name and URL of each PDF file into the Google Sheet.

## Prerequisites

- A Google account with access to Google Sheets and Google Drive.
- Basic understanding of Google Sheets and Google Apps Script.
- A Google Drive folder containing PDF files.

## Setup

<ol>
  <li><strong>Open Your Google Sheet</strong>: Access <a href="https://docs.google.com/spreadsheets/d/1z1i7ZYgkRRC0WS3xqS3CGh1GJ8iUQWKkcMwbVa3YU6Q/edit#gid=1971008536" target="_blank" rel="noopener noreferrer">Sample Google Sheet</a>.</li>
  <li><strong>Copy Sample Sheet</strong>: Copy the Google Sheet to make your sheet.</li>
  <li><strong>Conduct GAS Authorization</strong>: Click the initial setting button. This enables you to go to the authorization page for Google Apps Script.
    <div style="margin-left: 30px">
      <img src="assets/images/initial-setting.png" alt="Image of Initial Setting" width="200" height="100">
    </div>
  </li>
  <li><strong>Customize Constant Variables for Built-in Functions</strong>: Navigate to the Apps Script page and adjust the constant variables to suit your needs.</li>
</ol>


## Usage

<ol>
  <li><strong>Copy the Google Drive Folder URL</strong>: Copy the URL of the Google Drive folder that contains the PDF files.
    <div style="margin-left: 30px">
      <img src="assets/images/copy-folder-url.png" alt="Image of Copy Folder URL" width="400" height="200">
    </div>
  </li>
  <li><strong>Open the Google Sheet</strong>: Open the Google Sheet where you want to insert the PDF information.</li>
  <li><strong>Access the Custom Menu</strong>: Click on the 'Custom Menu' that appears in the menu bar of the Google Sheet. Select 'Insert PDF info into Sheet'.
    <div style="margin-left: 30px">
      <img src="assets/images/access-custom-menu.png" alt="Image of Access Custom Menu" width="400" height="100">
    </div>
  </li>
  <li><strong>Display the PDF Information</strong>: The PDF information is displayed in the Google Sheet.
    <div style="margin-left: 30px">
      <img src="assets/images/display-pdf-info.png" alt="Image of Display PDF Info" width="200" height="100">
    </div>
  </li>
</ol>

## Others
- **Customization**: You can customize the scripts according to your specific preferences. For example, you can change the name of the sheet where the PDF information is inserted by modifying the `SHEET_NAME` constant.
