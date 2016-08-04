function generator() {
    var HOST = "https://coding.net/static/project_icon/scenery-";
    var i = rd(1,24);
    var img = HOST+i+".png";

    return img;

    function rd(n,m){
        var c = m-n+1;
        return Math.floor(Math.random() * c + n);
    }
}

module.exports = generator;