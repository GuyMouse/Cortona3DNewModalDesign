(function (solo) {
    // Set core path to engine
    solo.baseUrl = 'res/';

    // Set UI skin path
    solo.use('skin', { baseUrl: 'uniview/src/' });

    // Create the application with skin
    const app = solo.skin.create('app');

    // Choose model dynamically (by filename, query param, etc.)

    // Pick correct XML
    // const interactivityFile = 'table.wrl'; // Change to 'catalog.cortona3d' if needed
    // const interactivityFile = 'pump-catalog.interactivity.xml'; // or custom per model
    const interactivityFile = 'test.xml';
    app.use('solo-uniview', {
        baseUrl: 'uniview/src/',
        src: `./data/${interactivityFile}`,
        totalMemory: 64
    }).then(() => {
        console.log('✅ Model loaded');
        let title = document.querySelector('.direction-column.left.skin-container .title');
        let date = document.querySelector('.direction-column.right.skin-container > .mono.low.skin-text');
        let pagehide = document.querySelector('.direction-column.left.skin-container > .mono.low');
        let columnItem = document.querySelector('td[data-column-id="ITEM"]');
        let columnDESCR = document.querySelector('td[data-column-id="DESCR"]');
        let columnPARTNUMBER = document.querySelector('td[data-column-id="PARTNUMBER"]');
        let columnQTY = document.querySelector('td[data-column-id="QTY"]');
        let columnAPPLICABILITY = document.querySelector('td[data-column-id="APPLICABILITY"]');
        let columnINFO = document.querySelector('td[data-column-id="INFO"]');
        columnItem.innerText = 'פריט';
        columnDESCR.innerText = 'תיאור';
        columnPARTNUMBER.innerText = 'מספר חלק';
        columnQTY.innerText = 'כמות';
        columnAPPLICABILITY.innerText = 'התאמה';
        columnINFO.innerText = 'מידע';
        pagehide.innerHTML = '';
        date.innerText = 'תאריך הפצה: 2025-08-20'
        title.innerText = 'מודל דינמי'
        // console.log(title);
        // Modify toolbar styling
        // const toolbar = app.ui.find('.c3d-toolbar');
        // if (toolbar) {
        //     toolbar.style.cssText = `
        //         background: linear-gradient(to right, #1e1e1e, #333);
        //         border-radius: 12px;
        //         padding: 15px;
        //         box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        //         border: 2px solid #0ff;
        //         transform: scale(1.1);
        //         opacity: 0.95;`;
        // }

        // // Modify all toolbar buttons
        // const buttons = app.ui.findAll('.c3d-button');
        // buttons.forEach((btn, i) => {
        //     btn.style.backgroundColor = '#444';
        //     btn.style.color = '#0ff';
        //     btn.style.border = '1px solid #0ff';
        //     btn.style.borderRadius = '6px';
        //     btn.style.padding = '10px';
        //     btn.style.margin = '0 6px';
        //     btn.style.fontWeight = 'bold';
        //     btn.style.fontSize = '14px';
        //     btn.style.transition = 'all 0.3s ease';
        //     btn.onmouseenter = () => {
        //         btn.style.backgroundColor = '#0ff';
        //         btn.style.color = '#000';
        //     };
        //     btn.onmouseleave = () => {
        //         btn.style.backgroundColor = '#444';
        //         btn.style.color = '#0ff';
        //     };
        // });

        // // Modify tooltip
        // const tooltip = app.ui.find('.c3d-tooltip');
        // if (tooltip) {
        //     tooltip.style.backgroundColor = '#222';
        //     tooltip.style.color = '#0ff';
        //     tooltip.style.border = '1px solid #0ff';
        //     tooltip.style.borderRadius = '5px';
        //     tooltip.style.padding = '5px 10px';
        // }

        // // Modify layout container (optional visual effect)
        // const container = app.ui.find('.c3d-layout');
        // if (container) {
        //     container.style.border = '2px dashed red';
        //     container.style.margin = '10px';
        // }

    }).catch(err => {
        console.error('❌ Error loading model:', err);
    });

})(Cortona3DSolo);
