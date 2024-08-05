function generateFolderId() {
    return timestamp = new Date().getTime();
}

function createLoadFolder(folderId) {
    const asideContainer = document.getElementById("folder-container");
    const newSection = document.createElement("div");
    const imageSection = document.createElement("div");
    const titleSection = document.createElement("div");

    newSection.id = folderId
    newSection.classList.add("folder");
    imageSection.classList.add("image-folder");
    titleSection.classList.add("title-folder", "loading");

    asideContainer.appendChild(newSection);
    newSection.appendChild(imageSection);
    newSection.appendChild(titleSection);

    newSection.tabIndex = "0"   
}

function setFolderParameters(folderId, colorImage, titleText) {
    const folderConteiner = document.getElementById(folderId);
    const imageFolder = folderConteiner.querySelector(".image-folder");
    const titleFolder = folderConteiner.querySelector(".title-folder");

    imageFolder.style.backgroundColor = colorImage;
    titleFolder.textContent = titleText;

    titleFolder.classList.remove("loading")
}


window.addEventListener("DOMContentLoaded", (event) => {


    document.getElementById("create-folder").addEventListener("click", () => {
        const folderId = generateFolderId();
        createLoadFolder(folderId);

        fetch("api/create-folder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ folderId: folderId })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.colorIcon)
            if (data.success) {
                setFolderParameters(
                    data.folderId,
                    data.colorIcon,
                    data.folderName
                )
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