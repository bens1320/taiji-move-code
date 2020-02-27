let html = document.querySelector('#html')
let style = document.querySelector('#style')
let n = 0
let string = `
/*一二三四五
上山打老虎
老虎没达到
打到小松鼠*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}

/* 接下来我把, div 变成一个圆
注意看好了
首先, 把div变成一个圆*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}

/* 八卦是阴阳形成的
一黑一白(css gradient background generator)*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

#div1::before{
    width: 100px;
    height: 100px;
    background: #000;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

#div1::after{
    width: 100px;
    height: 100px;
    background: #fff;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`

let string2 = ``
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            n !== 0 ? string2 += '<br>' : string2
        } else if (string[n] === ' ') {
            string2 += '&nbsp;'
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n += 1
            step()
        }
    }, 0)
}
step()