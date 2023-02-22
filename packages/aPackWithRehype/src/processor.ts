import { unified } from "unified";
import rehypeHighlight from "rehype-highlight";
import matter from "gray-matter";

export async function mdParser_v1(matterResult: matter.GrayMatterFile<string>) {
  return await unified()
    .data("settings", { fragment: true })
    .use(rehypeHighlight)
    .process(matterResult.content);
}
