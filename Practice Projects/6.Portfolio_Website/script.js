document.addEventListener("DOMContentLoaded", function() {
    // Select the "Download Resume" button
    var downloadButton = document.querySelector('.buttons:nth-of-type(1)'); // This selects the first button
    // Add click event listener
    downloadButton.addEventListener('click', function() {
        // Code to execute when the "Download Resume" button is clicked
        // You can add your logic here
        console.log('Download Resume button clicked');
    });

    // Select the "Visit Github" button
    var githubButton = document.querySelector('.buttons:nth-of-type(2)'); // This selects the second button
    // Add click event listener
    githubButton.addEventListener('click', function() {
        // Code to execute when the "Visit Github" button is clicked
        // Redirecting to the GitHub page
        window.location.href = "https://github.com/mannu1311";
    });
});
function downloadResume() {
    // Create a hidden <a> element
    var downloadLink = document.createElement('a');
    // Set the href attribute to the Google Drive link of your resume file
    downloadLink.href = 'https://drive.google.com/file/d/1-55csQ05GmFgIYj5tX1KPGoVaNc3wFaa/view?usp=sharing';
    // Set the download attribute to the desired filename
    downloadLink.download = 'ManoharSinghResume.pdf';
    
    // Append the <a> element to the document body
    document.body.appendChild(downloadLink);
    
    // Trigger a click event on the <a> element to initiate the download
    downloadLink.click();
    
    // Remove the <a> element from the document body after download
    document.body.removeChild(downloadLink);
}