function downloadSong(fileName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                const fileData = `Content of ${fileName}`;
                resolve(fileData)
            } else {
                const error = `Failed to load content of ${fileName}`;
                reject(error);
            }
        }, 2000)
    })
}

function processFile(fileData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processData = `Processed: ${fileData}`;
            resolve(processData);
        }, 2000);
    });
}

function saveFileLocally(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("File finally saved!")
            } else {
                const error = "Failed to save locally";
                reject(error)
            }
        }, 1000);
    })
}

downloadSong("song.mp4").then((fileData) => {
    return processFile(fileData)
}).then((processedData) => {
    return saveFileLocally(processedData)
}).then((savedData) => {
    console.log("File finally saved", savedData)
}).catch((error) => {
    console.error(`Error found: ${error}`);
})


async function processFiles() {
    try {
        const fileData = await downloadSong("song.mp4");
        const processData = await processFile(fileData);
        const savedData = await saveFileLocally(processData);
        console.log("File finally saved", savedData)
    } catch (error) {
        console.error(`Error found: ${error}`);
    }
}