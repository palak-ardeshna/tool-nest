import type { Article } from "@/content/types";

import { claudeOpus55VsFable51 } from "@/content/articles/claude-opus-5-5-vs-fable-5-1";
import { connectGmailCalendarDriveToClaudePro } from "@/content/articles/connect-gmail-calendar-drive-to-claude-pro";

/** Every article in the publication. Add a file above, then a line here. */
export const articles: Article[] = [
  connectGmailCalendarDriveToClaudePro,
  claudeOpus55VsFable51,
];
