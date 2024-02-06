document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var name = document.getElementById('name').value;
    var comment = document.getElementById('commentbox').value;

    // Store the data in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('commentbox', comment);

    // Display a success message
    alert('Data stored successfully!');
});
