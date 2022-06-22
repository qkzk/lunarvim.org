import{e as a}from"./app.24fe9f27.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var n="/assets/lunarvim_initialization.7aeb6819.png";const o={},r=a('<h1 id="under-the-hood" tabindex="-1"><a class="header-anchor" href="#under-the-hood" aria-hidden="true">#</a> Under the Hood</h1><h1 id="logic-from-start-to-window-load" tabindex="-1"><a class="header-anchor" href="#logic-from-start-to-window-load" aria-hidden="true">#</a> Logic from start to window load</h1><p><img src="'+n+`" alt="LunarVim initialization flowchart" title="LunarVim initialization flowchart"></p><p>The above chart was made with the following markdown using mermaid markdown Last updated Wed Aug 4 10:04:27 PM CEST 2021</p><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TD
  rtp<span class="token text string">[Set runtime path]</span> <span class="token arrow operator">--&gt;</span> config_check<span class="token text string">[Ensure user config exists]</span>
  config_check <span class="token arrow operator">--</span> lv-config.lua <span class="token arrow operator">--&gt;</span> print_rename_message<span class="token text string">[&quot;Print a message asking user to rename file&quot;]</span>
  config_check <span class="token arrow operator">--</span> config.lua <span class="token arrow operator">--&gt;</span> load_defaults<span class="token text string">[Load default_config]</span>
  print_rename_message <span class="token arrow operator">--&gt;</span> load_defaults
  load_defaults <span class="token arrow operator">--&gt;</span> load_lvim<span class="token text string">[Load lvim globals: builtin, lsp, diagnostics, misc]</span>
  load_lvim <span class="token arrow operator">--&gt;</span> load_lsp<span class="token text string">[Load lsp file]</span>
  load_lsp <span class="token arrow operator">--&gt;</span> load_common_on_attach<span class="token text string">( Load common_on_attach for use in lang configuration )</span>
  load_common_on_attach <span class="token arrow operator">--&gt;</span> load_common_capabilities<span class="token text string">( Load common_capabilities for use in lang configuration)</span>
  load_common_capabilities <span class="token arrow operator">--&gt;</span> load_common_on_init<span class="token text string">( Set common_on_init for use in lang configuration )</span>
  load_common_on_init <span class="token arrow operator">--&gt;</span> load_json<span class="token text string">[Load Json schemas]</span>
  load_json <span class="token arrow operator">--&gt;</span> load_lang<span class="token text string">[Load lvim globals: lang]</span>
  load_lang <span class="token arrow operator">--&gt;</span> load_keymappings<span class="token text string">[Load Keymappings data but don&#39;t set Keymappings]</span>
  load_keymappings <span class="token arrow operator">--&gt;</span> load_builtin_configs<span class="token text string">[Load configuration for builtin plugins]</span>
  load_builtin_configs <span class="token arrow operator">--&gt;</span> load_autocommands<span class="token text string">[Load autocommands but don&#39;t set them]</span>
  load_autocommands <span class="token arrow operator">--&gt;</span> set_default_options<span class="token text string">( Set the default options for the neovim editor )</span>
  set_default_options <span class="token arrow operator">--&gt;</span> load_user_config<span class="token text string">[Load user configuration file]</span>
  load_user_config <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">status ok</span> <span class="token arrow operator">--&gt;</span></span> set_nvim_settings<span class="token text string">[Set neovim settings]</span>
  load_user_config <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">status fail</span> <span class="token arrow operator">--&gt;</span></span> print_user_config_error<span class="token text string">[&quot;Print something is wrong with your config&quot;]</span>
  print_user_config_error <span class="token arrow operator">--&gt;</span> set_nvim_settings
  set_nvim_settings <span class="token arrow operator">--&gt;</span> define_autogroups<span class="token text string">[Define autogroups]</span>
  define_autogroups <span class="token arrow operator">--&gt;</span> setup_plugins<span class="token text string">[Setup Plugins]</span>
  setup_plugins <span class="token arrow operator">--&gt;</span> plugin_callback_check<span class="token text string">[&quot;Is there a callback set for lvim.builtin.&lt;plugin&gt;?&quot;]</span>
  plugin_callback_check <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">Yes</span> <span class="token arrow operator">--&gt;</span></span> plugin_callback<span class="token text string">[&quot;Call the callback for the plugin&quot;]</span>
  plugin_callback_check <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">No</span> <span class="token arrow operator">--&gt;</span></span> colorscheme<span class="token text string">[Set the colorscheme]</span>
  plugin_callback <span class="token arrow operator">--&gt;</span> colorscheme
  colorscheme <span class="token arrow operator">--&gt;</span> autoformat<span class="token text string">[Is format on save enabled?]</span>
  autoformat <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">yes</span> <span class="token arrow operator">--&gt;</span></span> autoformat_active<span class="token text string">[Set an autocommand to enable autoformatting]</span>
  autoformat <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">no</span> <span class="token arrow operator">--&gt;</span></span> autoformat_disabled<span class="token text string">[Look for an autoformat autocommand and remove it if it exists]</span>
  autoformat_active <span class="token arrow operator">--&gt;</span> core_commands<span class="token text string">[Load core.commands: QuickFixToggle]</span>
  autoformat_disabled <span class="token arrow operator">--&gt;</span> core_commands
  core_commands <span class="token arrow operator">--&gt;</span> lsp_handlers<span class="token text string">[&quot;Set up lsp handlers: publishDiagnostics, hover, signatureHelp&quot;]</span>
  lsp_handlers <span class="token arrow operator">--&gt;</span> null-ls<span class="token text string">[&quot;Add null-ls as a language server in lspconfig&quot;]</span>
  null-ls <span class="token arrow operator">--&gt;</span> nlsp<span class="token text string">[&quot;Set up NlspSettings&quot;]</span>
  nlsp <span class="token arrow operator">--&gt;</span> set_keymappings<span class="token text string">[&quot;Apply default keymappings&quot;]</span>
  set_keymappings <span class="token arrow operator">--&gt;</span> override_keymaps<span class="token text string">[&quot;Append to default keymappings&quot;]</span>
  override_keymaps <span class="token arrow operator">--&gt;</span> setup_common_on_init<span class="token text string">[&quot;Setup common_on_init&quot;]</span>
  setup_common_on_init <span class="token arrow operator">--&gt;</span> common_on_init_callback_check<span class="token text string">[&quot;Does a common on init callback exist?&quot;]</span>
  common_on_init_callback_check <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">Yes</span> <span class="token arrow operator">--&gt;</span></span> common_on_init_callback<span class="token text string">[&quot;Call the callback&quot;]</span>
  common_on_init_callback_check <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">No</span> <span class="token arrow operator">--&gt;</span></span> check_for_formatters<span class="token text string">[&quot;Check if formatters are explicitly set&quot;]</span>
  common_on_init_callback <span class="token arrow operator">--&gt;</span> check_for_formatters
  check_for_formatters <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">Yes</span> <span class="token arrow operator">--&gt;</span></span> turn_off_lsp_formatting<span class="token text string">[&quot;Turn off resolved_capabilities.document_formatting&quot;]</span>
  turn_off_lsp_formatting <span class="token arrow operator">--&gt;</span> setup_common_on_attach<span class="token text string">[&quot;Setup common on attach&quot;]</span>
  setup_common_on_attach <span class="token arrow operator">--</span> Has an lsp.on_attach_callback   <span class="token arrow operator">--&gt;</span> call_lsp_on_attach_callback<span class="token text string">[&quot;Call lsp on_attach callback&quot;]</span>
  check_for_formatters <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">No</span> <span class="token arrow operator">--&gt;</span></span>  setup_common_on_attach
  setup_common_on_attach <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">No callback defined</span> <span class="token arrow operator">--&gt;</span></span> smart_cwd_check<span class="token text string">[&quot;Is lvim.lsp.smart_cwd set to true?&quot;]</span>
  smart_cwd_check <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">True</span> <span class="token arrow operator">--&gt;</span></span> query_lsp_for_cwd<span class="token text string">[&quot;Use root directory from LSP&quot;]</span>
  smart_cwd_check <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">False</span> <span class="token arrow operator">--&gt;</span></span> setup_null_ls<span class="token text string">[&quot;Setup null-ls formatters and linters&quot;]</span>
  setup_null_ls <span class="token arrow operator">--&gt;</span> validate_provider_request<span class="token text string">[&quot;Does a valid provider exist?&quot;]</span>
  query_lsp_for_cwd <span class="token arrow operator">--&gt;</span> setup_null_ls
  call_lsp_on_attach_callback <span class="token arrow operator">--&gt;</span> smart_cwd_check
  validate_provider_request <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">nil or empty provider</span> <span class="token arrow operator">--&gt;</span></span> lsp_setup<span class="token text string">[&quot;Setup LSP&quot;]</span>
  validate_provider_request <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">Executable exists</span> <span class="token arrow operator">--&gt;</span></span> is_provider_eslint<span class="token text string">[&quot;Is provider eslint?&quot;]</span>
  is_provider_eslint <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">Yes</span> <span class="token arrow operator">--&gt;</span></span> replace_with_eslintd<span class="token text string">[&quot;Replace it with eslint_d&quot;]</span>
  replace_with_eslintd <span class="token arrow operator">--&gt;</span>  add_provider_to_table<span class="token text string">[&quot;Add it to the provider to a table&quot;]</span>
  is_provider_eslint <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">No</span> <span class="token arrow operator">--&gt;</span></span> add_provider_to_table
  validate_provider_request <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">Executable does not exist</span> <span class="token arrow operator">--&gt;</span></span> print_provider_error<span class="token text string">[&quot;Print error about not being able to find formatting executable&quot;]</span>
  add_provider_to_table <span class="token arrow operator">--&gt;</span> lsp_setup
  print_provider_error <span class="token arrow operator">--&gt;</span> lsp_setup
  lsp_setup <span class="token arrow operator">--&gt;</span> lsp_override_check<span class="token text string">[&quot;Is there an lvim.lsp.automatic_configuration.skipped_servers set?&quot;]</span>
  lsp_override_check <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">Yes</span> <span class="token arrow operator">--&gt;</span></span> lsp_override<span class="token text string">[&quot;Use the override table&quot;]</span>
  lsp_override_check <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">No</span> <span class="token arrow operator">--&gt;</span></span> first_window_load<span class="token text string">[&quot;First window loads&quot;]</span>
  lsp_override <span class="token arrow operator">--&gt;</span> first_window_load
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div>`,5);function t(e,p){return r}var i=s(o,[["render",t]]);export{i as default};
