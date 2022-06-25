//Задание 1:

/*
function f() {
    alert( this );
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g(); */



//Задание 2:

/*
function f() {
    alert(this.name);
  }
  
  f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );
  
  f(); */




//Задание 3: undefined



//Задание 4:
/*
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'Вася',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
  };
  
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); */



//Задание 5: askPassword(() => user.login(true), () => user.login(false));