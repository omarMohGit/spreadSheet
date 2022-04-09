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

    function update() {
        $("td").on('dblclick', function (event) {

            var tdObj = $(this);
            var preText = tdObj.html();
            var inputObj = $("<input type='text' />");
            tdObj.html("");

            //when you double click on cell
            inputObj.width(tdObj.width())
                .height(tdObj.height())
                .appendTo(tdObj)


            inputObj.keyup(function (event) {
                //enter updates value
                if (event.which == 13) {
                    tdObj.html($(this).val());
                }
                //escape will keep og value
                else if (event.which == 27) {
                    tdObj.html(preText);
                }
            });

            inputObj.click(function () {
                return false;
            });


        });

    }



    function dataG() {

        var clicked = 0;
        var selectValue;


        $(".time").on('click', function (e) {
            var a = 0;
            var b = 0;
            var c = 0;
            var d = 0;
            var f = 0;

            var rowCount = $(".hey tr").length - 1;
            const valorant = [];
            clicked = clicked + 1;


            $(".hey tr").each(function () {

                selectValue = $(this).find('td:eq(0)').html();
                console.log(selectValue)
                if (selectValue < 50) {
                    f++;
                }
                if (selectValue >= 50 && selectValue <= 59) {
                    d++;
                }
                if (selectValue >= 60 && selectValue <= 69) {
                    c++;
                }
                if (selectValue >= 70 && selectValue <= 79) {
                    b++;
                }
                if (selectValue >= 80 && selectValue <= 100) {
                    a++;
                }
                var aF = a / rowCount;
                var bF = b / rowCount;
                var cF = c / rowCount;
                var dF = d / rowCount;
                var fF = f / rowCount;
                valorant[0] = aF;
                valorant[1] = bF;
                valorant[2] = cF;
                valorant[3] = dF;
                valorant[4] = fF;
            });

            visual(valorant, clicked);
        });



        $(".time2").on('click', function (e) {
            var a = 0;
            var b = 0;
            var c = 0;
            var d = 0;
            var f = 0;

            var rowCount = $(".hey tr").length - 1;
            const valorant = [];
            clicked = clicked + 1;


            $(".hey tr").each(function () {

                selectValue = $(this).find('td:eq(1)').html();
                console.log(selectValue)
                if (selectValue < 50) {
                    f++;
                }
                if (selectValue >= 50 && selectValue <= 59) {
                    d++;
                }
                if (selectValue >= 60 && selectValue <= 69) {
                    c++;
                }
                if (selectValue >= 70 && selectValue <= 79) {
                    b++;
                }
                if (selectValue >= 80 && selectValue <= 100) {
                    a++;
                }
                var aF = a / rowCount;
                var bF = b / rowCount;
                var cF = c / rowCount;
                var dF = d / rowCount;
                var fF = f / rowCount;
                valorant[0] = aF;
                valorant[1] = bF;
                valorant[2] = cF;
                valorant[3] = dF;
                valorant[4] = fF;
            });

            visual(valorant, clicked);
        });

        $(".time3").on('click', function (e) {
            var a = 0;
            var b = 0;
            var c = 0;
            var d = 0;
            var f = 0;
            var rowCount = $(".hey tr").length - 1;
            const valorant = [];
            clicked = clicked + 1;


            $(".hey tr").each(function () {

                selectValue = $(this).find('td:eq(2)').html();
                console.log(selectValue)
                if (selectValue < 50) {
                    f++;
                }
                if (selectValue >= 50 && selectValue <= 59) {
                    d++;
                }
                if (selectValue >= 60 && selectValue <= 69) {
                    c++;
                }
                if (selectValue >= 70 && selectValue <= 79) {
                    b++;
                }
                if (selectValue >= 80 && selectValue <= 100) {
                    a++;
                }
                var aF = a / rowCount;
                var bF = b / rowCount;
                var cF = c / rowCount;
                var dF = d / rowCount;
                var fF = f / rowCount;
                valorant[0] = aF;
                valorant[1] = bF;
                valorant[2] = cF;
                valorant[3] = dF;
                valorant[4] = fF;
            });

            visual(valorant, clicked);
        });

        $(".time4").on('click', function (e) {
            var a = 0;
            var b = 0;
            var c = 0;
            var d = 0;
            var f = 0;

            var rowCount = $(".hey tr").length - 1;
            const valorant = [];
            clicked = clicked + 1;


            $(".hey tr").each(function () {

                selectValue = $(this).find('td:eq(3)').html();
                console.log(selectValue)
                if (selectValue < 50) {
                    f++;
                }
                if (selectValue >= 50 && selectValue <= 59) {
                    d++;
                }
                if (selectValue >= 60 && selectValue <= 69) {
                    c++;
                }
                if (selectValue >= 70 && selectValue <= 79) {
                    b++;
                }
                if (selectValue >= 80 && selectValue <= 100) {
                    a++;
                }
                var aF = a / rowCount;
                var bF = b / rowCount;
                var cF = c / rowCount;
                var dF = d / rowCount;
                var fF = f / rowCount;
                valorant[0] = aF;
                valorant[1] = bF;
                valorant[2] = cF;
                valorant[3] = dF;
                valorant[4] = fF;
            });

            visual(valorant, clicked);
        });

        $(".time5").on('click', function (e) {
            var a = 0;
            var b = 0;
            var c = 0;
            var d = 0;
            var f = 0;

            var rowCount = $(".hey tr").length - 1;
            const valorant = [];
            clicked = clicked + 1;



            $(".hey tr").each(function () {

                selectValue = $(this).find('td:eq(4)').html();
                console.log(selectValue)
                if (selectValue < 50) {
                    f++;
                }
                if (selectValue >= 50 && selectValue <= 59) {
                    d++;
                }
                if (selectValue >= 60 && selectValue <= 69) {
                    c++;
                }
                if (selectValue >= 70 && selectValue <= 79) {
                    b++;
                }
                if (selectValue >= 80 && selectValue <= 100) {
                    a++;
                }
                var aF = a / rowCount;
                var bF = b / rowCount;
                var cF = c / rowCount;
                var dF = d / rowCount;
                var fF = f / rowCount;
                valorant[0] = aF;
                valorant[1] = bF;
                valorant[2] = cF;
                valorant[3] = dF;
                valorant[4] = fF;
            });

            visual(valorant, clicked);
        });


    }

    function visual(valorant, clicked) {
        if (clicked > 1) {
            d3.selectAll("svg").remove();
        }
        const data = [
            { name: 'A', score: valorant[0] },
            { name: 'B', score: valorant[1] },
            { name: 'C', score: valorant[2] },
            { name: 'D', score: valorant[3] },
            { name: 'F', score: valorant[4] },
        ];

        const height = 500;
        const width = 1000;
        const margin = { top: 50, bottom: 50, left: 200, right: 150 };

        const svg = d3.select('#graphy')
            .append('svg')
            .attr('width', width - margin.left - margin.right)
            .attr('height', height - margin.top - margin.bottom)
            .attr("viewBox", [0, 0, width, height]);



        const x = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([margin.left, width - margin.right])
            .padding(0.1)

        const y = d3.scaleLinear()
            .domain([0, 1.0])
            .range([height - margin.bottom, margin.top])

        svg
            .append("g")
            .attr("fill", 'purple')
            .selectAll("rect")
            .data(data)
            .join("rect")
            .attr("x", (d, i) => x(i))
            .attr("y", d => y(d.score))
            .attr('title', (d) => d.score)
            .attr("class", "rect")
            .attr("height", d => y(0) - y(d.score))
            .attr("width", x.bandwidth());

        svg.append("text")
            .attr("transform", "translate(" + (width / 2) + " ," + (height - 10) + ")")
            .style("font-size", "25px")
            .text("Grade");

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", -(height / 2))
            .attr("y", 125)
            .attr("text-anchor", "middle")
            .style("font-size", "25px")
            .text("Frequency (%)");

        svg.append("text")
            .attr("x", width / 2)
            .attr("text-anchor", "middle")
            .style("font-size", "25px")
            .text("Grade Distribution");



        function yAxis(g) {
            g.attr("transform", `translate(${margin.left}, 0)`)
                .call(d3.axisLeft(y).ticks(null, data.format))
                .attr("font-size", '20px')
        }

        function xAxis(g) {
            g.attr("transform", `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(x).tickFormat(i => data[i].name))
                .attr("font-size", '10px')
        }
        svg.append("g").call(xAxis);
        svg.append("g").call(yAxis);
        svg.node();

    }
    colSel()
    rowSel()
    deselect()
    update()
    dataG()

})




