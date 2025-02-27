import markdown from 'markdown-it';
import mdTocAndAnchor from 'markdown-it-toc-and-anchor';
import path from 'path';

export const renderMarkdown = (content: string, title: string) => {
  const md = markdown({
    html: true,
    xhtmlOut: true,
    breaks: true,
    linkify: true,
    quotes: '“”‘’',
  }).use(mdTocAndAnchor, { tocClassName: 'toc', anchorClassName: 'anchor' });

  const defaultImageRenderer = md.renderer.rules.image;
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const src = tokens[idx].attrGet('src');
    if (/^\.\//.test(src || '')) {
      tokens[idx].attrSet('src', path.join('/public/notes', title, src!));
    }
    return defaultImageRenderer!(tokens, idx, options, env, self);
  };

  return md.render(content);
};

export const shortenNumber = (num: number) => {
  if (num < 1000) return num.toString();
  if (num < 1000_000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  if (num < 1000_000_000) {
    return `${(num / 1000_000).toFixed(1)}m`;
  }
  return `${(num / 1000_000_000).toFixed(1)}b`;
};
