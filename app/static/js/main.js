function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createIncrementor() {
    let count = 1;
    return function() {
        return count++
    } 
}
const increment = createIncrementor();


function generateFolderName() {
    const first_name = 'Folder '
    
    titleName = first_name + increment()
    return titleName
}

function generateFolderId() {
    return timestamp = new Date().getTime();
}

window.addEventListener("DOMContentLoaded", (event) => {


    function createLoadFolder() {
        const asideContainer = document.getElementById("folder-container");
        const newSection = document.createElement("div");
        const imageSection = document.createElement("div");
        const titleSection = document.createElement("div");

        newSection.classList.add("folder");
        imageSection.classList.add("image-folder");
        titleSection.classList.add("title-folder", "loading");

        asideContainer.appendChild(newSection);
        newSection.appendChild(imageSection);
        newSection.appendChild(titleSection);

        newSection.tabIndex = "0"   
    }





    document.getElementById("create-folder").addEventListener("click", () => {
        createLoadFolder();
        fetch("api/create-folder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId: "user123" })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log(data)
            } 
            else {
                alert("Folder not created");
            }
        });
    });


    document.getElementById("noteInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();

            const noteText = this.value.trim();

            if (noteText != "") {
                const notesContainer = document.getElementById("notesContainer");
                const noteElement = document.createElement("div");
                noteElement.classList.add("note");
                noteElement.textContent = noteText;
                notesContainer.appendChild(noteElement);

                this.value = "";
            }
        }
    } );

} );