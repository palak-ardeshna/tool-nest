import type { Article } from "@/content/types";

import { aiAppBuildersBeforeYouHireADeveloper } from "@/content/articles/ai-app-builders-before-you-hire-a-developer";
import { aiResearchToolsAndYourSources } from "@/content/articles/ai-research-tools-and-your-sources";
import { aiBrowserAgentsAfterAtlas } from "@/content/articles/ai-browser-agents-after-atlas";
import { aiMeetingNotetakersCompared } from "@/content/articles/ai-meeting-notetakers-compared";
import { chatgptVsClaudeForCoding } from "@/content/articles/chatgpt-vs-claude-for-coding";
import { claudeOpus55VsFable51 } from "@/content/articles/claude-opus-5-5-vs-fable-5-1";
import { connectGmailCalendarDriveToClaudePro } from "@/content/articles/connect-gmail-calendar-drive-to-claude-pro";
import { passwordManagersAfterThePriceRises } from "@/content/articles/password-managers-after-the-price-rises";
import { shouldYouLetAnAiAgentUseYourBrowser } from "@/content/articles/should-you-let-an-ai-agent-use-your-browser";
import { whichAiAssistantIsWorthPayingFor } from "@/content/articles/which-ai-assistant-is-worth-paying-for";

/** Every article in the publication. Add a file above, then a line here. */
export const articles: Article[] = [
  connectGmailCalendarDriveToClaudePro,
  claudeOpus55VsFable51,
  shouldYouLetAnAiAgentUseYourBrowser,
  aiMeetingNotetakersCompared,
  aiBrowserAgentsAfterAtlas,
  whichAiAssistantIsWorthPayingFor,
  chatgptVsClaudeForCoding,
  aiAppBuildersBeforeYouHireADeveloper,
  aiResearchToolsAndYourSources,
  passwordManagersAfterThePriceRises,
];
