const DB_ID = 'enamelflow-waitlist-5921'; 

async function handleWaitlistSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
        email: formData.get('email'),
        practice_name: formData.get('practice_name'),
        source: 'landing_page'
    };

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Joining...';
    submitBtn.disabled = true;

    try {
        const response = await fetch(`https://app.baget.ai/api/public/databases/${DB_ID}/rows`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data })
        });

        if (response.ok) {
            form.innerHTML = `<div class="p-6 text-center">
                <div class="mb-4 text-green-600">
                    <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900">You're on the list!</h3>
                <p class="text-slate-600">We'll reach out soon to discuss your practice's flow.</p>
            </div>`;
            updateCount();
        } else {
            throw new Error('Submission failed');
        }
    } catch (err) {
        console.error(err);
        alert('Something went wrong. Please try again.');
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
    }
}

async function updateCount() {
    try {
        const response = await fetch(`https://app.baget.ai/api/public/databases/${DB_ID}/count`);
        const result = await response.json();
        const countEl = document.getElementById('waitlist-count');
        if (countEl && result.count !== undefined) {
            countEl.innerText = result.count + 42; 
        }
    } catch (err) {
        console.error('Failed to fetch count', err);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCount();
});
