
/**
 * Fetching the data.json from the same web hosting.
 * @param {string} url The json resource url.
 * @returns an array of objects representing education history
 */
async function getEducations(url) {
    try {
        let response = await fetch(url);

        // Check HTTP response code to see if request succeeded.
        if (!response.ok) {
            throw new Error("Failed request " + response.status);
        }

        return response.json();
    } catch (error) {
        console.log(`getEducations error: ${error}`);
        return new Array(); // return an empty array if failed.
    }
}

/**
 * The main logic:
 *  1. Fetch the records from data.json hosted in the same directory.
 *  2. Insert the records into the table in the html.
 */
async function main() {    
    let records = await getEducations("data.json");
    let $table = $("table");

    for (let record of records) {
        $table.append(
            `<tr>
              <td>${record.school}</td>
              <td>${record.major}</td>
              <td>${record.type}</td>
              <td>${record.year}</td>
            </tr>`);
    }
}

// Run the main logic.
main();
