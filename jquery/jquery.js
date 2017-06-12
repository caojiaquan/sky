/**
 * Created by Administrator on 2017/6/5 0005.
 */
function $(args){
    return new Jquery(args);
}
function Jquery(args){
    this.elements = [];
    switch (typeof args){
        case  'function':
            window.addEventListener('load',args,false);
            break;
        case 'string':
            var firstString = args.substr(0,1);
            if(firstString == '#'){
                var selectString = args.slice(1);
                var elem = document.getElementById(selectString);

                this.elements.push(elem);

                //return elem;
            }else if(firstString == '.'){
                var selectString = args.slice(1);
                var elem = document.getElementsByClassName(selectString);
                this.elements = [];
            }else{
                var elem = document.getElementsByTagName(args);
                this.elements = [];
            }
    }
}
Jquery.prototype.addClass = function(cls){
    console.log(this.elements);
    for(var i=0; i<this.elements.length; i++){
        this.elements[i].className = cls;
    }
    return this;
}