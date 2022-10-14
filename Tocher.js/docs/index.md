---
layout: home
---

<main>
  <img src="./icon.png" class="icont"/>
  <h1 class="mainH1">Tocherjs</h1>
  <div class="SubTs">
    <h1 class="SubH1">Best framework </h1>
    <h1 class="SubH1">for JS & HTML</h1>
  </div>
  <div class="btng">
    <button class="gts"><a href="/main/Getstarted">Getting Started</a></button>
    <button class="gtb"><a href="https://github.com/yezert/tocher.js">See in github</a></button>
  </div>
  <div class="cs">  
    <span class="card">
      <h1 id="ct">Fast</h1>
      No Virtual DOM
      </span>
    <span class="card">
      <h1 id="ct">Greate</h1>
      Build by Typescript
    </span>
    <span class="card">
      <h1 id="ct">Crazy</h1>
      Wanted to import RUST
    </span>
  </div>
</main>

<style>
  .cs {
    display:flex;
  }
  #ct {
    font-size:30px;
    font-weight:700;
    margin-bottom:20px;
  }
  .card {
    opacity:70%;
    margin-left:20px;
    border-radius:10px;
    padding:50px;
    color:#ffffff;
    background-color:#5f5f5f;
  }
  .btng {
    transition:ease-in-out .3s;
    margin:5px
  }
  .icont {
    transition:ease-in-out .3s;
    scale:1.3;
    margin-bottom:50px
  }
  .icont:hover {
    filter: drop-shadow(2px 5px 5px #CD7F32);
    scale:1.5;
  }
  main {
    margin-top:50px;
    transition:ease-in-out .3s;
    display:flex;
    justify-content:center;
    height:70vh;
    align-items:center;
    flex-direction:column;
  }
  .mainH1 {
    font-weight:700;
    background-image: linear-gradient(120deg, #bd34fe, #41d1ff);
    -webkit-background-clip: text;
    color: transparent;
    font-size:10px;
    scale:8
  }
  .SubH1 {
    font-weight:700;
    margin-bottom:8px;
    -webkit-background-clip: text;
    color: rgb(137, 207, 240);
    font-size:10px;
    scale:3
  }

  .SubTs {
    margin-top:50px;
    text-align:center;
  }

  .gts {
    margin:10px;
    transition:ease-in-out .3s;
    color:#efefff;
    background-color:rgb(0,175,255);
    padding:5px;
    opacity:70%;
    border-radius:7px
  }
  .gts:hover {
    background-color:green;
    color:rgb(255,255,255)
  }

  .gtb {
    margin:10px;
    transition:ease-in-out .3s;
    color:#efefff;
    background-color:rgb(30,120,20);
    padding:5px;
    opacity:70%;
    border-radius:7px
  }
  .gtb:hover {
    background-color:rgb(60,80,90);
    color:rgb(255,255,255)
  }
</style>
