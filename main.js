// Example data (replace with actual API response)
// Function to generate random data for the table
function generateRandomData() {
    const rowCount = 20; // Number of rows to generate
    const data = [];
  
    for (let i = 0; i < rowCount; i++) {
      const rowData = {
        Timestamp: generateRandomTimestamp(),
        'Purchase Id': generateRandomPurchaseId(),
        Mail: generateRandomEmail(),
        Name: generateRandomName(),
        Source: generateRandomSource(),
        Status: generateRandomStatus(),
        Select: '<input type="checkbox">'
      };
  
      data.push(rowData);
    }
  
    return data;
  }
  
  // Function to generate random timestamp
  function generateRandomTimestamp() {
    // Replace this with your desired logic for generating random timestamps
    // Example: return new Date().toISOString();
    return '2023-07-14 10:30:00';
  }
  
  // Function to generate random purchase id
  function generateRandomPurchaseId() {
    // Replace this with your desired logic for generating random purchase ids
    // Example: return Math.random().toString(36).substring(2, 8).toUpperCase();
    return 'ABC123';
  }
  
  // Function to generate random email
  function generateRandomEmail() {
    // Replace this with your desired logic for generating random emails
    // Example: return 'example' + Math.random().toString(36).substring(2, 8) + '@example.com';
    return 'example@example.com';
  }
  
  // Function to generate random name
  function generateRandomName() {
    // Replace this with your desired logic for generating random names
    // Example: return 'John Doe';
    return 'John Doe';
  }
  
  // Function to generate random source
  function generateRandomSource() {
    // Replace this with your desired logic for generating random sources
    // Example: return ['Website', 'Mobile App'][Math.floor(Math.random() * 2)];
    return 'Website';
  }
  
  // Function to generate random status
  function generateRandomStatus() {
    // Replace this with your desired logic for generating random status
    // Example: return ['Confirmed', 'Pending', 'Cancelled'][Math.floor(Math.random() * 3)];
    return 'Confirmed';
  }
  
  // Generate the table data
  const tableData = generateRandomData();
  
  // Function to generate table rows dynamically
  function generateTableRows() {
    const tableBody = document.querySelector('#bookingTable tbody');
  
    tableData.forEach(rowData => {
      const row = document.createElement('tr');
      Object.values(rowData).forEach(value => {
        const cell = document.createElement('td');
        cell.innerHTML = value;
        row.appendChild(cell);
      });
      tableBody.appendChild(row);
    });
  }
  
  // Call the function to generate the table rows
  generateTableRows();
  