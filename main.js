let demo = document.querySelector("#demo")
let style = document.querySelector("style")
let string = `/*你好，我是前端新人啊宏
我来展示一下我的前端功底~
我们来给文档加点样式，先把背景变成灰色呗；
我要加的样式是*/
body {
    background: rgb(145, 139, 139,0.4);
}
/* 接下来我要用css画一个太极图，看好了 */
/* 首先我们要准备一个div*/
/* 给它加上样式*/
#div1 {
    border: 1px solid grey;
    width:200px;
    height:200px;
}
/* 再把它变成圆形*/
#div1 {
    border-radius: 50%;
}
/* 给它填充背景色，一半黑一半白*/
#div1 {
    border-radius: 50%;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 再加上两个神秘的小球,一黑一白 */
#div1::before{
    transform: translateX(50%);
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    left:50%;
    transform: translateX(50%);
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/*我用CSS画出来太极图啦~ */
/* 现在再让太极图动起来~ */
#div1{
animation:  div1 2.5s linear 2s infinite;  
}
@keyframes div1 {
  0%{
    transform: rotate(0deg) scale(1.0);
    opacity: 0;
  }

  50% {
    transform: rotate(180deg)  scale(1.4);
    opacity: 0.6;

  }
  100%{
    transform:  rotate(360deg) scale(1.0);
    opacity: 0;
  }
}
/* 哈哈，动起来啦~👍👍👍
谢谢观看~ */

`;
let n = 0
n = string.length;
let a = 0
let string2 = ""
let string3 = ""
let write = () => {
    setTimeout(() => {
        //如果 是回车就换成html格式 
        //如果是 空格就转换 成&nbsp
        //不是回车就照搬
        if (a + 1 < n) {
            write()
        } else {}
        if (string[a] === "\n") {
            string2 += "<br>"
        } else if (string[a] === " ") {
            string2 += "&nbsp"
        } else {
            string2 += string[a]
        }
        string3 += string[a]
        a++;
        demo.innerHTML = string2;
        style.innerHTML = string.substring(0, a);
        window.scrollTo(0, 1000000);
        demo.scrollTo(0, 1000000);
    }, 15);
}
write()

/* 采用了伪类css创造div
#div1::before{
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
#div1::after{
    content: '';
    display: block;
    box-sizing: border-box;
    width: 99px;
    height: 98px;
    border-radius: 50%;
}      */