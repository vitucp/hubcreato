// Função para aplicar máscara ao WhatsApp
function maskWhatsApp(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    input.value = value;
}

// Função para aplicar máscara a qualquer input
function applyMask(input, mask) {
    let value = input.value.replace(/\D/g, '');
    let formatted = '';
    let maskIndex = 0;
    
    for (let i = 0; i < value.length && maskIndex < mask.length; i++) {
        while (mask[maskIndex].match(/[^0-9X]/)) {
            formatted += mask[maskIndex];
            maskIndex++;
        }
        formatted += value[i];
        maskIndex++;
    }
    
    input.value = formatted;
}

// Aplicando máscaras aos inputs
document.addEventListener('DOMContentLoaded', () => {
    const whatsappInput = document.getElementById('whatsapp');
    if (whatsappInput) {
        whatsappInput.addEventListener('input', () => maskWhatsApp(whatsappInput));
    }

    // Previne caracteres não numéricos no WhatsApp
    whatsappInput?.addEventListener('keypress', (e) => {
        if (!e.key.match(/[0-9]/)) {
            e.preventDefault();
        }
    });
});