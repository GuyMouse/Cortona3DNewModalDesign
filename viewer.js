(function (solo) {
    // Set core path to engine
    solo.baseUrl = 'res/';

    // Set UI skin path
    solo.use('skin', { baseUrl: 'uniview/src/' });

    // Create the application with skin
    const app = solo.skin.create('app');

    // Choose model dynamically (by filename, query param, etc.)
    const modelFilename = 'table.wrl'; // Change to 'catalog.cortona3d' if needed

    // Pick correct XML
    const interactivityFile = 'pump-catalog.interactivity.xml'; // or custom per model

    app.use('solo-uniview', {
        baseUrl: 'uniview/src/',
        src: `data/${interactivityFile}`,
        totalMemory: 64
    }).then(() => {
        console.log('✅ Model loaded');

        // Modify toolbar styling
        const toolbar = app.ui.find('.c3d-toolbar');
        if (toolbar) {
            toolbar.style.cssText = `
                background: linear-gradient(to right, #1e1e1e, #333);
                border-radius: 12px;
                padding: 15px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
                border: 2px solid #0ff;
                transform: scale(1.1);
                opacity: 0.95;
            `;
        }

        // Modify all toolbar buttons
        const buttons = app.ui.findAll('.c3d-button');
        buttons.forEach((btn, i) => {
            btn.style.backgroundColor = '#444';
            btn.style.color = '#0ff';
            btn.style.border = '1px solid #0ff';
            btn.style.borderRadius = '6px';
            btn.style.padding = '10px';
            btn.style.margin = '0 6px';
            btn.style.fontWeight = 'bold';
            btn.style.fontSize = '14px';
            btn.style.transition = 'all 0.3s ease';
            btn.onmouseenter = () => {
                btn.style.backgroundColor = '#0ff';
                btn.style.color = '#000';
            };
            btn.onmouseleave = () => {
                btn.style.backgroundColor = '#444';
                btn.style.color = '#0ff';
            };
        });

        // Modify tooltip
        const tooltip = app.ui.find('.c3d-tooltip');
        if (tooltip) {
            tooltip.style.backgroundColor = '#222';
            tooltip.style.color = '#0ff';
            tooltip.style.border = '1px solid #0ff';
            tooltip.style.borderRadius = '5px';
            tooltip.style.padding = '5px 10px';
        }

        // Modify layout container (optional visual effect)
        const container = app.ui.find('.c3d-layout');
        if (container) {
            container.style.border = '2px dashed red';
            container.style.margin = '10px';
        }

    }).catch(err => {
        console.error('❌ Error loading model:', err);
    });

})(Cortona3DSolo);
