function listFiles() {
    const directoryInput = document.getElementById('directoryInput');
    console.log(directoryInput);
    const fileList = document.getElementById('fileList');

    fileList.innerHTML = ''; // Clear previous list

    const files = directoryInput.files;

    for (let i = 0; i < files.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = files[i].name;
        fileList.appendChild(listItem);
    }

    if (files.length === 0) {
        const listItem = document.createElement('li');
        listItem.textContent = 'No files selected';
        fileList.appendChild(listItem);
    }
}

// // window.onload = function() {
    
//     // const directoryInput  = "file://C:/Users/tesle/OneDrive/Documents/Resume/V3";
//     const directoryInput = document.getElementById('directoryInput');
//     // console.log(directoryInput);
//     const fileList = document.getElementById('fileList');

//     fileList.innerHTML = ''; // Clear previous list

//     const files = directoryInput.files;

//     for (let i = 0; i < files.length; i++) {
//         const listItem = document.createElement('li');
//         listItem.textContent = files[i].name;
//         fileList.appendChild(listItem);
//     }

//     if (files.length === 0) {
//         const listItem = document.createElement('li');
//         listItem.textContent = 'No files selected';
//         fileList.appendChild(listItem);
//     }
// // };
