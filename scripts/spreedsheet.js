$(document).ready(function () {
    function rowSel() {
        $("tr").click(function () {
            $(this).toggleClass("highlighted");
        })
    }

    function colSel() {
        $("th").click(function () {
            var column = $(this).attr('data-column');
            $(' td[data-column=' + column + ']').toggleClass('highlighted');
        })
    }

    function deselect() {
        $("td").click(function () {
            $("td").each(function () {
                $(this).toggleClass('unhighlighted');
            })

        })
    }

    colSel()
    rowSel()
    deselect()
})
