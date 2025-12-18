(function () {

  const track = [32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26,0];
  const reds = new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]);

  let hist = [];

  const terminal = n => n % 10;

  function corNumero(n){
    if(n === 0) return "#2ecc71";
    return reds.has(n) ? "#e74c3c" : "#222";
  }

  document.body.innerHTML = `
    <div style="padding:10px;color:#fff">
      <h3 style="text-align:center;margin-bottom:10px">Roleta Zero</h3>
      <div id="linhas"></div>

      <div id="nums"
        style="display:grid;
        grid-template-columns:repeat(9,1fr);
        gap:6px;
        margin-top:12px">
      </div>
    </div>
  `;

  const linhas = document.getElementById("linhas");
  const nums = document.getElementById("nums");

  for(let i=0;i<5;i++){
    let d=document.createElement("div");
    d.id="h"+i;
    d.style="display:flex;gap:6px;justify-content:center;margin-bottom:6px";
    linhas.appendChild(d);
  }

  for(let n=0;n<=36;n++){
    let b=document.createElement("button");
    b.textContent=n;
    b.style="font-size:16px;padding:8px;border-radius:6px";
    b.onclick=()=>{hist.push(n);render();};
    nums.appendChild(b);
  }

  function render(){
    let ult = hist.slice(-14).reverse();

    for(let i=0;i<5;i++){
      let h=document.getElementById("h"+i);
      h.innerHTML="";

      ult.forEach(n=>{
        let t = terminal(n);

        let box=document.createElement("div");
        box.style=`
          width:36px;
          height:46px;
          background:${corNumero(n)};
          border-radius:8px;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          color:#fff;
        `;

        box.innerHTML = `
          <div style="font-size:14px">${n}</div>
          <div style="font-size:10px;opacity:.8">T${t}</div>
        `;

        h.appendChild(box);
      });
    }
  }

  render();

})();
