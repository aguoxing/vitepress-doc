import{_ as a,c as s,o as n,a2 as p}from"./chunks/framework.EbqfbvUB.js";const u=JSON.parse('{"title":"进制与位运算","description":"进制与位运算","frontmatter":{"title":"进制与位运算","description":"进制与位运算","date":"2022-10-22T00:00:00.000Z","category":"碎片","tags":["进制与位运算"]},"headers":[],"relativePath":"posts/base/java/进制与位运算.md","filePath":"posts/base/java/进制与位运算.md","lastUpdated":1691294280000}'),e={name:"posts/base/java/进制与位运算.md"},l=p(`<h1 id="进制与位运算" tabindex="-1">进制与位运算 <a class="header-anchor" href="#进制与位运算" aria-label="Permalink to &quot;进制与位运算&quot;">​</a></h1><h2 id="原码、反码、补码" tabindex="-1">原码、反码、补码 <a class="header-anchor" href="#原码、反码、补码" aria-label="Permalink to &quot;原码、反码、补码&quot;">​</a></h2><p>二进制最高位是符号位，0表示正数，1表示负数</p><p>比如<code>1</code>的二进制是<code>0000 0001 </code>，<code>-1</code>是<code>1000 0001</code></p><p>正数的原码、反码、补码都一样</p><p>负数的反码=它原码符号位不变，其他位取反（0-&gt;1，1-&gt;0）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1==&gt;原码[0000 0001] 反码[0000 0001] 补码[0000 0001]</span></span>
<span class="line"><span>-1===&gt;原码[1000 0001] 反码[1111 1110] 补码[1111 1111]</span></span></code></pre></div><p>负数的补码=它的反码+1</p><p>0的反码、补码都是0</p><p>计算机运算的时候，都是以补码的方式来运算的</p><h2 id="位运算" tabindex="-1">位运算 <a class="header-anchor" href="#位运算" aria-label="Permalink to &quot;位运算&quot;">​</a></h2><p>按位与&amp;</p><p>两位全为1，结果为1，否则为0</p><p>按位或|</p><p>两位有一个为1，结果为1，否则为0</p><p>按位异或^</p><p>两位一个为0，一个为1，结果为1，否则为0</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>2&amp;3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2 的补码  0000 0010</span></span>
<span class="line"><span>3 的补码  0000 0011</span></span>
<span class="line"><span>2&amp;3           0000 0010  =&gt; 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2|3=?</span></span>
<span class="line"><span>2 的补码  0000 0010</span></span>
<span class="line"><span>3 的补码  0000 0011</span></span>
<span class="line"><span>2|3            0000 0011 =&gt; 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2^3</span></span>
<span class="line"><span>2 的补码  0000 0010</span></span>
<span class="line"><span>3 的补码  0000 0011</span></span>
<span class="line"><span>2^3            0000 0001 =&gt;1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-2^2</span></span>
<span class="line"><span>-2 的原码  1000 0010 =》反码 1111 1101 =&gt; 补码  1111 1110  </span></span>
<span class="line"><span>                     1111 1110  </span></span>
<span class="line"><span>2  的补码   0000 0010</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-2^2             1111 1100  （补码） ===》 原码</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 1111 1100  =》 反码   1111 1011 =》 原码  1000 0100 ==》 -4</span></span></code></pre></div>`,18),t=[l];function c(i,o,d,r,h,_){return n(),s("div",null,t)}const m=a(e,[["render",c]]);export{u as __pageData,m as default};
