(function($) {
    $.fn.rotate = function( deg ) {
        return this.each( function() {
            if(deg == "top"){
                $(this).addClass("rotatetop");
            }
            if(deg == "left"){
                $(this).addClass("rotateleft");
            }
            if(deg == "right"){
                $(this).addClass("rotateright");
            }
            else{
                $(this).css("transform","rotate("+deg+"deg)");
                $(this).css("-webkit-transform","rotate("+deg+"deg)");
                $(this).css("-ms-transform","rotate("+deg+"deg)");
                $(this).css("-moz-transform","rotate("+deg+"deg)");
                $(this).css("-o-transform","rotate("+deg+"deg)");
            }
            
        });
    }
    $.fn.daterotate = function( dir ){
        return this.each(function(){
            if(dir == "top"){
                $("#ui-datepicker-div").addClass("rotatetop");
            }
            if(dir == "left"){
                $("#ui-datepicker-div").addClass("rotateright");
            }
            if(dir == "right"){
                $("#ui-datepicker-div").addClass("rotateleft");
            }
            else{
                $("#ui-datepicker-div").rotate(dir);
            }
        });
    }
    $.fn.keyboard = function( inputs ) {
        return this.each( function() {
            var keyboardInner = $("<div class='symbol'><span class='off'>`</span><span class='on'>~</span></div><div class='symbol'><span class='off'>1</span><span class='on'>!</span></div><div class='symbol'><span class='off'>2</span><span class='on'>@</span></div><div class='symbol'><span class='off'>3</span><span class='on'>#</span></div><div class='symbol'><span class='off'>4</span><span class='on'>$</span></div><div class='symbol'><span class='off'>5</span><span class='on'>%</span></div><div class='symbol'><span class='off'>6</span><span class='on'>^</span></div><div class='symbol'><span class='off'>7</span><span class='on'>&amp;</span></div><div class='symbol'><span class='off'>8</span><span class='on'>*</span></div><div class='symbol'><span class='off'>9</span><span class='on'>(</span></div><div class='symbol'><span class='off'>0</span><span class='on'>)</span></div><div class='symbol'><span class='off'>-</span><span class='on'>_</span></div><div class='symbol'><span class='off'>=</span><span class='on'>+</span></div><div class='delete lastitem'>delete</div><div class='tab'>tab</div><div class='letter'>q</div><div class='letter'>w</div><div class='letter'>e</div><div class='letter'>r</div><div class='letter'>t</div><div class='letter'>y</div><div class='letter'>u</div><div class='letter'>i</div><div class='letter'>o</div><div class='letter'>p</div><div class='symbol'><span class='off'>[</span><span class='on'>{</span></div><div class='symbol'><span class='off'>]</span><span class='on'>}</span></div><div class='symbol lastitem'><span class='off'>"+"/"+"</span><span class='on'>|</span></div><div class='capslock'>caps lock</div><div class='letter'>a</div><div class='letter'>s</div><div class='letter'>d</div><div class='letter'>f</div><div class='letter'>g</div><div class='letter'>h</div><div class='letter'>j</div><div class='letter'>k</div><div class='letter'>l</div><div class='symbol'><span class='off'>;</span><span class='on'>:</span></div><div class='symbol'><span class='off'>'</span><span class='on'>&quot;</span></div><div class='return lastitem'>return</div><div class='left-shift'>shift</div><div class='letter'>z</div><div class='letter'>x</div><div class='letter'>c</div><div class='letter'>v</div><div class='letter'>b</div><div class='letter'>n</div><div class='letter'>m</div><div class='symbol'><span class='off'>,</span><span class='on'>&lt;</span></div><div class='symbol'><span class='off'>.</span><span class='on'>&gt;</span></div><div class='symbol'><span class='off'>/</span><span class='on'>?</span></div><div class='right-shift lastitem'>shift</div><div class='space lastitem'>&nbsp;</div>");
            var keyboard = $(this);
            $(this).addClass("keyboard");
            $(this).append(keyboardInner);
            $(inputs).focus(function(){
                $write = $(this);
            });
            var $write = $('.default_input'),
                shift = false,
                capslock = false;
            $(this).children("div").click(function(){
                var $this = $(this),
                    character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
                // Shift keys
                if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
                    $('.letter',keyboard).toggleClass('uppercase');
                    $('.symbol span',keyboard).toggle();
                    
                    shift = (shift === true) ? false : true;
                    capslock = false;
                    return false;
                }
                
                // Caps lock
                if ($this.hasClass('capslock')) {
                    $('.letter',keyboard).toggleClass('uppercase');
                    capslock = true;
                    return false;
                }
                
                // Delete
                if ($this.hasClass('delete')) {
                    if($write[0].tagName == "TEXTAREA"){
                        var html = $write.html();
                        $write.html(html.substr(0, html.length - 1));
                    }
                    if($write[0].tagName == "INPUT"){
                        var html = $write.val();
                        $write.val(html.substr(0, html.length - 1));
                    };
                    return false;
                }
                
                // Special characters
                if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
                if ($this.hasClass('space')) character = ' ';
                if ($this.hasClass('tab')) character = "\t";
                if ($this.hasClass('return')) character = "\n";
                
                // Uppercase letter
                if ($this.hasClass('uppercase')) character = character.toUpperCase();
                
                // Remove shift once a key is clicked.
                if (shift === true) {
                    $('.symbol span',keyboard).toggle();
                    if (capslock === false) $('.letter',keyboard).toggleClass('uppercase');
                    
                    shift = false;
                }
                
                // Add the character
                if($write[0].tagName == "TEXTAREA"){
                    $write.html($write.html() + character);
                }
                if($write[0].tagName == "INPUT"){
                    $write.val($write.val() + character);
                };
            });
        });
    }
    $.fn.rotateselect = function() {
        return this.each(function() {
            var original = $(this);
            var myselect = $('<span class="rotateselect">'+original.find(':selected').text()+'</span>');
            $(this).hide();
            $(this).after(myselect);
            var myOptions = $('<ul class="rotateselectbox"></ul>');
            myselect.after(myOptions);
            original.find('option').each(function(){
                var option = $('<li>'+$(this).text()+'</li>');
                myOptions.append(option);
            });
            original.change(function () {
                myselect.text(original.find(':selected').text());
            });
            myselect.on('click touchstart',function(e){
                var isOpen = myOptions.hasClass('open');
                $('.rotateselectbox').removeClass('open');
                if(!isOpen){
                    myOptions.addClass('open');
                }
                e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
            });
            var ulli=$("li",myOptions);
            ulli.click(function(){myselect.html($(this).html());});
        });
    };
}(jQuery));
$(document).click(function(){
    $(".rotateselectbox").removeClass('open');
});