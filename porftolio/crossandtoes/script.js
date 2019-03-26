var game = document.querySelector('.game');
        var field = document.querySelectorAll('.field');
        var title = document.querySelector('.game_title');
        var restartBtn = document.getElementById('restart');
        var count = 0; // счетчик
        var wonChecker = 0; // индикатор победы ( 0 - победа не зарегистрирована, 1 - победили крестики, 2 - нолики, 3 - ничья.)
        // используется для сохранения и загрузки состояния игры (номер индикатора сохраняется в локальную память и выгружается при перезагрузке игры.)
        // нужен для избежания такой ситуации: партия завершилась победой/ничьей (появляется кнопка "начать заново"), игрок перезагружает страницу и кнопка перезагрузки не появляется



        // функция отображения нажатий (крести или нолик) и запуска фунцкий проверки и сохранения состояния игры
        var showPress = function() {

            block = this.getAttribute('data-id');

            if (this.className != 'field') {
                return alert('выберите другую область');

            } else if (count % 2 == 0) {
                this.className = 'field cross';

            } else if (count % 2 != 0) {
                this.className = 'field toes';
            };
            count++
            winOrNot();
            gameSaver();

        };

        // фунция сохранения состояния игры
        var gameSaver = function(){
            var gameSave = [];
            // var jsave = '';

            for (var i = 0; i < field.length; i++) {

                var fieldSave = field[i].className;
                gameSave.push(fieldSave);

            }; // сохраняет классы всех ячеек в массив

            gameSave.push(count); // сохраняет счетчик для правильной работы очередности (крестики/нолики)
            gameSave.push(wonChecker); // сохраняет состояние победы

            return localStorage.setItem('game', JSON.stringify(gameSave));

        };


    // функция загрузки состояния игры
    var gameLoader = function() {
        if (localStorage.getItem('game') !== null) {
            var loadGame = JSON.parse(localStorage.game);

            for (var i = 0; i < field.length; i++) {
                field[i].className = loadGame[i];
            };
            count = loadGame[9];
                wonChecker = loadGame[10]; //выгружает состояние победы и отображает кнопку перезагрузки игры и правильный тайтл победы/ничьи
                if (loadGame[10] == 1){
                    restartBtn.className = 'game_btn';
                    title.innerHTML = 'Победа крестиков!'
                    title.className = 'game_title';
                };

                if (loadGame[10] == 2){
                    restartBtn.className = 'game_btn';
                    title.innerHTML = 'Победа ноликов!';
                    title.className = 'game_title';
                };

                if (loadGame[10] == 3) {
                    restartBtn.className = 'game_btn';
                    title.innerHTML = 'Ничья';
                    title.className = 'game_title';
                };


            } else {};
        };



///////////////////////// очень некрасивая, но работающая функция функция проверки условий победы.


var winOrNot = function (){

            //ничья
            if (count == 9) {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Ничья';


                wonChecker = 3;
            };

            //крестики
            //горизонтальные
            if (field[0].className=='field cross' && field[1].className=='field cross'&& field[2].className=='field cross') {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Победа крестиков!';

                field[0].className = 'field cross win horizontal';
                field[1].className = 'field cross win horizontal';
                field[2].className = 'field cross win horizontal';


                wonChecker = 1;
            };

            if (field[3].className=='field cross' && field[4].className=='field cross'&& field[5].className=='field cross') {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Победа крестиков!';

                field[3].className = 'field cross win horizontal';
                field[4].className = 'field cross win horizontal';
                field[5].className = 'field cross win horizontal';


                wonChecker = 1;
            };
            if (field[6].className=='field cross' && field[7].className=='field cross'&& field[8].className=='field cross') {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Победа крестиков!';

                field[6].className = 'field cross win horizontal';
                field[7].className = 'field cross win horizontal';
                field[8].className = 'field cross win horizontal';


                wonChecker = 1;
            };



            // вертикальные
            if (field[0].className=='field cross' && field[3].className=='field cross'&& field[6].className=='field cross') {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Победа крестиков!';

                field[0].className = 'field cross win vertical';
                field[3].className = 'field cross win vertical';
                field[6].className = 'field cross win vertical';


                wonChecker = 1;
            };
            if (field[1].className=='field cross' && field[4].className=='field cross'&& field[7].className=='field cross') {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Победа крестиков!';

                field[1].className = 'field cross win vertical';
                field[4].className = 'field cross win vertical';
                field[7].className = 'field cross win vertical';


                wonChecker = 1;
            };
            if (field[2].className=='field cross' && field[5].className=='field cross'&& field[8].className=='field cross') {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Победа крестиков!';

                field[2].className = 'field cross win vertical';
                field[5].className = 'field cross win vertical';
                field[8].className = 'field cross win vertical';


                wonChecker = 1;
            };



            // диагональные
            if (field[0].className=='field cross' && field[4].className=='field cross'&& field[8].className=='field cross') {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Победа крестиков!';

                field[0].className = 'field cross win diagonal-right';
                field[4].className = 'field cross win diagonal-right';
                field[8].className = 'field cross win diagonal-right';


                wonChecker = 1;
            };
            if (field[2].className=='field cross' && field[4].className=='field cross'&& field[6].className=='field cross') {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Победа крестиков!';

                field[2].className = 'field cross win diagonal-left';
                field[4].className = 'field cross win diagonal-left';
                field[6].className = 'field cross win diagonal-left';


                wonChecker = 1;
            };






            //нолики
            //горизонтальные
            if (field[0].className=='field toes' && field[1].className=='field toes'&& field[2].className=='field toes') {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Победа ноликов!';

                field[0].className = 'field toes win horizontal';
                field[1].className = 'field toes win horizontal';
                field[2].className = 'field toes win horizontal';


                wonChecker = 2;
            };

            if (field[3].className=='field toes' && field[4].className=='field toes'&& field[5].className=='field toes') {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Победа ноликов!';

                field[3].className = 'field toes win horizontal';
                field[4].className = 'field toes win horizontal';
                field[5].className = 'field toes win horizontal';


                wonChecker = 2;
            };
            if (field[6].className=='field toes' && field[7].className=='field toes'&& field[8].className=='field toes') {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Победа ноликов!';

                field[6].className = 'field toes win horizontal';
                field[7].className = 'field toes win horizontal';
                field[8].className = 'field toes win horizontal';


                wonChecker = 2;
            };



            // вертикальные
            if (field[0].className=='field toes' && field[3].className=='field toes'&& field[6].className=='field toes') {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Победа ноликов!';

                field[0].className = 'field toes win vertical';
                field[3].className = 'field toes win vertical';
                field[6].className = 'field toes win vertical';


                wonChecker = 2;
            };
            if (field[1].className=='field toes' && field[4].className=='field toes'&& field[7].className=='field toes') {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Победа ноликов!';

                field[1].className = 'field toes win vertical';
                field[4].className = 'field toes win vertical';
                field[7].className = 'field toes win vertical';


                wonChecker = 2;
            };
            if (field[2].className=='field toes' && field[5].className=='field toes'&& field[8].className=='field toes') {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Победа ноликов!';

                field[2].className = 'field toes win vertical';
                field[5].className = 'field toes win vertical';
                field[8].className = 'field toes win vertical';


                wonChecker = 2;
            };



            // диагональные
            if (field[0].className=='field toes' && field[4].className=='field toes'&& field[8].className=='field toes') {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Победа ноликов!';

                field[0].className = 'field toes win diagonal-right';
                field[4].className = 'field toes win diagonal-right';
                field[8].className = 'field toes win diagonal-right';


                wonChecker = 2;
            };
            if (field[2].className=='field toes' && field[4].className=='field toes'&& field[6].className=='field toes') {
                title.className = 'game_title';
                restartBtn.className = 'game_btn';
                title.innerHTML = 'Победа ноликов!';

                field[2].className = 'field toes win diagonal-left';
                field[4].className = 'field toes win diagonal-left';
                field[6].className = 'field toes win diagonal-left';


                wonChecker = 2;
            };
        };


        gameLoader(); // загрузка игры

        // ловим нажатия на игровое поле
        for (var i = 0, l = field.length; i < l; i++) {

            field[i].onclick = showPress;
        };


        // кнопка рестарта
        restartBtn.onclick = function (){
            for (var i = 0; i < field.length; i++) {
                field[i].className = 'field';
            };

            title.className = 'game_btn hidden'
            title.innerHTML = '';
            restartBtn.className = 'game_btn hidden';
            count = 0;
            localStorage.removeItem('game'); // удаляет сохранение при рестарте игры
            wonChecker = 0; // обнуляем состояние победы

        };