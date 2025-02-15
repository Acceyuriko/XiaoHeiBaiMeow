import { readdir, readFile, writeFile } from 'fs/promises';
import { load } from 'js-yaml';
import path from 'path';

import '../index.d.ts';

const BASE_PATH = path.join(__dirname, '../public/notes');

(async () => {
  const notes = await readdir(BASE_PATH);
  const meta: NodeMeta[] = [];
  const nameSet = new Set();
  for (const note of notes) {
    console.log('process ', note);
    if (nameSet.has(note)) {
      throw new Error(`Duplicate note name: ${note}`);
    }
    nameSet.add(note);

    const md = await readFile(path.join(BASE_PATH, note, 'index.md'), 'utf-8');
    const metaData = md.match(/---(.*?)---/s);
    if (!metaData || !metaData[1]) {
      throw new Error(`No meta data found in ${note}`);
    }
    const content = md.replace(metaData[0], '').trim();

    const yamlData: {
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
      tags: string[];
    } = load(metaData[1].trim());

    meta.push({
      title: yamlData.title,
      description: yamlData.description,
      createdAt: new Date(yamlData.createdAt).getTime(),
      updatedAt: new Date(yamlData.updatedAt).getTime(),
      cover: `/notes/${note}/cover.jpg`,
      tags: yamlData.tags,
      content,
      charactors: content.length,
    });
  }

  await writeFile(path.join(__dirname, '../public/notes.json'), JSON.stringify(meta));
  console.log('done');
})();
