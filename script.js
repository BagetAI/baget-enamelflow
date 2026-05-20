async function handleWaitlistSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
        companyId: "ec34e8e2-4cbb-404f-b0e0-34cbf459f638",
        email: formData.get('email'),
        name: formData.get('practice_name')
    };

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Joining...';
    submitBtn.disabled = true;

    try {
        const response = await fetch(`https://app.baget.ai/api/leads`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
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
