import deleteLink from './parts/delete-link'
import initSliders from './parts/slider';
import initTheme from './parts/init-theme'
import lazyLoad from './parts/lazyload';
import initPopup from './parts/popup';
import handleFormSubmit from './parts/form';
import saveToLocalStorage from './parts/local.js'


$(document).ready(() => {
    deleteLink();
    initSliders();
    initTheme();
    lazyLoad();
    initPopup();
    handleFormSubmit();
    saveToLocalStorage();
});