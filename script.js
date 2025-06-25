document.querySelectorAll('.step').forEach(step => {
      step.addEventListener('click', () => {
        document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
        step.classList.add('active');
      });
    });