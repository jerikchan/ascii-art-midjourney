<script setup lang="ts">
import { onMounted, onBeforeUnmount, computed } from 'vue';
import { useRoute } from 'vue-router'; 
import figlet from 'figlet';
import standard from "figlet/importable-fonts/Standard.js";
import { watchEffect } from 'vue';

figlet.parseFont("Standard", standard);

const route = useRoute();

var D = Math.sqrt;
var H = Math.max;
var P = Math.sin;
var L = Math.cos;
var q = Math.round;
var Z = function(e, a, t) {
    return e * (1 - t) + a * t
}
  , K = function(e, a, t) {
    return e < a ? a : e > t ? t : e
};

function k() {
    var e, a, t = (
 e = [" __  __ _    _  _                            \n|  /  (_)__| |(_)___ _  _ _ _ _ _  ___ _  _ \n| |/| | / _| || / _  || | '_| ' / -_) || |\n|_|  |_|___,_|/ ___/_,_|_| |_||____|_, |\n             |__/                       |__/ "],
(a = [" __  __ _    _  _                            \n|  \\/  (_)__| |(_)___ _  _ _ _ _ _  ___ _  _ \n| |\\/| | / _| || / _ \\ || | '_| ' \\/ -_) || |\n|_|  |_|_\\__,_|/ \\___/\\_,_|_| |_||_\\___|\\_, |\n             |__/                       |__/ "]) || (a = e.slice(0)),
    Object.freeze(Object.defineProperties(e, {
        raw: {
            value: Object.freeze(a)
        }
    })));
    return k = function() {
        return t
    },
    t
}
// function k() {
//   return figlet.textSync("ChatPaper")
// }


var C, S, E, M, A, I, T, O, B, R, z, P = Math.sin, L = Math.cos, q = Math.round, D = Math.sqrt, H = Math.max, F;
function W() {
  for (var e = 0; e < A.length; e++)
      C.removeChild(A[e]);
  A = [];
  for (var a = 0; a < I.length; a++)
      C.removeChild(I[a]);
  I = [],
  C.setAttribute("viewBox", "0 0 ".concat(window.innerWidth, " ").concat(H(100, window.innerHeight))),
  z = E.length;
  for (var t = (C.viewBox.baseVal.height - 10) / z, n = 0; n < z; n++) {
      var i = document.createElementNS(C.namespaceURI, "text");
      i.setAttribute("x", 5),
      i.setAttribute("y", n * t + 5),
      i.style.fontSize = "".concat(.9 * t, "px"),
      i.style.dominantBaseline = "hanging",
      i.style.whiteSpace = "pre",
      i.setAttribute("fill", "#7d9ddf"),
      C.appendChild(i),
      A[n] = i
  }
  A[0].textContent = "".padStart(1e3, "W");
  var r = A[0].getBBox().width / 1e3;
  A[0].textContent = "",
  S = q((C.viewBox.baseVal.width - 10) / r),
  T = q(S / 2 - M[0].length / 2) - 1,
  O = q(z / 2 - M.length / 2) - 1;
  for (var s = 0; s < M.length; s++) {
      var c = document.createElementNS(C.namespaceURI, "text");
      c.setAttribute("x", 5 + (T + 1) * r),
      c.setAttribute("y", s * t + 5 + (O + 1) * t),
      c.style.fontSize = "".concat(.9 * t, "px"),
      c.style.dominantBaseline = "hanging",
      c.style.whiteSpace = "pre",
      c.setAttribute("font-weight", "bold"),
      c.setAttribute("fill", "white"),
      C.appendChild(c),
      I[s] = c
  }
}

// 这段代码是用于在 midjourney 官网的首页上显示一个 3D 动画效果的 JavaScript 代码。它使用了 requestAnimationFrame() 方法来在每一帧更新动画，以及一些数学函数和变量来计算和渲染 ASCII 字符的位置和颜色。它还使用了一些全局变量，如 A, E, M, S 等，来存储 ASCII 字符串和动画参数。
function G(e) { // 定义一个函数 G，参数 e 是时间戳
  if (requestAnimationFrame(G), // 调用 requestAnimationFrame() 方法，并将 G 作为回调函数
    B || (B = .001 * e), // 如果 B 不存在，则将 B 赋值为 e 的千分之一
    R || (R = e), // 如果 R 不存在，则将 R 赋值为 e
    !("visible" !== document.visibilityState || e - R < 42)) { // 如果文档可见并且 e 和 R 的差值大于等于 42，则执行以下代码
    R = e; // 将 R 更新为 e
    for (var a = .001 * e - B, // 定义一个变量 a，表示动画的运行时间（秒）
      t = function(e) { // 定义一个函数 t，参数 e 是一个介于 0 和 1 之间的数值
        return e < .5 ? (1 - D(1 - Math.pow(2 * e, 2))) / 2 : (D(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2 // 返回一个基于正弦曲线的缓动函数的结果，用于计算动画的进度
      }(K(.5 * (a - 1), 0, 1)), // 调用函数 t，并将 K 函数的结果作为参数传入，K 函数是一个用于限制数值范围的函数，这里表示将 a - 1 的一半限制在 0 和 1 之间
      n = (window.innerWidth, window.innerHeight, 0); n < A.length; n++) { // 定义一个变量 n，表示 ASCII 字符串的索引，并从 0 开始遍历 A 数组，A 数组是一个存储了多行 ASCII 字符串的数组
      for (var i = "", // 定义一个变量 i，表示新生成的 ASCII 字符串
        r = "", // 定义一个变量 r，表示新生成的彩色字符串
        s = 1 - 2 * n / A.length, // 定义一个变量 s，表示当前行的垂直坐标（-1 到 1）
        c = 0; c < S; c++) { // 定义一个变量 c，表示当前列的索引，并从 0 开始遍历 S，S 是一个全局变量，表示每行的字符数
        var o = 2 * c / S - 1 , // 定义一个变量 o，表示当前列的水平坐标（-1 到 1）
          d = D(o * o + s * s) , // 定义一个变量 d，表示当前点到中心点的距离（0 到 sqrt(2)）
          l = .1 * a / H(.1, d) , // 定义一个变量 l，表示当前点的旋转角度（弧度），它是基于时间和距离的函数，H 是一个用于限制数值范围的函数，这里表示将 d 的倒数限制在 .1 和无
                f = P(l) , // 定义一个变量 f，表示当前点的旋转角度的正弦值
          b = L(l) , // 定义一个变量 b，表示当前点的旋转角度的余弦值
          u = o * f - s * b , // 定义一个变量 u，表示当前点旋转后的垂直坐标（-1 到 1）
          m = q((o * b + s * f + 1) / 2 * S) , // 定义一个变量 m，表示当前点旋转后的水平索引（0 到 S），q 是一个用于取整的函数
          h = q((u + 1) / 2 * E.length) % E.length , // 定义一个变量 h，表示当前点旋转后的垂直索引（0 到 E.length），E 是一个存储了多行彩色字符串的数组
          g = m < 0 || m >= S || h < 0 || h >= A.length ? " " : E[h][m] || " "; // 定义一个变量 g，表示当前点旋转后对应的彩色字符，如果索引超出范围，则为空格
        if (n > O && n < O + M.length + 1 && c > T && c < T + M[0].length + 1) { // 如果当前点在 M 数组的范围内，M 数组是一个存储了多行彩色字符串的数组，用于显示 midjourney 的 logo
          var p = c - T - 1 , // 定义一个变量 p，表示当前点在 M 数组中的水平索引
            x = n - O - 1 , // 定义一个变量 x，表示当前点在 M 数组中的垂直索引
            v = M[x][p] || g , // 定义一个变量 v，表示当前点在 M 数组中对应的彩色字符，如果不存在，则为 g
            y = " " != M[x][p - 1] , // 定义一个变量 y，表示当前点左边是否有彩色字符
            j = " " != M[x][p + 1]; // 定义一个变量 j，表示当前点右边是否有彩色字符
          if (" " != v || y || j) { // 如果当前点或其左右有彩色字符，则执行以下代码
            var w = g.charCodeAt(0) , // 定义一个变量 w，表示 g 的 ASCII 码值
              _ = v.charCodeAt(0); // 定义一个变量 _，表示 v 的 ASCII 码值
            r += g = String.fromCharCode(q(Z(w, _, t))), // 将 r 和 g 更新为 w 和 _ 的插值结果，并转换为字符，Z 是一个用于计算两个数值之间的插值的函数，t 是动画进度
              1 == t && (g = " ") // 如果 t 等于 1，则将 g 更新为空格
          } else r += " "; // 否则将 r 更新为加上空格
          c == T + M[0].length && (I[x].textContent = r, I[x].setAttribute("fill-opacity", t)) // 如果 c 等于 M 数组每行的长度加上 T，则将 I 数组中对应索引的元素（SVG 文本）更新为 r，并设置透明度为 t，I 是一个存储了 SVG 文本元素的数组
        }
        i += g // 将 i 更新为加上 g
      }
      A[n].textContent = i // 将 A 数组中对应索引的元素（HTML 元素）更新为 i
    }
  }
}

const defaultTitle = 'Midjourney';

const title = computed(() => {
  return route.query.title || defaultTitle;
})

onMounted(function() {
  watchEffect(() => {
    figlet.text(title.value, { font: 'Standard' }, function(err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      C = document.getElementById("bannerSVG"),
      E = "/imagine close up, modern cowboy on a ranch, his eyes are filled with the cosmos, realistic\n    /imagine city areal perspective. streets glowing, concrete architecture, green roofs, people on the streets\n    /imagine the beginning of the universe by Monet\n    /imagine looking up a never ending staircase by Jean Giraud Moebius\n    /imagine abstract, cycle, organic, powerful, behance\n    /imagine gorgeous bouquet still life painting in the style of Odilon Redon and Henri Fantin-Latour\n    /imagine a warm sunny beach near an ocean full of pikachu's\n    /imagine 3d render of gold rings, geometric, circles, triangles, psychedelic, infinity pool, eccojams, vaporwave, oneohtrix point never, golden hour, glossy reflections and light rays, portals into other worlds\n    /imagine intricate jungle landscape by albrecht durer, henri rousseau, pieter brueghel the elder, mattisse\n    /imagine cyberpunk cat rabbit hacker, googles, anime style\n    /imagine banana with glasses dancing, ghibli style\n    /imagine corgis dancing in vibrant victorian dresses, Rococo style, in a large luxurious ballroom\n    /imagine A wise/meditating/fantasy wizard sitting in complex/intricate meadow with mountains/fields, painted by Japanese artist Koji Miromoto using detailed/hyperfine/lineart/print black paper ink techniques and exotic glowy psychedelic ink, autochrome colors/style. Stylized/detailed/textured, gradients, graduated colors, fine line details.\n    /imagine 1960s illustration of the beginning of life on Earth\n    /imagine commodore 1351 mouse. 80s sythwave style. hyper realistic\n    /imagine map of steampunk desert\n    /imagine francisco goya scene oil painting watercolor sci-fi science fiction cyberpunk time machine\n    /imagine Portrait of a cyber glitch sorceress causing video corruption with her magic\n    /imagine a realistic ancient temple, crumbling stone, vines, extreme detail, statues, octane render, volumetric fog, realistic lighting, reflections\n    /imagine giant red crystals in a desert with two suns\n    /imagine Robin Williams in the style of John Allison\n    /imagine standing in front of a castle\n    /imagine a professional photorealistic Portrait of an Astronaut by Peter Mohrbacher,Shaun Tan and Seb McKinnon,realistic eyes,realistic hair,,Beautiful Hit Tech costume and Helmet details,Beautiful dramatic dark moody lighting,Cinematographic Atmosphere,photorealism glossy magazine painting,Octane Render,Deep Color,8k Resolution,High Details,Flickr,DSLR,CGsociety,Artstation\n    /imagine Matter condensed from energy, life built upon matter, consciousness upon life\n    /imagine hyperreal swirling watercolors trapped in a soap bubble, 4k render\n    /imagine beautiful painting of clouds with sunrise, by john martin, Trending on artstation, pastel aesthetic\n    /imagine modern futuristic lampshade with art nouveau inspiration\n    /imagine photo shot on Leica IIIf with 50mm f/2 Summar; 1/50 sec; f/4\n    /imagine sharp alphabet typography by Walter Gropius\n    /imagine four dogs playing poker in a crowded room, by Malcolm Liepke and Lovis Corinth, oilpainting\n    /imagine invitation made with old paper written with cursive font pyrographic words in the center | red wax seal above in the top-left corner, cinematic light, artstation\n    /imagine aisle view of the festival street market in AlUla, many booths, seating areas, natural materials, cinematic shot\n    /imagine japanese temple, sakura, detailed oil painting, by Mateusz Urbanowicz\n    /imagine a stegosaurus drawn by John Singer Sargent\n    /imagine a mysterious forest with many fireflies, trees with large roots covered in moss, green vegetation, Studio Ghibli animation style, Japanese animation film background,\n    /imagine the universe in our ancestors eyes\n    /imagine The inside of a gothic cathedral that looks like a tropical alien utopian jungle rainforest, dramatic cinematic lighting\n    /imagine A hero stands alone, artstation, highly detailed, cinematic\n    /imagine symmetric texture repetition on a tree on a beautiful mountain landscape\n    /imagine midcentury luchador mask, risograph\n    /imagine ultra detailed line drawing, black and white and red, pen and ink, high tech cyberpunk geisha with headphones and sunglasses and VR goggles in style of Shohei Otomo\n    /imagine interior of master bedroom in victorian mansion, window, dan mindel cinematography, 35mm, movie scene, pitch black, realistic lighting, perspective shots, moody atmosphere, light coming from outside, HDRI\n    /imagine the alien robot queen holding a party at the dome castle in HQ Cloud City during a technicolor sunset\n    /imagine corporate memphis style, mural, pride month, white background, vector, characters waving pride flags, celebration\n    /imagine abstract painting of coral reef\n    /imagine a calico cat taking a nap on a kiwi\n    /imagine Dreamy landscape depiction inspired by the works of Katsushika Hokusai, trending on artstation\n    /imagine garden bridge over swan pond monet garden lillies and hanging trees art\n    /imagine green dragon roosting above its lair in the ruins of a fantasy medieval city\n    /imagine rainwater flowing through a complex system of ancient stone pipes and a gargoyle watching\n    /imagine butterflies flit in a sunlit field. Hiroshige Japanese woodblock print.\n    /imagine an illustration of a wooden magic wand with an aura of void around it, stars glitter subtly around it, closeup, fantasy card game art trending on artstation concept art by Jason Chan".split("\n").map((function(e) {
          return e.replace(/\t/g, "    ")
      }
      )),
      // F = String.raw(k());
      F = data;
      // debugger;
      M = F.split("\n").map((function(e) {
          return e.replace(/\t/g, "    ")
      }
      )),
      A = [],
      I = [],
      W();
      requestAnimationFrame(G);
      window.addEventListener("resize", W);
      onBeforeUnmount(function() {
          window.removeEventListener("resize", W)
      })
    });
  })
})
</script>

<template>
  <div id="waves" class="scanlines font-mono absolute flex items-center justify-center overflow-hidden border-2 bg-[#061434] shadow-lg shadow-darkBlue-900/20 inset-4 sm:inset-6 lg:inset-12 border-[#061434] !bottom-36 md:!bottom-24 rounded-3xl">
    <svg id="bannerSVG" xmlns="http://www.w3.org/2000/svg" version="1.1" viewbox="0 0 800 400" style="background: #061434; width: 100%;">
    </svg>
  </div>
</template>

<style>
.scanlines:after {
    .animation:flicker .15s infinite;background: hsla(0,6%,7%,.1);
    opacity: 0
}

.scanlines:after,.scanlines:before {
    bottom: 0;
    content: " ";
    display: block;
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2
}

.scanlines:before {
    background: linear-gradient(hsla(0,6%,7%,0) 50%,rgba(0,0,0,.25) 0),linear-gradient(90deg,rgba(255,0,0,.06),rgba(0,255,0,.02),rgba(0,0,255,.06));
    background-size: 100% 2px,3px 100%
}

.scanlines {
    filter: blur(.5px)
}
</style>