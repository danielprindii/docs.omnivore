import{_ as i,c as a,a as e,b as o,t as r,d as s,o as n}from"./app.8e8bab01.js";const y=JSON.parse('{"title":"Importing from other Clients","description":"","frontmatter":{"title":"Importing from other Clients","editLink":true},"headers":[{"level":2,"title":"Importing data from Matter","slug":"importing-data-from-matter","link":"#importing-data-from-matter","children":[]},{"level":2,"title":"Importing CSV files","slug":"importing-csv-files","link":"#importing-csv-files","children":[]},{"level":2,"title":"Importing using the API","slug":"importing-using-the-api","link":"#importing-using-the-api","children":[]},{"level":2,"title":"Issues with importing URLs","slug":"issues-with-importing-urls","link":"#issues-with-importing-urls","children":[]}],"relativePath":"using/importing.md","lastUpdated":1693547522000}'),l={name:"using/importing.md"},p={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),m=s(`<p>Omnivore allows importing data from other data sources. When using the import API, you are limited to three imports per a day.</p><p>The maximum file size for an import is 10MB. If your import exceeds this size please email <a href="mailto:feedback@omnivore.app" target="_blank" rel="noreferrer">feedback@omnivore.app</a> for assistance.</p><div class="warning custom-block"><p class="custom-block-title">We highly recommend using Omnivore for a few days before doing an import. This will give you a sense of the features available, how you&#39;d like to structure your labels, and what data you&#39;d like to have available in Omnivore.</p></div><nav class="table-of-contents"><ul><li><a href="#importing-data-from-matter">Importing data from Matter</a></li><li><a href="#importing-csv-files">Importing CSV files</a></li><li><a href="#importing-using-the-api">Importing using the API</a></li><li><a href="#issues-with-importing-urls">Issues with importing URLs</a></li></ul></nav><h2 id="importing-data-from-matter" tabindex="-1">Importing data from Matter <a class="header-anchor" href="#importing-data-from-matter" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">The Matter data importer is currently in beta, if you encounter any issues please notify us at <a href="mailto:feedback@omnivore.app" target="_blank" rel="noreferrer">feedback@omnivore.app</a></p></div><p>Omnivore supports uploading the <code>Archive.zip</code> file generated by exporting your data from the Matter app.</p><p>Import your Matter data using the <a href="https://omnivore.app/tools/import/matter-archive" target="_blank" rel="noreferrer">Import Matter Archive Tool</a>.</p><p>To export your data from Matter, go to My Account, and choose Export data, this will send you an email with your data in a file <code>Archive.zip</code>. Upload that file using the uploader on this page.</p><p>The importer will ingest the URLs listed in the <code>_matter_history.csv</code> file. If the Archive contains an HTML content entry for the URL, the provided content will be used. Otherwise, Omnivore will attempt to refetch the URL.</p><div class="tip custom-block"><p class="custom-block-title">Currently the importer does not support importing highlights and notes from Matter.</p></div><h2 id="importing-csv-files" tabindex="-1">Importing CSV files <a class="header-anchor" href="#importing-csv-files" aria-hidden="true">#</a></h2><p>Omnivore can import a list of URLs supplied as a CSV file. The file should be formated as with five columns and a CSV header, the columns are:</p><ul><li>url: unique URL (full url of the item to be imported).</li><li>state: Either ARCHIVED or SUCCEEDED (set to ARCHIVED to have your item archived on import). If the state is not specified, the item will be imported as SUCCEEDED.</li><li>labels: In the format <code>[Label1, Label2, Label3]</code>, note the square brackets (<code>[</code>,<code>]</code>) around the list of labels. If the item has no labels this column can be empty. Labels can also also be separated with quotes, but due to CSV quote escaping they will need to be doubled, for example: <code>&quot;[&quot;&quot;label1&quot;&quot;,&quot;&quot;label2&quot;&quot;]&quot;</code>. If the item has no labels this column can be empty.</li><li>saved_at: The unix timestamp in milliseconds the item was saved. If the item has no saved_at date, this column can be empty.</li><li>published_at: The unix timestamp in milliseconds the item was published. If the item has no published_at date, this column can be empty.</li></ul><p>Example File:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">url,state,labels,saved_at,published_at</span></span>
<span class="line"><span style="color:#A6ACCD;">https://jacksonh.org,SUCCEEDED,&quot;[Handsome Developers, Profile Page]&quot;,1614556800000,1614556800000</span></span>
<span class="line"><span style="color:#A6ACCD;">https://jacksonh.org/blog,,,,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Once you have a properly structured CSV file, you can drag it into your library on the web to initiate the import. Note that Omnivore has to fetch all the URLs in your import, so its a slow process.</p><h2 id="importing-using-the-api" tabindex="-1">Importing using the API <a class="header-anchor" href="#importing-using-the-api" aria-hidden="true">#</a></h2><p>When importing data using the API, if you have a large number of URLs to import, it is best to use the <code>uploadImportFile</code> vs the <code>savePage</code> APIs.</p><p>The <code>uploadImportFile</code> API accepts a CSV file and performs an import in the background. The <code>savePage</code> API could encounter rate limits if used to import a large number of URLs.</p><p>An example of importing with the <code>uploadImportFile</code> API can be found here: <a href="https://github.com/omnivore-app/import-demo" target="_blank" rel="noreferrer">https://github.com/omnivore-app/import-demo</a></p><h2 id="issues-with-importing-urls" tabindex="-1">Issues with importing URLs <a class="header-anchor" href="#issues-with-importing-urls" aria-hidden="true">#</a></h2><p>When importing, depending on the format of your data, URLs might be refetched by Omnivore. URLs that are no longer available online might fail to be fetched. In this case, an empty entry with just the URL should be added to your library.</p>`,23);function d(t,c,u,f,g,b){return n(),a("div",null,[e("h1",p,[o(r(t.$frontmatter.title)+" ",1),h]),m])}const I=i(l,[["render",d]]);export{y as __pageData,I as default};