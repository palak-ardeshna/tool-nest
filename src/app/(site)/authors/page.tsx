import { permanentRedirect } from "next/navigation";
import { authors } from "@/content";

// ponytail: one author, so the index is a redirect; make it a list when a second byline exists.
export default function AuthorsIndex() {
  permanentRedirect(`/authors/${authors[0].slug}`);
}
