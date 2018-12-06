/**
 * @file   mofron-comp-ScreenSwh/index.js
 * @brief  screen switch component for mofron
 * @author simpart
 */
const mf     = require('mofron');
const Switch = require('mofron-comp-switch');
const Screen = require('mofron-comp-screenif');
const Click  = require('mofron-event-click');

mf.comp.ScreenSwh = class extends Switch {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('ScreenSwh');
            this.prmMap('child');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @npte private method
     */
    initDomConts () {
        try {
            super.initDomConts();
            
            let clk = (swh) => {
                try {
                    let chd = swh.child();
                    for (let cidx in chd) {
                        if (true === chd[cidx].visible()) {
                            if (0 == cidx) {
                                new Screen().fullScreen();
                            } else if (1 == cidx) {
                                new Screen().windowed();
                            }
                        }
                    }
                    swh.swComp(); 
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            };
            
            this.event([ new Click(clk) ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.ScreenSwh;
/* end of file */
