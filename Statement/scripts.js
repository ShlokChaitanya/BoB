document.getElementById('searchBarBtn').addEventListener('click', function () {
    const searchBox = document.getElementById('searchBox').style.display;
    searchBox === 'none' ? document.getElementById('searchBox').style.display = 'block' : document.getElementById('searchBox').style.display = 'none';
});

const inputField = document.getElementById('selectDropDown');
const dropDownMenu = document.getElementById('dropDownMenu');

document.getElementById('selectDropDown').addEventListener('click', function () {
    var searchBox = document.getElementById('dropDownMenu').style;
    if (searchBox.display === "" || searchBox.display === "none") {
        searchBox.display = "block";
        searchBox.width = "88px";
        searchBox.left = "85.5px";
        searchBox.top = "400px";
    } else {
        searchBox.display = "none";
    }
});

dropDownMenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        inputField.value = event.target.textContent;
        dropDownMenu.style.display = 'none';
    }
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.labelColumn_combo_brdr_toosmall')) {
        dropDownMenu.style.display = 'none';
    }
});

document.getElementById('downloadPDF').addEventListener('click', function () {
    const pdfPath = '/Statement/assets/Statement.pdf';

    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Acct Statement_XX9197_28082024_.pdf';
    link.click();
});

document.getElementById("nextPageBtn").addEventListener('click', function () {
    const params = new URLSearchParams(window.location.search);
    const currentPage = parseInt(params.get('page')) || 1;
    if (currentPage === Math.ceil(allData.length / 30) - 1) return;
    params.set('page', currentPage + 1);
    window.location.search = params.toString();
})

document.getElementById("prevPageBtn").addEventListener('click', function () {
    const params = new URLSearchParams(window.location.search);
    const currentPage = parseInt(params.get('page')) || 1;
    if (currentPage === 1) return;
    params.set('page', (currentPage != 0) ? currentPage - 1 : 1);
    window.location.search = params.toString();
})

let allData = [];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const page = urlParams.get('page');

function calculateLoadedRows(page, rowsPerPage = 30) {
    if (!page || isNaN(page) || page == 1) {
        return 0;
    }

    return (parseInt(page) - 1) * rowsPerPage;
}

const rowsPerLoad = 30;
let loadedRows = calculateLoadedRows(page, rowsPerLoad);

function loadPage(page) {
    document.getElementById("pageLable").innerHTML = `${page} of ${(Math.ceil(allData.length / rowsPerLoad)) - 1}`;
}

async function fetchData() {
    const response = await fetch('/Statement/state2.xlsx');
    if (!response.ok) throw new Error(`Failed to load file: ${response.statusText}`);

    const data = new Uint8Array(await response.arrayBuffer());
    const workbook = XLSX.read(data, { type: 'array' });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    const headers = ["TRAN DATE", "VALUE DATE", "NARRATION", "CHQ.NO.", "WITHDRAWAL(DR)", "DEPOSIT(CR)", "BALANCE(INR)"];
    const headerRow = jsonData[0];

    console.log(jsonData);
    const headerIndexes = headers.map(header => headerRow.indexOf(header));

    allData = jsonData.slice(1).map(row => {
        const rowData = {};
        headers.forEach((header, index) => {
            rowData[header] = row[headerIndexes[index]] !== undefined ? row[headerIndexes[index]] : null;
        });
        return rowData;
    });
}

function loadMoreRows() {
    const rowsToLoad = allData.slice(loadedRows, loadedRows + rowsPerLoad);
    const container = document.getElementById('HWListTable5134192');

    rowsToLoad.forEach(row => {
        const rowElement = document.createElement('tbody');
        const excelDate = row["TRAN DATE"];
        const jsDate = new Date(1899, 11, 30);
        jsDate.setDate(jsDate.getDate() + excelDate);

        const day = String(jsDate.getDate()).padStart(2, '0');
        const month = String(jsDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = jsDate.getFullYear();

        rowElement.innerHTML = `
        <tr class="listwhiterow">
																							<td
																								class="HW_textwithpadding footable-visible footable-first-column" style="width: 100px;">
																								<span
																									class="searchsimpletext"
																									id="PageConfigurationMaster_ROAUX3W__1:HREF_TransactionHistoryFG.TXN_DATE_ARRAY[0]">${day}/${month}/${year}</span>
																							</td>
																							<td
																								class="HW_textwithpadding footable-visible" style="width: 400px;">
																								<a href="https://feba.bobibanking.com/corp/Finacle?bwayparam=%2FFmVh1J1dweI%2FU3sXXF0nNGJBrcn4Tjln8fwIlObNHgHzWMVvUx%2FW%2Ba6XpP4G7ObmzY%2BEXrLP5LOBM0%2B6sD7R0QEykmYWJoBi5FMxFTgOlQ79WTDTJWENfwcStakGRLD%0D%0Au9azGKa06h4k4H%2FOcP1ZBGMyFQh1Bz11wVjXufQOgA%2BdrrQdpRTmZ9u302CU7G%2BYODRVQo%2B708NsXqtEuVaFWgHNO8SbW6AzsxPY%2F4ni8%2FU%3D#"
																									title="UPI/435240357705/17:10:49/UPI/kamblesagar308@okax"
																									id="HREF_PageConfigurationMaster_ROAUX3W__1:txnRemarksArray[0]"
																									name="HREF_TransactionHistoryFG.TXN_REMARKS_ARRAY[0]"
																									class="bluelink">${row["NARRATION"]}</a>
																							</td>
																							<td
																								class="null footable-visible" style="width: 50px;">
																								<span
																									class="labelcolumnsmall"
																									id="PageConfigurationMaster_ROAUX3W__1:HREF_TransactionHistoryFG.INSTRUMNETID_ARRAY[0]">&nbsp;</span>
																							</td>
																							<td
																								class="listgreyrowtxtleftline amountRightAlign footable-visible amtRightAlign">
																								<span class="${row["DEPOSIT(CR)"] == null ? "hwredtxtdr" : "hwgreentxt"}"
																									id="PageConfigurationMaster_ROAUX3W__1:HREF_amountType[0]">${row["DEPOSIT(CR)"] == null ? "-" : "+"}</span><span
																									class="${row["DEPOSIT(CR)"] == null ? "hwredtxt" : "hwgreentxt"} amountRightAlign amtRightAlign"
																									data-rightalign="true"
																									id="PageConfigurationMaster_ROAUX3W__1:HREF_amountArray[0]">${row["DEPOSIT(CR)"] == null ? row["WITHDRAWAL(DR)"] : row["DEPOSIT(CR)"]}</span>
																							</td>
																							<td
																								class="listgreyrowtxtleftline amountRightAlign footable-visible footable-last-column amtRightAlign">
																								<span
																									class="hwgreentxt amountRightAlign amtRightAlign"
																									data-rightalign="true"
																									id="PageConfigurationMaster_ROAUX3W__1:HREF_balanceArray[0]">${Number(row["BALANCE(INR)"].toFixed(2))}</span>
																							</td>
																						</tr>
                `;
        container.appendChild(rowElement);
    });

    loadedRows += rowsToLoad.length;
}

document.getElementById('raidobtn').checked = true;

fetchData().then(() => {
    loadMoreRows();
    loadPage(page ? parseInt(page) : 1);
});