async function submitData(formData) {
  const url = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL';
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors', // Common when using Apps Script
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    console.log("Data saved to Google Sheets!");
  } catch (error) {
    console.error("Error saving data:", error);
  }
}
