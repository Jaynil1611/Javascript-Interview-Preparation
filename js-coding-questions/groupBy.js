// Suppose you have input like:

var skillsArray = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

// Convert it into result of the following form:
// [
//   { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
//   { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
//   { skill: 'html', user: [ 'Sue' ], count: 1 } 
// ]

function groupBySkill(array) {
  return Object.values(array.reduce((result, { skill, user }) => {
    if (!result[skill]) {
      return { ...result, [skill]: { skill, user: [user], count: 1 } };
    }
    const obj = result[skill];
    return { ...result, [skill]: { skill, user: obj.user.concat(user), count: obj.count + 1 } }
  }, {})).sort((a, b) => a.count < b.count ? 1 : -1);
}

console.log(groupBySkill(skillsArray));


// function groupBySkill(array) {
//   return array.reduce((result, { skill, user }) => {

//     const skillExists = result.filter((res) => res.skill === skill).length;

//     if (!result.length || !skillExists) {
//       return result.concat({ skill, user: [user], count: 1 })
//     }
//     return result.map((res) => {
//       return skill === res.skill ? { ...res, user: res.user.concat(user), count: res.count + 1 } : res;
//     })
//   }, []).sort((a, b) => a.count < b.count ? 1 : -1)
// }
