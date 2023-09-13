const pagesKey = "pages";

let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson);

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
