/*
 
   SuperS from [0, 1, 2] is 
   [ [], [0], [1], [2], [0, 1], [0, 2], [1, 2], [0, 1, 2] ]

   [0, 1, 2]:

  i = 0;

  e = 0, S' = [1, 2];

  e' = 1, S" = [2];

  e" = 2, S"' = [];

  P" = [ [], [2] ] ([] U ([] U 2))
  P' = [ [], [2], [1], [1, 2]]
  P = [ [], [2], [1], [1, 2], [0], [0, 2], [0, 1], [0, 1, 2] ]

*/

function getPowerset(S) {
    // cloning S, so we don't change old S
    S = S.slice();

    var P = [];

    if (S.length === 0) {
        // f([]) should return [ [] ]
        P.push([]);
    } else {
        // Store the first element from S
        // and remove it from S
        var e = S.shift();

        // Get the powerset of S without first element
        var p = getPowerset(S);

        // For each set in powerset without the first element
        // we add a set and a set with the first element
        // to the current powerset storage
        p.forEach(function(s) {
            P.push(s);
            P.push(s.concat([ e ]));
        });
    }

    return P;
}

var S = [0, 1, 2];
var P = getPowerset(S);

console.log('Powerset of', S, 'is', P);
