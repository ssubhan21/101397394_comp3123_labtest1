const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

function removeLogFiles() {
    if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        console.log('Files to delete:');
        files.forEach(file => {
            console.log(file);
            fs.unlinkSync(path.join(logsDir, file));
        });
        
        fs.rmdirSync(logsDir);
        console.log('Logs directory removed.');
    } else {
        console.log('Logs directory does not exist.');
    }
}


removeLogFiles();
