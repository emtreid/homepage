export interface ArxivEntry {
  id: string | null;
  title: string | null;
  abstract: string | null;
  pubDate: Date | null;
  updatedDate: Date | null;
  authors: string[] | null;
  link: string | null;
}
