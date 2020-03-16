export default function saveToLocalStorage() {

    let input = $('.js-field');
    console.log(input);

    $.each(input, (index, value) => {
        value.value= localStorage.getItem(value.id);
        value.oninput = () => {
            localStorage.setItem(value.id, value.value)
        }
    })
}