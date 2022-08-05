export default function ({ route, redirect, store }) {
    if (store.state.auth.isAuth && route.name == 'login') {
        return redirect('/')
    }
}