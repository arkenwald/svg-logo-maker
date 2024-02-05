class Shape{
    // colour can be added to the class shape
    
        constructor(){
            this.color=''
        }
        setColor(color){
            this.color=(color);
        }
    }
    // circle class declaring properties for a circle and filling it with the colour selected
    class Circle extends Shape{
        render(){
            return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
        }
    }
    // square class declaring properties for a circle and filling with the colour selected
    class Square extends Shape{
        render(){
            return `<rect x="50" height="200" width="200" fill="${this.color}">`
        }
    }
    // triangle class declaring properties for a circle and filling with the colour selected
    class Triangle extends Shape{
        render(){
            return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
        }
    };
    
    module.exports = {Circle, Square, Triangle}