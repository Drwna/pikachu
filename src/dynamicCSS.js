const string = `
.skin * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.skin *::before {
  box-sizing: border-box;
}

.skin *::after {
  box-sizing: border-box;
}

.skin {
  min-height: 50vh;
  background: #FFE600;
  position: relative;
}

.nose {
  border: 14px solid transparent;
  width: 10px;
  border-radius: 10px;
  border-top-color: black;
  position: absolute;
  left: 50%;
  top: 140px;
  margin-left: -14px;
  z-index: 5;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }

  33% {
    transform: rotate(4deg);
  }

  66% {
    transform: rotate(-4deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.nose:hover {
  transform-origin: center bottom;
  animation: wave 150ms infinite linear;
}

.eye {
  position: absolute;
  border: 2px solid black;
  width: 64px;
  height: 64px;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}

.eye::before {
  content: '';
  display: block;
  border: 1px solid #000;
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  top: 3px;
  left: 8px;
}

.eye.left {
  transform: translateX(-100px);
}

.eye.right {
  transform: translateX(100px);
}

.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}

.mouth .up {
  position: relative;
  top: -20px;
  z-index: 1;
}

.mouth .up .lip {
  border: 3px solid black;
  height: 30px;
  width: 100px;
  border-top-color: transparent;
  background-color: #FFE600;
  position: absolute;
  left: 50%;
  margin-left: -50px;
}

.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  transform: rotate(-20deg) translateX(-55px);
}

.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  transform: rotate(20deg) translateX(55px);
}


.mouth .up .lip::before {
  content: '';
  display: block;
  width: 7px;
  height: 30px;
  position: absolute;
  bottom: 0;
  background: #FFE600;
}


.mouth .up .lip.left::before {
  right: -6px;
}

.mouth .up .lip.right::before {
  left: -6px;
}

.mouth .down {
  height: 186px;
  position: absolute;
  top: 4px;
  width: 100%;
  overflow: hidden;
}

.mouth .down .yuan1 {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background-color: #9B000A;
  overflow: hidden;
}

.mouth .down .yuan1 .yuan2 {
  width: 200px;
  height: 300px;
  position: absolute;
  background-color: #FF485F;
  bottom: -155px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
}

.face {
  border: 3px solid black;
  position: absolute;
  left: 50%;
  width: 88px;
  height: 88px;
  top: 200px;
  margin-left: -44px;
  z-index: 2;
}

.face.left {
  transform: translateX(-180px);
  background: #FF0000;
  border-radius: 50%;
}

.face.right {
  transform: translateX(180px);
  background: #FF0000;
  border-radius: 50%;
}
`
// ?????????
export default string