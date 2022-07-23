class Ability {
    constructor (name, parentDiv, qty)
    {
        // ihherited
    this.name = name,
    this.parentDiv = parentDiv,
        // stars (?)
    this.stars = {
        full : [],
        empty : this.makeStars(qty)
    }
        //divs
    this.abilityDiv = this.makeAbilityDiv(),
    this.labelDiv = this.makeLabelDiv(),
    this.starsDiv = this.makeStarsDiv();

    this.appendToParent(parentDiv);
    this.appendStars()
    this.bindStarsListeners();
    }

    makeAbilityDiv = function() {
        let div = document.createElement('div')
        div.classList.add('ability')
        div.id = `${this.name}`
        return div
    }
    makeLabelDiv = function() {
        let div = document.createElement('div');
        div.classList.add(`ability-name`);
        div.id = `${this.name}-label`;

        let p = document.createElement('p');
        p.innerText = this.name.toUpperCase()
        div.appendChild(p)
        return div
    }
    makeStarsDiv = function() {
        let div = document.createElement('div');
        div.classList.add('ability-stars');
        div.id = `${this.name}-stars`;
        return div
    }
    appendToParent = function(div) {
        this.abilityDiv.appendChild(this.labelDiv)
        this.abilityDiv.appendChild(this.starsDiv)
        div.appendChild(this.abilityDiv)
    }

    makeStars = function(qty) {
        let starsArr = [];
        for(let i = 0; i < qty; ++i){
            let star = document.createElement('span');
            star.textContent += "star_outline";
            star.classList.add('material-icons');
            star.setAttribute('id', i);
            starsArr.push(star)
        }  return starsArr

    }

    appendStars = function() {
        this.stars.empty.forEach(element => {
            this.starsDiv.appendChild(element)
        });
    }

    bindStarsListeners = function() {
        this.stars.empty.forEach((star) => {
            star.addEventListener('click', e => {
                let clicked = e.target
                    if(clicked.nodeName === 'SPAN' && clicked.innerText == 'star_outline') {
                        this.logStar(clicked);

                    }
            })
        })

    }

    logStar = function(clicked) {
        clicked.innerText = 'star';

        this.stars.full.push(clicked);

        console.log(this.stars)
    }
    
}


let appContainerDiv = document.getElementById('app-container')
let health = new Ability ('health', appContainerDiv,5)

console.log(health)