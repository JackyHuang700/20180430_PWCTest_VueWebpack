<template>
	<div class="wrap">
		<div class="content">
			<div class="product_list">
				<ul>
					<li>
						<a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum labore sequi reiciendis sunt minus repellendus dolorum inventore explicabo! Amet neque in quibusdam maxime obcaecati. Non veritatis corporis blanditiis velit quae?</a>
					</li>
					<li>
						<a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum labore sequi reiciendis sunt minus repellendus dolorum inventore explicabo! Amet neque in quibusdam maxime obcaecati. Non veritatis corporis blanditiis velit quae?</a>
					</li>
					<li>
						<a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum labore sequi reiciendis sunt minus repellendus dolorum inventore explicabo! Amet neque in quibusdam maxime obcaecati. Non veritatis corporis blanditiis velit quae?</a>
					</li>
					<li>
						<a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum labore sequi reiciendis sunt minus repellendus dolorum inventore explicabo! Amet neque in quibusdam maxime obcaecati. Non veritatis corporis blanditiis velit quae?</a>
					</li>
					<li>
						<a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum labore sequi reiciendis sunt minus repellendus dolorum inventore explicabo! Amet neque in quibusdam maxime obcaecati. Non veritatis corporis blanditiis velit quae?</a>
					</li>
					<li>
						<a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum labore sequi reiciendis sunt minus repellendus dolorum inventore explicabo! Amet neque in quibusdam maxime obcaecati. Non veritatis corporis blanditiis velit quae?</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'typesetting'
}
</script>
<style lang="css" scoped>
/* @charset "utf-8"; */
/* CSS Reset */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
}
html {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption,
th,
td {
  text-align: left;
  font-weight: normal;
  vertical-align: middle;
}
q,
blockquote {
  quotes: none;
}
q:before,
q:after,
blockquote:before,
blockquote:after {
  content: '';
  content: none;
}
a img {
  border: none;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary {
  display: block;
}

/* CSS Style */
* {
  transition: all 0.3s linear;
}
.wrap {
  width: 100%;
  max-width: 1003px;
  margin: 0 auto;
  border: 1px solid orange;
}

.product_list:after {
  content: '';
  clear: left;
  display: block;
  height: 0;
}

.product_list li {
  float: left;
  /* 間隔重點 */
  margin: 10px 0.5%;
  background: #f00; /* 紅色背景 */
  height: 300px;
  width: 19%;
}

.product_list li a {
  margin-right: 5px;
  border: 1px solid blue;
  width: 100%;
}

@media only screen and (max-width: 767px) {
  .product_list li {
    background: #000; /* 黑色背景 */
    width: 49%;
  }
}
@media only screen and (max-width: 320px) {
  .product_list li {
    background: rgb(18, 227, 84); /* 黃色背景 */
    width: 96%;
    float: none;
    margin-left: 2%;
    margin-right: 2%;
  }
}
</style>
