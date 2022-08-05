export default ({ app }, inject) => {
    function hi() {
        console.log("Salom Dunyo");
    }
    inject('hi', hi)
}