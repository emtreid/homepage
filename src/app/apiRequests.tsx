import type { ArxivEntry } from '../types/arxiv';
import { parseString } from 'xml2js';

export async function fetchArxivContent() {
  const response = await fetch(
    'https://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=10'
  );
  const feed = await response.text().then((text) => parseXml(text));
  return feed;
}

function parseXml(xml: string): ArxivEntry[] {
  let feed: ArxivEntry[] = [];
  parseString(xml, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    const entries = result.feed.entry;
    feed = entries.map((entry: any) => ({
      id: entry.id[0],
      title: entry.title[0],
      abstract: entry.summary[0],
      pubDate: entry.published[0] ? new Date(entry.published[0]) : null,
      updatedDate: entry.updated[0] ? new Date(entry.updated[0]) : null,
      authors: entry.author.map((author: any) => author.name[0]),
      link: entry.link[0],
    }));
  });
  return feed;
}
