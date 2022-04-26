
    "use strict";
    (function(){



    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray = [planetsString]
        let planetsStringSplit = planetsString.split('|')
        let bonusPlanetString = planetsString.join('""')


    console.log(planetsArray);
        console.log('string split '+ planetsStringSplit);


        /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
let brPlanetBrJoin = planetsStringSplit.join('<br>')
//     let planetsWithBreaks = planetsArray.join('<br>')
//
// console.log(planetsWithBreaks)
console.log(brPlanetBrJoin)

        // let bonusQuestionUL = '<ul>' +  '</ul>'
        let bonusText = bonusPlanetString

        console.log(bonusText)

})();
