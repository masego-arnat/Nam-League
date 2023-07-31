const form = document.getElementById("teamForm"); // Replace "bookForm" with your form ID

form.addEventListener("submit", (event) => {
    event.preventDefault();
    //document.getElementById("createloaderBtn").style.display = "block";
    //document.getElementById("createBtn").style.display = "none";

    const Fname = document.getElementById("teamName").value; // Replace "titleInput" with the input field ID for the title
    // const authorInput = document.getElementById("authorInput").value; // Replace "authorInput" with the input field ID for the author
    //const yearInput = document.getElementById("kitdetails").value; // Replace "yearInput" with the input field ID for the published year

    const booksRefsDD = firebase.firestore().collection("PL");
    const bookData = {
        TeamName: Fname,
        // author: authorInput,
        //date: yearInput, // Assuming the year input is a number

    };

    // Add the data to the collection
    booksRefsDD
        .add(bookData)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            // Reset the form after successfully adding the data
            form.reset();
            window.location.reload();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            $('#ErrorModal').modal('show');
        });
});