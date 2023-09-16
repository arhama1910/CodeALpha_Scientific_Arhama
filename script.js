function sin(){
	document.calcul.result.value=Math.sin(document.calcul.result.value);
	}

	function cos(){
	document.calcul.result.value=Math.cos(document.calcul.result.value);
	}

	function tan(){
	document.calcul.result.value=Math.tan(document.calcul.result.value);
	}

	function BACKSPC(){
	var a = document.calcul.result.value;
	document.calcul.result.value = a.substr(0, a.length-1);
	}

	function square(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 2);
	}

	function cubed(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 3);
	}

	function sqrt2(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 1/2);
	}

	function sqrt3(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 1/3);
	}

	function number(value){
	document.calcul.result.value += value;
	}

	function remv(){
	document.calcul.result.value=" ";
	}

	function equal(){
	document.calcul.result.value=eval(document.calcul.result.value);
	}
    function log() {
        document.calcul.result.value = Math.log(document.calcul.result.value);
    }
    
    function exp() {
        document.calcul.result.value = Math.exp(document.calcul.result.value);
    }
    
    function abs() {
        document.calcul.result.value = Math.abs(document.calcul.result.value);
    }
    
    function floor() {
        document.calcul.result.value = Math.floor(document.calcul.result.value);
    }
    
    function ceil() {
        document.calcul.result.value = Math.ceil(document.calcul.result.value);
    }
    
    function round() {
        document.calcul.result.value = Math.round(document.calcul.result.value);
    }
    
    function min() {
        const values = document.calcul.result.value.split(',').map(parseFloat);
        document.calcul.result.value = Math.min(...values);
    }
    
    function max() {
        const values = document.calcul.result.value.split(',').map(parseFloat);
        document.calcul.result.value = Math.max(...values);
    }
    
    function log10() {
        document.calcul.result.value = Math.log10(document.calcul.result.value);
    }
    
    function sqrt() {
        document.calcul.result.value = Math.sqrt(document.calcul.result.value);
    }
    
    function asin() {
        document.calcul.result.value = Math.asin(document.calcul.result.value);
    }
    
    function acos() {
        document.calcul.result.value = Math.acos(document.calcul.result.value);
    }
    
    function atan() {
        document.calcul.result.value = Math.atan(document.calcul.result.value);
    }
    
    function rand() {
        document.calcul.result.value = Math.random();
    }
    