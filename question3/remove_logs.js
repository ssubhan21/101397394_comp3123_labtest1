
// remove.js
const fs = require('fs');
const path = require('path');

// Define the Logs directory path
const logsDir = path.join(process.cwd(), 'Logs');

// Function to remove log files and the directory
function removeLogFiles() {
    if (fs.existsSync(logsDir)) {
        // Read all files in the directory
        const files = fs.readdirSync(logsDir);
        
        // Output the file names to delete
        console.log('Files to delete:');
        files.forEach(file => {
            console.log(file);
            // Remove each file
            fs.unlinkSync(path.join(logsDir, file));
        });
        
        // Remove the Logs directory
        fs.rmdirSync(logsDir);
        console.log('Logs directory removed.');
    } else {
        console.log('Logs directory does not exist.');
    }
}

// Execute the function
removeLogFiles();
