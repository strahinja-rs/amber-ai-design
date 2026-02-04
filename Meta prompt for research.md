**Meta-prompt template:**

```
The research goal is [RESEARCH GOAL].

Think about the research goal, what do you need to know about it.

We won't do the research inside this conversation, but elsewhere.
Here, we're going to write prompts for doing the research. And then
I'll return the research outputs here for analysis.

First, please deeply understand our research goal and think what
else we need to understand it.

Second, take the following how-tos into account:

[INSERT TOOL-SPECIFIC HOW-TOS]

Third, write the prompts to execute our research goal. Give me
just the prompts, and once I get back with the research outputs,
we'll continue.
```

### Tool Roles

#### Gemini Deep Research
**Strength:** Breadth. Finding sources. Landscape mapping. Identifying what exists.

**How it works:** Agentic loop — decomposes your query into sub-tasks, runs ~80 search queries, reads snippets from 100+ sources, synthesizes a report. Shows you a research plan you can edit before execution runs.

**Best for:** Landscape questions. "What exists in X area?" "Who is working on Y?" "What are the major frameworks for Z?"

**Limitations:**
- The Snippet Trap: often reads snippets, not full pages. "100 sources" may mean 100 snippets.
- Academic blindspot: can't access paywalled journals (JSTOR, ACM Digital Library, etc.)
- Hallucination of consensus: if 5 low-quality blogs say the same wrong thing, it treats that as verified
- Synthesis ceiling: good at aggregating, weaker at genuine analysis
- AI slop in writing style: confident prose that exceeds the confidence of the actual claims

**Prompting guidance:**
- State objective clearly and specifically
- Define scope: time frames, geographic regions, thematic focus
- Assign a role/perspective if helpful
- Specify output format: structured report with headings, tables, citations
- Break complex objectives into sub-questions
- Use negative constraints: "Do NOT use blogs. Only primary sources."
- Use conflict resolution framing: "You will find conflicting data. Do not average — explain the conflict."
- **Review and edit the research plan before execution** — this is your main steering point

#### Claude Research (claude.ai)
**Strength:** Structured analysis. Deeper on specific areas. Better source selection.

**How it works:** Agentic — conducts multiple searches that build on each other, determines what to investigate next, explores different angles automatically.

**Best for:** Specific/analytical questions. "What does the research say about X?" "Compare these frameworks." "What are the concrete design patterns for Y?"

**Limitations:**
- Same paywall blindspot as Gemini
- Can be less comprehensive in source coverage than Gemini
- Uses up conversation limits faster than normal chat

**Prompting guidance:**
- Be clear, direct, and specific
- Use XML-style tags (<context>, <task>, <requirements>) to organize prompt sections
- Break complex research into sequential sub-questions
- Specify exact output format
- Ask for confidence levels and areas of uncertainty
- Ask for competing hypotheses
- Include background context and constraints

**Access note:** Claude Research is a paid feature (Pro, Max, Team, Enterprise) on claude.ai. Requires web search to be enabled. Not available in Claude Code.

#### Claude Code (Terminal)
**Not a research tool.** Claude Code is the vault analyst and thinking partner.

**Strength:** Reading files, creating notes, analyzing research outputs, working through ideas, infrastructure.

**Role in the process:**
- Writes research prompts (meta-prompt step)
- Analyzes research outputs after you bring them back
- Identifies what's useful vs. filler in research outputs
- Creates concept notes from your observations
- Manages vault infrastructure (files, frontmatter, links, tags)
- Asks questions to push your thinking
- Does NOT synthesize or write original analysis for you

**Web capabilities:** Has WebSearch (shallow — returns snippets) and WebFetch (reads one URL at a time). Useful for quick lookups, not for deep research.

#### The Human
**The actual researcher.** Tools find material and organize it. You do the thinking.

**Your role:**
- Formulate the question (Step 1)
- Review and edit research plans before execution
- Read the outputs and react
- Capture observations in the session log
- Make the judgment calls: what matters, what connects, what's original
- Write the core insights for concept notes (even 2-3 sentences)