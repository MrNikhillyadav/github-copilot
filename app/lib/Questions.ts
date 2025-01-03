
export const General = [
    {
        "id": "1",
        "trigger": "What is GitHub Copilot?",
        "content": "GitHub Copilot transforms the developer experience. Backed by the leaders in AI, Copilot provides contextualized assistance throughout the software development lifecycle, from code completions and chat assistance in the IDE to code explanations and answers to docs in GitHub and more. With Copilot elevating their workflow, developers can focus on more: value, innovation, and happiness.",
    },
    {
        "id": "2",

        "trigger": "Who is eligible to access GitHub Copilot for free?",
        "content": "GitHub Copilot Free is a new free pricing tier with limited functionality for individual developers. Users assigned a Copilot Business or Copilot Enterprise seat are not eligible for access. Users with access to Copilot Pro through a paid subscription, trial, or through an existing verified OSS, Student, Faculty, or MVP account may elect to use Free instead.",
    },
    {
        "id": "3",
        "trigger": "What languages, IDEs, and platforms does GitHub Copilot support?",
        "content": "GitHub Copilot is trained on all languages that appear in public repositories. For each language, the quality of suggestions you receive may depend on the volume and diversity of training data for that language. For example, JavaScript is well-represented in public repositories and is one of GitHub Copilot’s best supported languages. Languages with less representation in public repositories may produce fewer or less robust suggestions.GitHub Copilot is available as an extension in Visual Studio Code, Visual Studio, Vim, Neovim, the JetBrains suite of IDEs, and Azure Data Studio. Although code completion functionality is available across all these extensions, chat functionality is currently available only in Visual Studio Code, JetBrains and Visual Studio. GitHub Copilot is also supported in terminals through GitHub CLI and as a chat integration in Windows Terminal Canary. With the GitHub Copilot Enterprise plan, GitHub Copilot is natively integrated into GitHub.com. All plans are supported in GitHub Copilot in GitHub Mobile. GitHub Mobile for Copilot Pro and Copilot Business have access to Bing and public repository code search. Copilot Enterprise in GitHub Mobile gives you additional access to your organization's knowledge.",
    },
    {
        "id": "4",
        "trigger": "What data has GitHub Copilot been trained on?",
        "content": "GitHub Copilot is powered by generative AI models developed by GitHub, OpenAI, and Microsoft. It has been trained on natural language text and source code from publicly available sources, including code in public repositories on GitHub.",
    },
    {
        "id": "5",
        "trigger": "Which plan includes GitHub Copilot Autofix?",
        "content": "GitHub Copilot Autofix provides contextual explanations and code suggestions to help developers fix vulnerabilities in code, and is included in GitHub Advanced Security.",
    },
];

export const PlansAndPricing = [
    {
        "id": "1",
        "trigger": "What are the differences between the Free, Pro, Business, and Enterprise plans?",
        "content": "GitHub Copilot Pro is designed for individual developers, freelancers, students, educators, and open source maintainers. The plan includes all the features of GitHub Copilot Business except organizational license management, policy management, and IP indemnity",
    },
    {
        "id": "2",
        "trigger": "How can I upgrade my GitHub Copilot Free license to Copilot Pro?",
        "content": "If you're on the Free plan, you can upgrade to Pro through your Copilot settings page or directly on the Copilot marketing page.",
    },
    {
        "id": "3",
        "trigger": "What is included in GitHub Copilot Free?",
        "content": "GitHub Copilot Free users are limited to 2000 completions and 50 chat requests (including Copilot Edits).",
    },
    {
        "id": "4",
        "trigger": "Which plan includes GitHub Copilot Autofix?",
        "content": "GitHub Copilot Autofix provides contextual explanations and code suggestions to help developers fix vulnerabilities in code, and is included in GitHub Advanced Security and available to all public repositories.",
    },
    
];

export const Privacy = [
    {
        "id": "1",
        "trigger": "What personal data does GitHub Copilot process?",
        "content": "GitHub Copilot processes personal data based on how Copilot is accessed and used: whether via GitHub.com, mobile app, extensions, or one of various IDE extensions, or through features like suggestions for the command line interface (CLI), IDE code completions, or personalized chat on GitHub.com. The types of personal data processed may include: User Engagement Data: This includes pseudonymous identifiers captured on user interactions with Copilot, such as accepted or dismissed completions, error messages, system logs, and product usage metrics. Prompts: These are inputs for chat or code, along with context, sent to Copilot's AI to generate suggestions."
    },
    {
        "id": "2",
        "trigger": "Does GitHub use Copilot Business or Enterprise data to train GitHub’s model?",
        "content": "No. GitHub does not use either Copilot Business or Enterprise data to train its models.",
    },
    {
        "id": "3",
        "trigger": "How does GitHub use the Copilot data?",
        "content": "How does GitHub use the Copilot data? How GitHub uses Copilot data depends on how the user accesses Copilot and for what purpose. Users can access GitHub Copilot through the web, extensions, mobile apps, computer terminal, and various IDEs (Integrated Development Environments). GitHub generally uses personal data to:",
    },
    {
        "id": "4",
        "trigger": "How long does GitHub retain Copilot data for Business and Enterprise customers?",
        "content": "If and for how long GitHub’s retains Copilot data depends on how a Copilot user accesses Copilot and for what purpose. The default settings for Copilot Business and Enterprise Customers are as follows.",
    },
    {
        "id": "5",
        "trigger": "Why do some Copilot features retain prompts and suggestions?",
        "content": "Retaining prompts and suggestions is necessary for chat on github.com, mobile, and CLI Copilot because those features’ effectiveness depends on using thread history to improve responses. The Copilot model requires access to previous interactions to deliver accurate and relevant suggestions. ",
    },
    {
        "id": "6",
        "trigger": "Does GitHub Copilot support compliance with the GDPR and other data protection laws?",
        "content": "Yes. GitHub and customers can enter a Data Protection Agreement that supports compliance with the GDPR and similar legislation. ",
    },
    {
        "id": "7",
        "trigger": "Does GitHub Copilot ever output personal data?",
        "content": "While we've designed GitHub Copilot with privacy in mind, the expansive definition of personal data under legislation like the EU’s General Data Protection Regulation (GDPR) means we can't guarantee it will never output such data. The Large Language Model (LLM) powering GitHub Copilot was trained on public code and there were instances in our tests where the tool made suggestions resembling personal data. These suggestions were typically synthesized and not tied to real individuals.  ",
    },
    {
        "id": "8",
        "trigger": "How does Copilot allow users to access, alter or delete personal data?",
        "content": "These actions are available to Copilot users as described in the GitHub Privacy Statement.",
    },
];

export const ResponsibleAI = [
    {
        "id": "1",
        "trigger": "What are the intellectual property considerations when using GitHub Copilot?",
        "content": "Copyright law permits the use of copyrighted works to train AI models:  Countries around the world have provisions in their copyright laws that enable machines to learn, understand, extract patterns, and facts from copyrighted materials, including software code. For example, the European Union, Japan, and Singapore, have express provisions permitting machine learning to develop AI models. Other countries including Canada, India, and the United States also permit such training under their fair use/fair dealing provisions. GitHub Copilot’s AI model was trained with the use of code from GitHub’s public repositories—which are publicly accessible and within the scope of permissible copyright use.",
    },
    {
        "id": "2",
        "trigger": "Does GitHub Copilot include a filtering mechanism to mitigate risk?",
        "content": "GitHub has created a duplication detection filter to detect and suppress suggestions that contain code segments over a certain length that match public code on GitHub. This filter can be enabled by the administrator for your enterprise and it can apply for all organizations within your enterprise, or the administrator can defer control to individual organizations. ",
    },
    {
        "id": "3",
        "trigger": "Does GitHub Copilot include features to make it easier for users to identify potentially relevant open source licenses for matching suggestions?",
        "content": "Yes, GitHub Copilot is previewing a code referencing feature as an additional tool to assist users to find and review potentially relevant open source licenses. Code referencing is currently available in Visual Studio Code. This feature searches across public GitHub repositories for code that matches a Copilot suggestion. If there’s a match, users will find its information displayed in the Copilot console log, including where the match occurred, any applicable licenses, and a deep link to learn more. The deep link will take users to a navigable page on GitHub.com to browse examples of the code match and their repository licenses, and see how many repositories—including ones without licenses—that code appears in, as well as links to those repositories. Copilot users can review this information to determine whether the applicable suggestions are suitable for use, and whether additional measures may be necessary to use them.",
    },
    {
        "id": "4",
        "trigger": "Who owns the suggestions provided by GitHub Copilot?",
        "content": "GitHub does not claim ownership of any suggestion. In certain cases, it is possible for Copilot to produce similar suggestions to different users. For example, two unrelated users both starting new files to code the quicksort algorithm in Java will likely get the same suggestion. The possibility of providing similar suggestions to multiple users is a common part of generative AI systems.",
    },
    {
        "id": "5",
        "trigger": "Can GitHub Copilot introduce insecure code in its suggestions?",
        "content": "Public code may contain insecure coding patterns, bugs, or references to outdated APIs or idioms. When GitHub Copilot synthesizes code suggestions based on this data, it can also synthesize code that contains these undesirable patterns. Copilot has filters in place that either block or notify users of insecure code patterns that are detected in Copilot suggestions. These filters target the most common vulnerable coding patterns, including hardcoded credentials, SQL injections, and path injections. Additionally, in recent years we’ve provided tools such as GitHub Advanced Security, GitHub Actions, Dependabot, and CodeQL to open source projects to help improve code quality. Of course, you should always use GitHub Copilot together with good testing and code review practices and security tools, as well as your own judgment.",
    },
    {
        "id": "6",
        "trigger": "Is GitHub Copilot intended to fully automate code generation and replace developers?",
        "content": "No. Copilot is a tool intended to make developers more efficient. It’s not intended to replace developers, who should continue to apply the same sorts of safeguards and diligence they would apply with regard to any third-party code of unknown origin.",
    },
    {
        "id": "7",
        "trigger": "Can GitHub Copilot users simply use suggestions without concern?",
        "content": "As noted above, GitHub Copilot is not intended to replace developers, or their individual skill and judgment, and is not intended to fully automate the process of code development. The same risks that apply to the use of any third-party code apply to the use of Copilot’s suggestions.",
    },
    {
        "id": "8",
        "trigger": "Will GitHub Copilot work as well using languages other than English?",
        "content": "Given public sources are predominantly in English, GitHub Copilot will likely work less well in scenarios where natural language prompts provided by the developer are not in English and/or are grammatically incorrect. Therefore, non-English speakers might experience a lower quality of service.",
    },
];