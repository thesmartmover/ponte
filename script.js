document.addEventListener('DOMContentLoaded', function() {
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const loginButton = document.getElementById('loginButton');
            const errorMessage = document.getElementById('errorMessage');
            const loginForm = document.getElementById('loginForm');
            
            // Иконки валидации для полей
            const usernameValidationIcon = usernameInput.nextElementSibling;
            const passwordValidationIcon = passwordInput.nextElementSibling;
            
            // Регулярное выражение для проверки логина (только латинские буквы в нижнем регистре и цифры)
            const usernameRegex = /^[a-z0-9]+$/;
            
            // Обработчик ввода для поля логина
            usernameInput.addEventListener('input', function(e) {
                let value = e.target.value;
                
                // Преобразуем все символы в нижний регистр
                value = value.toLowerCase();
                
                // Удаляем все пробелы
                value = value.replace(/\s/g, '');
                
                // Удаляем все символы, кроме латинских букв и цифр
                value = value.replace(/[^a-z0-9]/g, '');
                
                // Обновляем значение поля
                e.target.value = value;
                
                // Проверяем валидность введенного значения
                validateUsername();
                updateLoginButtonState();
            });
            
            // Обработчик ввода для поля пароля
            passwordInput.addEventListener('input', function() {
                validatePassword();
                updateLoginButtonState();
            });
            
            // Функция валидации логина
            function validateUsername() {
                const value = usernameInput.value;
                const isValid = usernameRegex.test(value) && value.length > 0;
                
                // Обновляем иконку валидации
                if (value.length === 0) {
                    usernameValidationIcon.className = 'validation-icon';
                } else if (isValid) {
                    usernameValidationIcon.className = 'validation-icon valid';
                    errorMessage.textContent = '';
                } else {
                    usernameValidationIcon.className = 'validation-icon invalid';
                    errorMessage.textContent = 'Логин может содержать только латинские буквы (a-z) и цифры (0-9)';
                }
                
                return isValid;
            }
            
            // Функция валидации пароля
            function validatePassword() {
                const value = passwordInput.value;
                const isValid = value.length >= 1;
                
                // Обновляем иконку валидации
                if (value.length === 0) {
                    passwordValidationIcon.className = 'validation-icon';
                } else if (isValid) {
                    passwordValidationIcon.className = 'validation-icon valid';
                } else {
                    passwordValidationIcon.className = 'validation-icon invalid';
                }
                
                return isValid;
            }
            
            // Функция обновления состояния кнопки входа
            function updateLoginButtonState() {
                const isUsernameValid = validateUsername();
                const isPasswordValid = validatePassword();
                
                if (isUsernameValid && isPasswordValid) {
                    loginButton.disabled = false;
                } else {
                    loginButton.disabled = true;
                }
            }
            
            // Обработчик отправки формы
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                if (!validateUsername() || !validatePassword()) {
                    errorMessage.textContent = 'Пожалуйста, исправьте ошибки в форме';
                    return;
                }
                
                // Имитация отправки формы
                errorMessage.textContent = '';
                loginButton.textContent = 'Вход...';
                loginButton.disabled = true;
                
                // Имитация задержки запроса на сервер
                setTimeout(() => {
                    alert(`Вход выполнен успешно, но дальше не пройти!\nЛогин: ${usernameInput.value}\nПароль: ${'*'.repeat(passwordInput.value.length)}`);
                    loginButton.textContent = 'Войти';
                    loginButton.disabled = false;
                    
                    // Очистка формы (в реальном приложении здесь был бы редирект)
                    // loginForm.reset();
                    // updateLoginButtonState();
                }, 1000);
            });
            
            // Инициализация состояния кнопки
            updateLoginButtonState();
        });