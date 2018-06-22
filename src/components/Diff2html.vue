<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        sfasdf
      </div>
    </div>
  </div>
</template>
<script>
let Diff2html = require('diff2html').Diff2Html
export default {
  name: 'diff2html',
  created () { },
  mounted () {
    (function () {
      // var diff = 'diff --git a\/README.md b\/README.md\r\nindex 132c8a2..46909f2 100644\r\n--- a\/README.md\r\n+++ b\/README.md\r\n@@ -98,6 +98,9 @@ The HTML output accepts a Javascript object with configuration. Possible options\r\n   - `synchronisedScroll`: scroll both panes in side-by-side mode: `true` or `false`, default is `false`\r\n   - `matchWordsThreshold`: similarity threshold for word matching, default is 0.25\r\n   - `matchingMaxComparisons`: perform at most this much comparisons for line matching a block of changes, default is `2500`\r\n+  - `templates`: object with previously compiled templates to replace parts of the html\r\n+  - `rawTemplates`: object with raw not compiled templates to replace parts of the html\r\n+  > For more information regarding the possible templates look into [src\/templates](https:\/\/github.com\/rtfpessoa\/diff2html\/tree\/master\/src\/templates)\r\n \r\n ## Diff2HtmlUI Helper'
      // diff += ''
      var diffStr = ''
      diffStr += 'diff --git a\/README.md b\/README.md\r\nindex 132c8a2..46909f2 100644\r\n '
      diffStr += '-- a\/README.md\r\n '
      diffStr += '-+++ b\/README.md\r\n@@ -98,6 +98,9 @@ The HTML output accepts a Javascript object with configuration. Possible options\r\n'
      diffStr += '   - `synchronisedScroll`: scroll both panes in side-by-side mode: `true` or `false`, default is `false`\r\n'
      diffStr += '+  - templates: object with previously compiled templates to replace parts of the html\r\n'
      diffStr += '+  - rawTemplates: object with raw not compiled templates to replace parts of the html\r\n'
      diffStr += '+  > For more information regarding the possible templates look into [src\/templates](https:\/\/github.com\/rtfpessoa\/diff2html\/tree\/master\/src\/templates)\r\n'
      diffStr += '-  > For more information regarding the possible templates look into [src\/templates](https:\/\/github.com\/rtfpessoa\/diff2html\/tree\/master\/src\/templates)'
      // diff += ''

      var ht = Diff2Html.getPrettyHtml(diffStr, {
        inputFormat: 'diff',
        // outputFormat: 'side-by-side',
        showFiles: true,
        matching: 'lines'
      })

      document.body.innerHTML = ht
    })()
  }
}
</script>
<style lang="css">
@import 'diff2html/dist/diff2html.min.css';
</style>