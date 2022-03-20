$(document).ready(function () {
    function rowSel() {
        $("tr").click(function () {
            $(this).addClass('highlighted');
        })
    }

    function colSel() {
        $("th").click(function () {
            $(this).addClass('highlighted');
        })
    }

    function deselect() {
        $("td").click(function () {
            $("td").each(function () {
                $(this).removeClass('highlighted');

            })
        })
    }
    deselect()
    colSel()
    rowSel()
})
