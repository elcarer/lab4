document.addEventListener('DOMContentLoaded',setup)

function setup() {
    document.getElementById('demoButton').onclick = addSomething;
}

function addSomething(){
    const someDummyDiv = document.createElement('div');
    someDummyDiv.classList.add('generated');
    const count = document.getElementsByClassName('generated').length;
    someDummyDiv.innerHTML = maple();
    const container = document.getElementById('container');
    container.appendChild(someDummyDiv);
}
function maple(){
        let input = document.getElementById('in').value;

        const reg1 = /\d+/g;
        const reg2 = /(\+|-)/g;
        const reg3 = /(\d+)(?!\*)/g;
        const reg4 = /x/g;
        const reg5 = /(x)(?!\^)/g;
        const reg6 = /(\+)(?=x)/g;
        const reg7 = /(-)(?=x)/g;
        const reg8 = /^(x)/g;
        const reg9 = /^(\d+)/g;
        let result;
        let c;
        let a1;
        let b1;

    if(reg5.test(input))
        input = input.replace(reg5, 'x^1');
    if(reg6.test(input))
        input = input.replace(reg6, '+1*');
    if(reg7.test(input))
        input = input.replace(reg7, '-1*');
    if(reg8.test(input))
        input = "+1*" + input;
    if(reg9.test(input))
        input = "+" + input;

    c = input.split(reg2);

    for (let i = 0; i < c.length; i++)
    {
        if (reg4.test(c[i]))
        {
            a1 = c[i].match(reg1);
            b1 = c[i].match(reg3);
            result += c[i-1] + (parseInt(a1)*parseInt(b1)).toString()+"*x^"+(parseInt(b1)-1).toString();

        }
    }
        return result;
}
