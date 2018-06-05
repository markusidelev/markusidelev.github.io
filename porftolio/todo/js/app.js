(function (window, document, undefined) {
	'use strict';

  const filter = f => x => Array.prototype.filter.call(x, f);
  var counter = 0;


  var storage = (function () {
    var mainKey = '';
    return {

      init: function (key) {
        mainKey = key;
      },

      add: function ({data, key}) {
        // debugger;
        key = key || mainKey;
        localStorage[key] = JSON.stringify(data);
      },

      get: function (key) {
        key = key || mainKey;
        if (this.has(key)) {
          return JSON.parse(localStorage[key]);
        } 
        return null;

        // return this.has(key)
        //       ? JSON.parse(localStorage[key])
        //       : null;
      },

      has: function (key) {
        key = key || mainKey;
        return localStorage.hasOwnProperty(key);
      },

      remove: function (key) {
        key = key || mainKey;
        if (this.has(key)) {
          delete localStorage[key];
        }
      },

      clear: function () {
        localStorage.clear();
      }
    }
  })();



  // хранилище задач
  var collection = (function () {
    var array = [];

    return {

      init: function (data) {
        if (Array.isArray(data)) {
          array = data;
        }
      },

      add: function (task) {
        array.push(task);
        storage.add({data: array});
      },

      get: function (idx) {
        return array.filter(function (item) {
          return item.index == idx; 
        })[0];
      },
      show: function () {
        console.log(array);
      },
      get items () {
        return array.slice().reverse();
      },
      remove: function (idx) {
        for(var i = 0; i < array.length; i++) {
          if (array[i].index == idx) {
            array.splice(i, 1);
            break;
          }
        }
        storage.add({data: array});
      },
      get countIncomplete() {
        return array.filter(i => !i.complete).length ;
      },
      clearCompleted: function() {
        array = array.filter(i => !i.complete);
        storage.add({data: array});
      },
      allCompleted: function(bool) {
        array.forEach((i) => { i.complete = bool });
        storage.add({data: array});
      }

    };
  })();

// .addEventListener(eventName, handler)

function subscribe({selector, eventName, eventHandler}) {
  document.addEventListener(eventName, function (e) {
    if (e.target.matches(selector)) {
      eventHandler(e);
      render();
    }
  })
}



	// Your starting point. Enjoy the ride!
  var taskList = document.querySelector('ul.todo-list'),
  itemCount = document.querySelector('.todo-count > strong');
//  


//    filtering, delete and select all
//    var bool = true;
function selectAll() {
  var bool;
  collection.items.some(i => !i.complete) ? bool = true :
  bool = false;
  collection.allCompleted(bool);
}

function deleteComplete() {
  collection.clearCompleted();
  render();
}

function filterTodo(predicate) {
  taskList.querySelectorAll('li').forEach(i => {
    !predicate || i.classList.contains(predicate) ? i.style.display = '' : i.style.display = 'none';
  });
} 
var completed = document.querySelector('a[href$=completed]');
completed.addEventListener('click', function() {
  filterTodo('completed');
  document.querySelector('.filters').childNodes[5].childNodes[1].className = 'selected';
  document.querySelector('.filters').childNodes[1].childNodes[1].className = '';
  document.querySelector('.filters').childNodes[3].childNodes[1].className = '';


}); 
var active = document.querySelector('a[href$=active]');
active.addEventListener('click', function() {
 filterTodo('active');
 document.querySelector('.filters').childNodes[3].childNodes[1].className = 'selected';
 document.querySelector('.filters').childNodes[1].childNodes[1].className = '';
 document.querySelector('.filters').childNodes[5].childNodes[1].className = '';



});
var all = document.querySelector('a[href$=all]');
all.addEventListener('click', function() {
  filterTodo(); 
  document.querySelector('.filters').childNodes[1].childNodes[1].className = 'selected';
  document.querySelector('.filters').childNodes[5].childNodes[1].className = '';
  document.querySelector('.filters').childNodes[3].childNodes[1].className = '';
  


});

var clear = document.querySelector('.clear-completed');
clear.addEventListener('click', function() {
 deleteComplete(); 
});
var select = document.querySelector('label[for=toggle-all]');
select.addEventListener('click', function() {
 selectAll();
 render();
});
    //===================================//
    
/*

  <li class="editing|complete">
    <div class="view">
      <input class="toggle" type="checkbox">
      <label>Buy a unicorn</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Rule the web">
  </li>

  */


  function Task(text) {
    this.text = text;
    this.complete = false;
    this.index = ++counter;
  }

// ====================================================
// Event Handlers

function onTaskAdd(e) {
  if (e.keyCode === 13) {
    collection.add(new Task(e.target.value));
    collection.show();
    e.target.value = '';
  }
}

function onComplete(e) {
  var index = e.target.parentElement.parentElement.dataset.index;
  var task = collection.get(index);
  task.complete = !task.complete;
}

function onDestroy (e) {
  var index = e.target.parentElement.parentElement.dataset.index;
  collection.remove(index);
}

//  function showComplete() {

//  }
// ====================================================

function renderTask(task) {
    // debugger;
    var element = document.createElement('div');
    element.textContent = task.text;

    var content = `
    <li class="${task.complete ? "completed" : "active"}" data-index="${task.index}">
    <div class="view">
    <input class="toggle" 
    type="checkbox" 
    ${task.complete ? "checked" : ""}
    >
    <label>${element.textContent}</label>
    <button class="destroy"></button>
    </div>
    <input class="edit" value="">
    </li>
    `;

    element.innerHTML = content;
    taskList.appendChild(element.firstElementChild);
  }

  function render() {
    // collection.items.forEach(function (task) {
    //   renderTask(task);
    // });
    itemCount.textContent = collection.countIncomplete;
    taskList.innerHTML = '';
    collection.items.forEach(renderTask);
    
  }

  // renderTask(new Task("test1"));
  // renderTask(new Task("test2"));
  // renderTask(new Task("написать калькулятор как в Ubuntu!"));
  // renderTask(new Task("test4"));
  // renderTask(new Task("<h1>тестовое ой!</h1>"));
  // renderTask(new Task("<script>alert('тестовое ой!')</script>"));


  function bindEvents() {
    subscribe({
      selector: 'input.new-todo',
      eventName: 'keypress',
      eventHandler: onTaskAdd
    });

    subscribe({
      selector: 'input.toggle[type=checkbox]',
      eventName: 'change',
      eventHandler: onComplete
    });

    subscribe({
      selector: 'button.destroy',
      eventName: 'click',
      eventHandler: onDestroy
    });

//    subscribe({
//       selector: 'a[href$=completed]',
//       eventName: 'click',
//       eventHandler: showComplete
//    });
}

document.addEventListener('DOMContentLoaded', function () {
  var key = 'tasks';

  storage.init(key);

  if (storage.has(key)) {
    collection.init(storage.get(key));
    render();
  }

})


bindEvents();

})(window, document);
