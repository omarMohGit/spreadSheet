$(document).ready(function () {
    function rowSel() {
        $("tr").click(function () {
            $(this).addClass("highlighted");
        })
    }

    function colSel() {
        $("th").click(function () {
            var column = $(this).attr('data-column');
            $(' td[data-column=' + column + ']').addClass('highlighted');
        })
    }

    function deselect() {
        $("td").click(function () {
            $("td").each(function () {
                $(this).addClass('noorsCute');
            })

        })
    }

    deselect()
    colSel()
    rowSel()
    $("td").removeClass("highlighted");


})
