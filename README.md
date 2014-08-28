Rotatefree
==============================
Rotate your HTML elements easy and perfect.<br>
HTML screen keyboard allow multiple input elements.

Browser Support
------------------------------
Rotatefree works with all modern browsers with CSS3 support, as well as some old ones such as Internet Explorer 8, 9, etc.

Including files 
------------------------------
First, include Jquery.<br>
If you use datepicker, JqueryUI is necessary.

    <!--Jquery-->
    <script src="http://code.jquery.com/jquery-1.10.2.js"></script>


    <!--Input rotatefree-->
    <script src="js/rotatefree.js"></script>
    <!--Input rotatefree style-->
    <link rel="stylesheet" href="css/rotatefree.css">


    <!--If you use datepicker, include JQuery UI and its style-->
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css">


    <!--Our demo style-->
    <link rel="stylesheet" href="css/input_style.css">

Rotate
------------------------------
Recommend using square element to avoid wrong location.<br>
Or you can set value of CSS attribute transform-origin to change the axial center.

### Method 1 :
Directly add class rotatetop, rotateright or rotateleft on the HTML element.<br>
Rotatetop: 180deg,<br>
Rotateright: 90deg,<br>
Rotateleft: -90deg.<br>
<br>
Html :

    <div class="rotatetop">…</div>

### Method 2 : 
Use javascript to rotate it.<br>
<br>
Html :

    <div id="IDNANE"></div>
Javascript :

    $("#IDNAME").rotate(parameter);

parameters could be "top", "right", "left" or angle deg, such as 172.

Some objects need other HTML structure
-----------------------------------------
### Select & Option tag 
Select and Option tag can’t rotate directly.<br>
We custom new select by javascript, because original broswer Option tag can't be rotate.<br>
Use rotateselect function to custom it.<br>
Select rotate should be contained by a div tag and rotate the div tag.<br>
Don't rotate Select and Option driectly even if it use rotateselect function.<br>
<br>
Html :

    <div class="rotatediv">
        <select id="rotateselect1">
    		<option value="1">1</option>
    		<option value="2">2</option>
    		<option value="3">3</option>
    	</select>
    </div>
Javascript :

    $("#rotateselect1").rotateselect();
    $(".rotatediv").rotate(180);<!--rotate div to rotate select & option-->

### Datepicker 
Use JQueryUI datepicker instead of input type="date".<br>
<br>
Html :

    <input type="text" id="datepicker">
Javascript :

    $("#datepicker").datepicker();
    $("#datepicker").rotate(parameters);  <!--rotate the input element-->
    $("#datepicker").daterotate(parameters);  <!--rotate calendar-->

parameters could be "top", "right", "left" or angle deg.

Keyboard
----------------------------------------
We edit the code from <a href="http://code.tutsplus.com/tutorials/creating-a-keyboard-with-css-and-jquery--net-5774">here</a>.<br>
Our keyboard can support multiple input elements and you can create several keyboards in one HTML page.<br>
If there are not only one input fields, you should give them same class to make them can input from the same keyboard.<br>
Same class will input from the same keyboard.<br>
The HTML screen keyboard can rotate such as other HTML elements.<br>
The HTML screen keyboard default size is 683px * 230px.<br>
<br>
Html:

    <input type="text" class="textinput1"/> <!--keyboard1 input-->
    <textarea class="textinput1"><textarea> <!--keyboard1 textarea-->
    <div id="keyboard1"></div> <!--keyboard1-->


    <input type="text" class="textinput2"/> <!--keyboard2 input-->
    <textarea class="textinput2"> <!--keyboard2 textarea-->
    <div id="keyboard2"></div> <!--keyboard2-->
Javascript:

    $(document).ready(function() {
        $("#keyboard1").keyboard('.textinput1');
        $("#keyboard2").keyboard('.textinput2');
    });
