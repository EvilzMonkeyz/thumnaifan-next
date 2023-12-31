import TOCInline from "pliny/ui/TOCInline";
import Pre from "pliny/ui/Pre";
import BlogNewsletterForm from "pliny/ui/BlogNewsletterForm";
import type { MDXComponents } from "mdx/types";
import Image from "./Image";
import CustomLink from "./Link";

export const components = {
  Image,
  TOCInline,
  a: CustomLink,
  BlogNewsletterForm,
  pre: Pre,
};
