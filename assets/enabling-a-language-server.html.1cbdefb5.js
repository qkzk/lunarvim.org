import{r as l,o as t,c as i,a as n,b as a,F as o,e as r,d as e}from"./app.24fe9f27.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const c={},d=r('<h1 id="enabling-language-servers" tabindex="-1"><a class="header-anchor" href="#enabling-language-servers" aria-hidden="true">#</a> Enabling language servers</h1><p>Neovim comes bundled with a language client but not a language server. To install a supported language server:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>:LspInstall <span class="token code-snippet code keyword">`&lt;your_language_server&gt;`</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Autocomplete works here. Type <code>:LspInstall</code>, then hit <code>TAB</code> to see supported language servers</p>',4),u=e("See "),m={href:"https://github.com/kabouzeid/nvim-lspinstall",target:"_blank",rel:"noopener noreferrer"},h=e("LspInstall"),b=e(" for more info."),g=r(`<p>In order for Java LSP to work, edit <code>~/.local/share/nvim/lspinstall/java/jdtls.sh</code> and replace <code>WORKSPACE=&quot;$1&quot;</code> with <code>WORKSPACE=&quot;$HOME/workspace&quot;</code></p><p>Most common languages should be supported out of the box, if yours is not I would welcome a PR</p><h2 id="lsp-errors" tabindex="-1"><a class="header-anchor" href="#lsp-errors" aria-hidden="true">#</a> LSP errors</h2><p>LunarVim lists the attached lsp server in the bottom status bar. If it says \u2018No client connected\u2019 use :LspInfo to troubleshoot.</p><h3 id="understanding-lspinfo" tabindex="-1"><a class="header-anchor" href="#understanding-lspinfo" aria-hidden="true">#</a> Understanding LspInfo</h3><ol><li>Make sure there is a client attached to the buffer. 0 attached clients means lsp is not running</li><li>Active clients are clients in other files you have open</li><li>Clients that match the filetype will be listed. If installed with :LspInstall <code>&lt;servername&gt;</code> the language servers will be installed.</li><li>\u2018cmd\u2019 must be populated. This is the language server executable. If the \u2018cmd\u2019 isn\u2019t set or if it\u2019s not executable you won\u2019t be able to run the language server. <ul><li>In the example below \u2018efm-langserver\u2019 is the name of the binary that acts as the langserver. If we run \u2018which efm-langserver\u2019 and we get a location to the executable, it means the langauge server is installed and available globally.</li><li>If you know the command is installed AND you don\u2019t want to install it globally you\u2019ll need to manually set &#39;cmd&#39; in the language server settings.</li><li>Configurations are stored in ~/.config/nvim/lua/lsp/ The settings will be stored in a file that matches the name of the language. e.g. python-ls.lua</li><li>\u2018identified root\u2019 must also be populated. Most language servers require you be inside a git repository for the root to be detected. If you don\u2019t want to initialize the directory as a git repository, an empty .git/ folder will also work.</li></ul></li><li>Some language servers get set up on a per project basis so you may have to reinstall the language server when you move to a different project.</li></ol><h3 id="example-configurations" tabindex="-1"><a class="header-anchor" href="#example-configurations" aria-hidden="true">#</a> Example configurations</h3><p>[ ======== LSP NOT running ======== ]</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>0 client(s) attached to this buffer:

0 active client(s):

Clients that match the filetype python:

Config: efm
cmd: /Users/my-user/.local/share/nvim/lspinstall/efm/efm-langserver
cmd is executable: True
identified root: None
custom handlers:

Config: pyright
cmd: /Users/my-user/.local/share/nvim/lspinstall/python/node_modules/.bin/pyright-langserver --stdio
cmd is executable: True
identified root: None
custom handlers: textDocument/publishDiagnostics
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><hr><p>[ ======== LSP IS running ======== ]</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>2 client(s) attached to this buffer: pyright, efm

Client: pyright (id 1)
root: /home/my-user/workspace/canary
filetypes: python
cmd: /home/my-user/.local/share/nvim/lspinstall/python/node_modules/.bin/pyright-langserver --stdio

Client: efm (id 2)
root: /home/my-user/workspace/canary
filetypes: lua, python, javascriptreact, javascript, typescript, typescriptreact, sh, html, css, json, yaml, markdown, vue
cmd: /home/my-user/.local/share/nvim/lspinstall/efm/efm-langserver
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="last-resort" tabindex="-1"><a class="header-anchor" href="#last-resort" aria-hidden="true">#</a> Last resort</h3><p>If you still have problems after implementing the above measures, rule out plugin problems with the following. This reinstalls your plugins and language servers.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>rm -rf <span class="token strike"><span class="token punctuation">~</span><span class="token content">/.local/share/lunarvim/site
rm -rf </span><span class="token punctuation">~</span></span>/.local/share/nvim/lspinstall

<span class="token title important"><span class="token punctuation">#</span> Open neovim and run the following</span>

:PackerSync
:LspInstall python <span class="token code-snippet code keyword">\`&lt;-- REPLACE WITH YOUR OWN LANGUAGE\`</span>
:LspInstall efm <span class="token code-snippet code keyword">\`&lt;-- REPLACE WITH YOUR OWN LANGUAGE\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,15),f=e("For a more in depth LSP support: "),v={href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md",target:"_blank",rel:"noopener noreferrer"},y=e("link");function k(w,_){const s=l("ExternalLinkIcon");return t(),i(o,null,[d,n("p",null,[u,n("a",m,[h,a(s)]),b]),g,n("p",null,[f,n("a",v,[y,a(s)])])],64)}var L=p(c,[["render",k]]);export{L as default};
