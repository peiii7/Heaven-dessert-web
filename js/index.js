$(function () {
    $(document).ready(function () {
        let $ul = $('.nav-list'),
            $menu = $('.nav-menu')

        $($menu).click(function () {
            $ul.toggleClass('menu-click')
        })
    })
})
