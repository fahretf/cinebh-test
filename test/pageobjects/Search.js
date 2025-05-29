import dotenv from 'dotenv';
dotenv.config();

class Search {
    keyword = process.env.KEYWORD; 

    async openCurrentlyShowing() {
        const currentlyShowingLink = await $('a[href="/currently-showing"][data-discover="true"]');
        await currentlyShowingLink.click();
    }

    async searchMovie(keyword = this.keyword) {
        const searchInput = await $('input[placeholder="Search Movies"]');
        await searchInput.setValue(keyword);
    }

    async getMovieTitles() {
        const elements = await $$('h2.text-3xl.font-bold.text-primary');
        const titles = [];
        for (const el of elements) {
            titles.push(await el.getText());
        }
        return titles;
    }

    get defaultKeyword() {
        return this.keyword;
    }
}

export default new Search();
