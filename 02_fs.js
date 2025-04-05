const fs = require('fs');

fs.writeFile('message.txt', 'Node.js is awesome!', (err) => {
    if (err) {
        console.error('Error writing to message.txt:', err);
    } else {
        console.log('message.txt was created successfully.');      
    }        
});  

fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err){
        console.error('Error reading message.txt:', err);
    } else{
        console.log('Content of message.txt:', data);
        
        fs.unlink('message.txt', (err) => {
            if (err) {
                console.error('Error deleting message.txt:', err);
            } else {
                console.log('message.txt was deleted successfully.');
            }
        });
    } 
});


