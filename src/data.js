import pagesJson from '../public/pages.json';

let pagesStore = pagesJson;

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
