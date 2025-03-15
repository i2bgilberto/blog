import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "i2bDeveloper | Blog",
    description: "ideas to build developer blog",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
