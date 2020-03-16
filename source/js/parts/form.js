export default function handleFormSubmit() {

    $('.js-checkout').on('submit', e => {
        e.preventDefault();

        const $form = $(e.target);

        const params = {
            formData: $form.serializeArray()
        };

        const callbackSuccess = () => {
            $('.header-checkout--success, .footer-checkout, .main-checkout__wrapper').toggleClass("hidden");
        }

        const callbackError = errors => {
            console.group('Ошибка');
            errors.forEach(error => {
                console.log(`${ error.fieldName }: ${ error.message}`)
            });
            console.groupEnd();
        };

        window.API.onFormSubmit(params, callbackSuccess, callbackError)
    });
}
