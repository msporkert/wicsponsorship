
class BoardMember {
    constructor(role, name, id) {
        this.role = role;
        this.name = name;
        this.imgSrc = role + ".jpg";
        this.bio = '';
        this.id = id;
    }

    setImgSrc(src) {
        this.imgSrc = src;
    }

    setBio(bio) {
        this.bio = bio;
    }

    setId(id) {
        this.id = id;
    }

    getNameHTML() {
        return ' <h3>' + this.name + '</h3> <h4>' + this.role + '</h4> ';
    }

    getImgHTML() {
        return '<div class="circle-crop"> <img src=" ' + this.imgSrc + ' " /> </div> ';
    }

    getFullHTML() {
        return '<div class="boardmember" onclick="expandBio(this,' + this.id + ')">' + this.getImgHTML() + this.getNameHTML() + '</div>';
    }

}

class BoardMembers {

    constructor() {
        this.members = [];
        this.members[0] = new BoardMember('President', 'Madeline Sporkert', 0);
        this.members[0].setBio("Maddy is a third year MathCS student at UCSD. She comes from a family of software engineers, who always encouraged her to follow her passion, and not the status quo. Through WIC, she hopes to spread this mentality to other girls interested in STEM. When she's not coding, she loves to watch Netflix and relax at the beach.");

        this.members[1] = new BoardMember('Vice President', 'Priyal Suneja', 1);
        this.members[1].setImgSrc('vicepresident.jpg');

        this.members[2] = new BoardMember('Professional Development Co Chair', 'Grace Carlson', 2);
        this.members[2].setImgSrc('prodev1.jpg');


        this.members[3] = new BoardMember('Professional Development Co Chair', 'Baljot Sekhon', 3);
        this.members[3].setImgSrc('prodev2.jpg');
    }



}

var NUM_PER_ROW = 4;
var NUM_BOARD_MEMBERS = 14;



let bm = new BoardMembers();

function expandBio(element, id) {
    let row = i % NUM_PER_ROW;
    let rowDiv= document.getElementById("boardRow"+row);

    var bio = document.createElement('div');
    rowDiv.parentNode.insertBefore( bio, rowDiv.nextSibling );

}

var rowId = "boardRow";
var row = 1;
var container= document.getElementById(rowId + ""+row);

for (var i = 0; i < NUM_BOARD_MEMBERS; i++) {
    if (i == row * NUM_PER_ROW) {
        row++;
        container = document.getElementById(rowId + ""+row);
    }
    container.innerHTML += bm.members[i].getFullHTML();
}
var container = document.getElementById("boardRow1");

container.innerHTML += bm.members['president'].getFullHTML();