import{_ as l,c as i,a as e,b as o,t as n,d as t,o as s}from"./app.408bd521.js";const w=JSON.parse('{"title":"Sync all your reading to Logseq","description":"","frontmatter":{"title":"Sync all your reading to Logseq","editLink":true},"headers":[{"level":2,"title":"Demonstration","slug":"demonstration","link":"#demonstration","children":[]},{"level":2,"title":"Setting up the Omnivore Logseq plugin","slug":"setting-up-the-omnivore-logseq-plugin","link":"#setting-up-the-omnivore-logseq-plugin","children":[]},{"level":2,"title":"Customizing which data is synced from Omnivore to Logseq","slug":"customizing-which-data-is-synced-from-omnivore-to-logseq","link":"#customizing-which-data-is-synced-from-omnivore-to-logseq","children":[]},{"level":2,"title":"Controlling the layout of the data imported to Logseq","slug":"controlling-the-layout-of-the-data-imported-to-logseq","link":"#controlling-the-layout-of-the-data-imported-to-logseq","children":[{"level":3,"title":"Mustache template language","slug":"mustache-template-language","link":"#mustache-template-language","children":[]},{"level":3,"title":"Variables available to the article template","slug":"variables-available-to-the-article-template","link":"#variables-available-to-the-article-template","children":[]},{"level":3,"title":"Variables available to the highlight template","slug":"variables-available-to-the-highlight-template","link":"#variables-available-to-the-highlight-template","children":[]},{"level":3,"title":"Function map for both article and highlight templates","slug":"function-map-for-both-article-and-highlight-templates","link":"#function-map-for-both-article-and-highlight-templates","children":[]},{"level":3,"title":"Importing the Full Article Content","slug":"importing-the-full-article-content","link":"#importing-the-full-article-content","children":[]}]},{"level":2,"title":"Sync articles into a specific Logseq page","slug":"sync-articles-into-a-specific-logseq-page","link":"#sync-articles-into-a-specific-logseq-page","children":[]},{"level":2,"title":"Scheduled Sync","slug":"scheduled-sync","link":"#scheduled-sync","children":[]},{"level":2,"title":"Community Guides","slug":"community-guides","link":"#community-guides","children":[]}],"relativePath":"integrations/logseq.md","lastUpdated":1684500012000}'),r={name:"integrations/logseq.md"},h={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=t('<p>Omninove integrates with Logseq via the <a href="https://github.com/omnivore-app/logseq-omnivore" target="_blank" rel="noreferrer">logseq-omnivore</a> plugin. The plugin allows for customizing the data synced from Omnivore to Logseq, controlling the layout of the data, and the sync frequency.</p><nav class="table-of-contents"><ul><li><a href="#demonstration">Demonstration</a></li><li><a href="#setting-up-the-omnivore-logseq-plugin">Setting up the Omnivore Logseq plugin</a></li><li><a href="#customizing-which-data-is-synced-from-omnivore-to-logseq">Customizing which data is synced from Omnivore to Logseq</a></li><li><a href="#controlling-the-layout-of-the-data-imported-to-logseq">Controlling the layout of the data imported to Logseq</a><ul><li><a href="#mustache-template-language">Mustache template language</a></li><li><a href="#variables-available-to-the-article-template">Variables available to the article template</a></li><li><a href="#variables-available-to-the-highlight-template">Variables available to the highlight template</a></li><li><a href="#function-map-for-both-article-and-highlight-templates">Function map for both article and highlight templates</a></li><li><a href="#importing-the-full-article-content">Importing the Full Article Content</a></li></ul></li><li><a href="#sync-articles-into-a-specific-logseq-page">Sync articles into a specific Logseq page</a></li><li><a href="#scheduled-sync">Scheduled Sync</a></li><li><a href="#community-guides">Community Guides</a></li></ul></nav><h2 id="demonstration" tabindex="-1">Demonstration <a class="header-anchor" href="#demonstration" aria-hidden="true">#</a></h2>',3),p=e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Cc6DbBtOs14",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),g=t(`<h2 id="setting-up-the-omnivore-logseq-plugin" tabindex="-1">Setting up the Omnivore Logseq plugin <a class="header-anchor" href="#setting-up-the-omnivore-logseq-plugin" aria-hidden="true">#</a></h2><ul><li>Search the Logseq Marketplace for Omnivore and install the plugin</li><li>In your browser open <a href="https://omnivore.app/settings/api" target="_blank" rel="noreferrer">https://omnivore.app/settings/api</a> and create an API token (see <a href="./api.html">API</a> for more info on creating a token)</li><li>In Logseq open the Omnivore Plugin Settings, and paste your API key</li></ul><h2 id="customizing-which-data-is-synced-from-omnivore-to-logseq" tabindex="-1">Customizing which data is synced from Omnivore to Logseq <a class="header-anchor" href="#customizing-which-data-is-synced-from-omnivore-to-logseq" aria-hidden="true">#</a></h2><p><a href="./images/logseq-sync-filter.png">Logseq Sync Filter</a></p><p>The Omnivore Logseq plugin offers three options for which data is imported:</p><ul><li>import all my articles: This will import every article you save to Omnivore and the labels (tags), highlights, and notes you have added to the article.</li><li>import just highlights: This will import every article you have saved that has highlights</li><li>advanced: This allows you to define a search filter to import. For example, import just Newsletters by using <code>label:Newsletter</code>.</li></ul><h2 id="controlling-the-layout-of-the-data-imported-to-logseq" tabindex="-1">Controlling the layout of the data imported to Logseq <a class="header-anchor" href="#controlling-the-layout-of-the-data-imported-to-logseq" aria-hidden="true">#</a></h2><p>The Omnivore Logseq plugin uses the <a href="https://mustache.github.io/" target="_blank" rel="noreferrer">mustache</a> template language to define how imported data is saved to Logseq. The plugin settings allow you to define the template for a article layout and the highlight layout. The default templates will be used if you do not define your own.</p><h3 id="mustache-template-language" tabindex="-1">Mustache template language <a class="header-anchor" href="#mustache-template-language" aria-hidden="true">#</a></h3><p>Mustache is a simple and logic-less templating language that allows you to create templates that are easy to read and maintain. Mustache templates consist of tags, which are placeholders that are replaced with actual values when the template is rendered.</p><p>There are several types of Mustache tags, including:</p><div><ul><li><code>{{ variable }}</code>: Renders the value of a variable.</li><li><code>{{# section }}</code> ... <code>{{/ section }}</code>: Renders a section of the template if the value of the section is true, such as an array or an object.</li><li><code>{{^ inverted section }}</code> ... <code>{{/ inverted section }}</code>: Renders a section of the template if the value of the section is false.</li><li><code>{{! comment }}</code>: Adds a comment to the template, which is ignored when the template is rendered.</li></ul><p>In addition to the basic Mustache tags, there are also several built-in Mustache functions that you can use in your templates, such as:</p><ul><li><code>{{# list }}</code> ... <code>{{/ list }}</code>: Renders a section of the template for each item in a list.</li><li><code>{{^ emptyList }}</code> ... <code>{{/ emptyList }}</code>: Renders a section of the template if a list is not empty.</li><li><code>{{&amp; variable }}</code> or <code>{{{ variable }}}</code>: Renders the value of a variable without escaping HTML characters.</li><li><code>{{&gt; partial }}</code>: Renders a partial template, which is a reusable template that can be included in other templates.</li></ul></div><h3 id="variables-available-to-the-article-template" tabindex="-1">Variables available to the article template <a class="header-anchor" href="#variables-available-to-the-article-template" aria-hidden="true">#</a></h3><ul><li>title: The title of the article * (required)</li><li>omnivoreUrl: The URL of the article in Omnivore * (required)</li><li>siteName: The name of the site the article was saved from</li><li>originalUrl: The URL of the original article</li><li>author: The author of the article</li><li>dateSaved: The date the article was saved to Omnivore in your perferrred date format with double brackets around it, for example <code>[[2021-01-01]]</code></li><li>description: The description of the article</li><li>content: The content of the article in Markdown format</li><li>labels: A list of labels attached to the page <ul><li>name: The name of the label, for example <code>Newsletter</code></li></ul></li><li>note: The note attached to the article</li><li>type: The type of page, for example <code>ARTICLE</code> or <code>FILE</code></li><li>datePublished: The date the article was published in your perferrred date format with double brackets around it, for example <code>[[2021-01-01]]</code></li><li>dateRead: The date the article was read in your perferrred date format with double brackets around it, for example <code>[[2021-01-01]]</code></li><li>rawDatePublished: The date the article was published in your perferrred date format</li><li>rawDateRead: The date the article was read in your perferrred date format</li><li>state: The state of the article, for example <code>READING</code> or <code>COMPLETED</code></li><li>wordsCount: The number of words in the article</li><li>readLength: The length of time it took to read the article in minutes</li><li>dateArchived: The date the article was archived in your perferrred date format</li></ul><p>Default article template:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[{{{title}}}]({{{omnivoreUrl}}})</span></span>
<span class="line"><span style="color:#A6ACCD;">collapsed:: true</span></span>
<span class="line"><span style="color:#A6ACCD;">site:: {{#siteName}}[{{{siteName}}}]{{/siteName}}({{{originalUrl}}})</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#author}}</span></span>
<span class="line"><span style="color:#A6ACCD;">author:: {{{author}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/author}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#labels.length}}</span></span>
<span class="line"><span style="color:#A6ACCD;">labels:: {{#labels}}[[{{{name}}}]]{{/labels}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/labels.length}}</span></span>
<span class="line"><span style="color:#A6ACCD;">date-saved:: {{{dateSaved}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#datePublished}}</span></span>
<span class="line"><span style="color:#A6ACCD;">date-published:: {{{datePublished}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/datePublished}}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="variables-available-to-the-highlight-template" tabindex="-1">Variables available to the highlight template <a class="header-anchor" href="#variables-available-to-the-highlight-template" aria-hidden="true">#</a></h3><ul><li>text: The text of the highlight</li><li>labels: A list of labels attached to the highlight <ul><li>name: The name of the label, for example <code>Newsletter</code></li></ul></li><li>highlightUrl: The URL of the highlight in Omnivore</li><li>dateHighlighted: The date the highlight was created in your perferrred date format with double brackets around it, for example <code>[[2021-01-01]]</code></li><li>rawDateHighlighted: The date the highlight was created in your perferrred date format</li><li>note: The note attached to the highlight</li></ul><p>Default highlight template:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&gt; {{{text}}} [⤴️]({{{highlightUrl}}}) {{#labels}} #[[{{{name}}}]] {{/labels}}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{{#note.length}}note:: {{{note}}} {{/note.length}}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="function-map-for-both-article-and-highlight-templates" tabindex="-1">Function map for both article and highlight templates <a class="header-anchor" href="#function-map-for-both-article-and-highlight-templates" aria-hidden="true">#</a></h3><ul><li>lowerCase: Converts a string to lowercase</li><li>upperCase: Converts a string to uppercase</li><li>upperCaseFirst: Converts the first character of a string to uppercase</li></ul><p>Example of using a function in a template to convert the state of an article to lowerCase:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">state:: [[{{#lowerCase}}{{state}}{{/lowerCase}}]]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="importing-the-full-article-content" tabindex="-1">Importing the Full Article Content <a class="header-anchor" href="#importing-the-full-article-content" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">Full content import does not work for PDFs</p></div><p>The content of articles is converted to Markdown before import, this means we need them to avoid HTML escaping when being inserted into Logseq. To do this, use the triple Mustache syntax. Any highlights that you have created in Omnivore will be rendered as Markdown highlights. So to import the full article content:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{{{ content }}}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="sync-articles-into-a-specific-logseq-page" tabindex="-1">Sync articles into a specific Logseq page <a class="header-anchor" href="#sync-articles-into-a-specific-logseq-page" aria-hidden="true">#</a></h2><div><p>By default, Omnivore will sync articles into a Logseq page called <code>Omnivore</code>. You can change this by unchecking <code>isSinglePage</code> and changing the <code>pageName</code> to <code>{{{title}}}</code> or <code>{{{date}}}</code> in your settings. For example, if you want to sync articles into the journal, you would use <code>{{{date}}}</code> as the <code>pageName</code>.</p></div><h2 id="scheduled-sync" tabindex="-1">Scheduled Sync <a class="header-anchor" href="#scheduled-sync" aria-hidden="true">#</a></h2><p>By default, Omnivore does not automatically sync your data. You can enable scheduled sync by entering a number of minutes in the <strong>Frequency</strong> setting. For example, if you enter <code>60</code>, Omnivore will sync your data every hour and you can always turn it off by entering <code>0</code>.</p><h2 id="community-guides" tabindex="-1">Community Guides <a class="header-anchor" href="#community-guides" aria-hidden="true">#</a></h2><ul><li><a href="https://briansunter.com/graph/#/page/omnivore-logseq-guide?anchor=ls-block-62b28de3-0e9e-456e-bf29-7e2541213aa5" target="_blank" rel="noreferrer">omnivore-logseq-guide</a> -- A helpful setup and usage guide written by <a href="https://briansunter.com/" target="_blank" rel="noreferrer">Brian Sunter</a>.</li><li>Chinese translation: <a href="https://sywhb.github.io/#/page/omnivore-logseq%20%E6%8C%87%E5%8D%97" target="_blank" rel="noreferrer">omnivore-logseq-guide</a></li></ul>`,34);function u(a,m,f,y,b,v){return s(),i("div",null,[e("h1",h,[o(n(a.$frontmatter.title)+" ",1),c]),d,p,g])}const A=l(r,[["render",u]]);export{w as __pageData,A as default};