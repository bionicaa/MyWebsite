import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export function convertMarkdownToHtml(markdown) {
  return md.render(markdown);
}

