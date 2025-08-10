import confetti from 'canvas-confetti';

document.addEventListener('DOMContentLoaded', () => {
    const goalAmountInput = document.getElementById('goalAmount');
    const timePeriodInput = document.getElementById('timePeriod');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    const calculate = () => {
        const goalAmount = parseFloat(goalAmountInput.value);
        const timePeriod = parseInt(timePeriodInput.value, 10);

        resultDiv.style.display = 'block';
        resultDiv.style.animation = 'fadeIn 0.5s';

        if (isNaN(goalAmount) || goalAmount <= 0 || isNaN(timePeriod) || timePeriod <= 0) {
            resultDiv.innerHTML = '<p style="color: #d32f2f; font-weight: bold;">Por favor, insira valores válidos e positivos em ambos os campos.</p>';
            return;
        }

        const monthlySavings = goalAmount / timePeriod;

        const formattedMonthlySavings = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(monthlySavings);

        resultDiv.innerHTML = `
            <p>Você precisa economizar por mês:</p>
            <span class="amount">${formattedMonthlySavings}</span>
        `;
        
        // Fun confetti effect
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    };
    
    calculateBtn.addEventListener('click', calculate);

    // Allow 'Enter' key to trigger calculation
    goalAmountInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            calculate();
        }
    });

    timePeriodInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            calculate();
        }
    });

});

