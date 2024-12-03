document.addEventListener('DOMContentLoaded', () => {
    // Validação de idade
    const birthdayInput = document.getElementById('birthday');
    if (birthdayInput) {
        birthdayInput.addEventListener('change', (e) => {
            const birthDate = new Date(e.target.value);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            const ageValidation = birthdayInput.parentElement.querySelector('.age-validation');
            
            if (age < 18) {
                showError(birthdayInput, 'Você deve ter pelo menos 18 anos');
                ageValidation.textContent = `Idade: ${age} anos (Menor de idade)`;
                ageValidation.style.color = 'var(--error-color)';
            } else {
                showSuccess(birthdayInput);
                ageValidation.textContent = `Idade: ${age} anos`;
                ageValidation.style.color = 'var(--success-color)';
            }
        });
    }

    // Validação em tempo real dos requisitos da senha
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        const requirements = {
            length: (str) => str.length >= 8,
            uppercase: (str) => /[A-Z]/.test(str),
            lowercase: (str) => /[a-z]/.test(str),
            number: (str) => /[0-9]/.test(str),
            special: (str) => /[!@#$%^&*(),.?":{}|<>]/.test(str)
        };

        passwordInput.addEventListener('input', (e) => {
            const password = e.target.value;
            
            Object.keys(requirements).forEach(req => {
                const reqElement = document.querySelector(`[data-requirement="${req}"]`);
                if (reqElement) {
                    const icon = reqElement.querySelector('i');
                    if (requirements[req](password)) {
                        reqElement.classList.add('met');
                        icon.className = 'fas fa-check-circle';
                        icon.style.color = 'var(--success-color)';
                    } else {
                        reqElement.classList.remove('met');
                        icon.className = 'fas fa-circle';
                        icon.style.color = '#666';
                    }
                }
            });
        });
    }

    // Validação do formulário no envio
    const form = document.querySelector('#registerForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio se houver erros
            let isValid = true;

            // Validar todos os campos obrigatórios
            const requiredInputs = form.querySelectorAll('[required]');
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    showError(input, 'Este campo é obrigatório');
                    isValid = false;
                } else {
                    showSuccess(input);
                }
            });

            // Validar idade
            const birthday = document.getElementById('birthday');
            if (birthday) {
                const age = calculateAge(birthday.value);
                if (age < 18) {
                    showError(birthday, 'Você deve ter pelo menos 18 anos');
                    isValid = false;
                } else {
                    showSuccess(birthday);
                }
            }

            // Validar força da senha
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirm-password');
            if (password && confirmPassword) {
                if (!isValidPassword(password.value)) {
                    showError(password, 'A senha não atende aos requisitos mínimos');
                    isValid = false;
                } else {
                    showSuccess(password);
                }

                if (password.value !== confirmPassword.value) {
                    showError(confirmPassword, 'As senhas não coincidem');
                    isValid = false;
                } else {
                    showSuccess(confirmPassword);
                }
            }

            if (isValid) {
                // Se todas as validações forem bem-sucedidas, o formulário será enviado
                form.submit();
            }
        });
    }
});

// Função auxiliar para calcular idade
function calculateAge(birthday) {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

// Função para exibir erro
function showError(input, message) {
    const errorElement = input.parentElement.querySelector('.error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    input.classList.add('error');
}

// Função para exibir sucesso
function showSuccess(input) {
    const errorElement = input.parentElement.querySelector('.error-message');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
    input.classList.remove('error');
}
