import { toString } from 'mdast-util-to-string';

const WORDS_PER_MINUTE = 200;

function getReadingTime(content) {
    if (!content) return;
    const clean = content.replace(/<\/?[^>]+(>|$)/g, '');
    const numberOfWords = clean.split(/\s/g).length;
    const amount = Math.ceil(numberOfWords / WORDS_PER_MINUTE);
    return [numberOfWords, `${amount} min read`];
}


export function remarkReadingTime() {
    return function (tree, { data }) {
        const textOnPage = toString(tree);
        const [numberOfWords, readingTime] = getReadingTime(textOnPage);
        data.astro.frontmatter.numberOfWords = numberOfWords;
        data.astro.frontmatter.readingTime = readingTime;
    };
}