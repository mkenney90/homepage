import pagesJson from '../public/pages.json';

let pagesStore = pagesJson;

// async function getData() {
//     const res = await fetch("https://kenneymedia.com/cms/api/pages");
//     const json = await res.json();
//     pagesStore = json.map((x) => (
//         {
//             pageTitle: x.field_header[0].value,
//             content: x.field_content[0].value
//         }
//     ))
// }

// getData();

export default {
    getAllPages() {
        return pagesStore;
    },

    getPage(index) {
        return pagesStore[index]
            ? pagesStore[index]
            : "No data found for " + index;
    },
};
